import path from "path";
import fs from 'fs';
import { Forum } from "../interfaces";

export function getForums(): Forum[] {
  const postsDirectory = path.join(process.cwd(), '_forums');
  const fileNames = fs.readdirSync(postsDirectory);

  const forum: Forum[] = fileNames.reduce((acc, fileName) => {
    if (path.extname(fileName) === '.json') {
      const filePath = path.join(postsDirectory, fileName);
      const jsonData = fs.readFileSync(filePath, 'utf8');
      const thread: Forum = JSON.parse(jsonData);
      

      acc.push({
        id: thread.id,
        title: thread.title,
        date: thread.date,
        likes: thread.likes,
        dislikes: thread.dislikes,
        messages: thread.messages
      });
    }
    return acc;
  }, [] as Forum[]);

  return forum;
}