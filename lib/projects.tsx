import path from "path";
import fs from 'fs';
import matter from "front-matter";
import {marked} from "marked";
import { Post, ProjectCard, Project } from "../interfaces";

export function getProjects(): Project[] {
  const postsDirectory = path.join(process.cwd(), '_projects');
  const fileNames = fs.readdirSync(postsDirectory);

  const posts: Project[] = fileNames.reduce((acc, fileName) => {
    if (path.extname(fileName) === '.md') {
      const filePath = path.join(postsDirectory, fileName);
      const markdown = fs.readFileSync(filePath, 'utf8');
      const { attributes, body } = matter(markdown);
      const htmlContent = marked.parse(body);

      acc.push({
        projectId: attributes.projectId,
        title: attributes.title,
        details: attributes.details,
        maintainer: attributes.maintainer,
        contributors: attributes.contributors,
        status: attributes.status,
        quote: attributes.quote,
        content: htmlContent
      });
    }
    return acc;
  }, [] as Project[]);

  return posts;
}