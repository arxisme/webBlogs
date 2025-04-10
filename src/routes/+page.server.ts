import { getAllPosts } from '$lib/posts';


export async function load({ params }) {

  const posts = await getAllPosts();

  // Get the 5 most recent posts
  const recentPosts = posts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 5);
  return {

    recentPosts
  };
}


