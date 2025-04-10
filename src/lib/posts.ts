import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import axios from 'axios';

const contentDir = path.join(process.cwd(), 'static/content');
const GITHUB_CONTENT_URL = 'https://raw.githubusercontent.com/arxisme/webBlogs/main/static/content/';

type PostMeta = {
  slug: string;
  title: string;
  date: string;
};

export async function getAllPosts(): Promise<PostMeta[]> {
  try {
    // Example: Fetch list of files dynamically (optional, if hosted in a GitHub repo)
    const response = await axios.get(`${GITHUB_CONTENT_URL}/posts.json`);
    return response.data; // Use a pre-generated JSON with metadata
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

export async function getPost(slug: string): Promise<any> {
  try {
    const response = await axios.get(`${GITHUB_CONTENT_URL}/${slug}.md`);
    const raw = response.data;
    const { data, content } = matter(raw);
    return { ...data, content };
  } catch (error) {
    console.error(`Error fetching post ${slug}:`, error);
    return null;
  }
}