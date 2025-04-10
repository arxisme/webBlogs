import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDir = './src/content';
type PostMeta = {
  slug: string;
  title: string;
  date: string;
};
export function getAllPosts(): PostMeta[] {
  const files = fs.readdirSync(contentDir);

  return files.map((file) => {
    const slug = file.replace('.md', '');
    const raw = fs.readFileSync(path.join(contentDir, file), 'utf-8');
    const { data } = matter(raw);

    return {
      slug,
      title: data.title ?? 'Untitled',
      date: data.date ?? 'Unknown'
    };
  });
}

export function getPost(slug: string) {
  const filePath = path.join(contentDir, `${slug}.md`);
  const raw = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(raw);
  return { ...data, content };
}
