import path from 'path';
import { promises as fs } from 'fs'; 
import matter from 'front-matter'; 
import { marked } from 'marked'; 
import { Project } from '../interfaces'; 

interface ProjectFrontMatterAttributes {
  projectId: string; 
  // Add other required frontmatter attributes here
}

export async function getProjects(): Promise<Project[]> {
  const postsDirectory = path.join(process.cwd(), '_projects');

  try {
    const fileNames = await fs.readdir(postsDirectory); 

    const projects: Project[] = await Promise.all(
      fileNames.map(async (fileName) => {
        if (path.extname(fileName) === '.md') {
          const filePath = path.join(postsDirectory, fileName);
          const fileContent = await fs.readFile(filePath, 'utf8'); 
          const { attributes, body } = matter<Project>(fileContent); 

          if (!attributes.projectId) {
            console.warn(`Error: Missing required attribute 'projectId' in ${fileName}`);
            return null; 
          }

          const htmlContent = await marked.parse(body);

          return {
            projectId: attributes.projectId,
            title: attributes.title, 
            details: attributes.details, 
            maintainer: attributes.maintainer , 
            contributors: attributes.contributors, // Default to an empty array
            status: attributes.status, 
            quote: attributes.quote, 
            content: htmlContent,
          } as Project; 
        }

        return null; 
      })
    );

    return projects.filter(Boolean) as Project[]; 

  } catch (error) {
    console.error('Error reading or processing projects:', error);
    return; 
  }
}