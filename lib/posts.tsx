import path from 'path';
import { promises as fs } from 'fs'; 
import matter from 'front-matter'; 
import { marked } from 'marked'; 
import { Post } from '../interfaces'; 


export async function getPosts(): Promise<Post[]> {
  const postsDirectory = path.join(process.cwd(), '_posts');

  try {
    const fileNames = await fs.readdir(postsDirectory); 

    const posts: Post[] = await Promise.all(
      fileNames.map(async (fileName) => {
        if (path.extname(fileName) === '.md') {
          const filePath = path.join(postsDirectory, fileName);
          const fileContent = await fs.readFile(filePath, 'utf8'); 
          const result = matter<Post>(fileContent); 
          const attributes = result.attributes;
          const content = result.body;

          if (!attributes.id) {
            console.warn(`Error: Missing required attribute 'id' in ${fileName}`);
            return null; 
          }

          const htmlContent = await marked.parse(content);

          return {
            id: attributes.id, 
            title: attributes.title,
            author: attributes.author,
            date: attributes.date,
            subtext: attributes.subtext,
            content: htmlContent,
          } as Post;
        }

        return null; 
      })
    );

    return posts.filter(Boolean) as Post[]; // Filter out null values    return filteredPosts;
  } catch (error) {
    console.error('Error reading or processing posts:', error);
    return []; // Handle errors gracefully
  }
}