import path from "path";
import fs from 'fs';
import matter from "front-matter";
import {marked} from "marked";
import { Post } from "../interfaces";

export function getPosts(): Post[] {
  const postsDirectory = path.join(process.cwd(), '_posts');
  const fileNames = fs.readdirSync(postsDirectory);

  const posts: Post[] = fileNames.reduce((acc, fileName) => {
    if (path.extname(fileName) === '.md') {
      const filePath = path.join(postsDirectory, fileName);
      const markdown = fs.readFileSync(filePath, 'utf8');
      const { attributes, body } = matter(markdown);
      
      const htmlContent = marked.parse(body);

      acc.push({
        id: attributes.date + ': ' + attributes.title.replace(/\s/g, '-'),
        title: attributes.title,
        author: attributes.author,
        date: attributes.date,
        content: htmlContent,
      });
    }
    return acc;
  }, [] as Post[]);

  return posts;
}