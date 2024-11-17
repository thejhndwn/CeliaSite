import path from "path";
import fs from 'fs';
import { Forum, ForumMessage } from "../interfaces";

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

export function addMessage(forumId: string, name: string, message: string) {
  console.log("entered addMessage")
  const forumPath = path.join(process.cwd(), '_forums', forumId + '.json ');

  console.log(forumPath)
  console.log(fs.readdirSync(path.join(process.cwd(), '_forums')))
  const jsonData = fs.readFileSync(forumPath, 'utf8');

  console.log("water ")

  const forum: Forum = JSON.parse(jsonData);
  console.log("water buffalo")
  const newMessage: ForumMessage = {
    id: forum.messages.length,
    timestamp: new Date().toISOString(),
    author: name,
    content: message,
    likes: 0,
    dislikes: 0,
  }

  console.log("water buffalo 1")

  forum.messages.push(newMessage);

  console.log("water buffalo 2")

  fs.writeFile('output.json', jsonData, (err) => {
    if (err) {
      console.log("bender")
      console.error(err);
    } else {
      console.log('JSON file written successfully');
    }
  });
}