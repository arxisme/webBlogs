import { getPost, getAllPosts } from '$lib/posts';
import { marked } from 'marked';
import markedKatex from 'marked-katex-extension';

// Configure marked with KaTeX
const options = {
  throwOnError: false,
};
marked.use(markedKatex(options));

// Function to normalize line breaks in LaTeX expressions
function normalizeLatex(content: string): string {
  return content.replace(/\$\$(.*?)\$\$/gs, (match, expr) => {
    return `$$${expr.replace(/\n/g, ' ')}$$`; // Replace line breaks with spaces in block LaTeX
  }).replace(/\$(.*?)\$/g, (match, expr) => {
    return `$${expr.replace(/\n/g, ' ')}$`; // Replace line breaks with spaces in inline LaTeX
  });
}

export async function load({ params }) {
  const post = await getPost(params.slug);
  const posts = await getAllPosts();

  // Normalize LaTeX expressions to remove line breaks
  if (!post) {
    throw new Error(`Post with slug "${params.slug}" not found.`);
  }
  const normalizedContent = normalizeLatex(post.content);

  // Parse the post content with marked
  const parsedContent = marked.parse(normalizedContent);

  // Get the 5 most recent posts
  const recentPosts = posts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 5);

  return {
    content: parsedContent,
    meta: post,
    recentPosts,
  };
}


