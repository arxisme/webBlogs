import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDir = path.join(process.cwd(), 'static/content');

type PostMeta = {
  slug: string;
  title: string;
  date: string;
};

export function getAllPosts(): PostMeta[] {
  try {
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
  } catch (error) {
    console.error('Error reading posts directory:', error);
    return [];
  }
}

export function getPost(slug: string) {
  try {
    const filePath = path.join(contentDir, `${slug}.md`);
    const raw = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(raw);
    return { ...data, content };
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error);
    return null;
  }
}