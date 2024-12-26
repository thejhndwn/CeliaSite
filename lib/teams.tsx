import path from "path";
import fs from 'fs';
import { Forum, ForumMessage, TeamMember } from "../interfaces";

export function getTeam(): TeamMember[] {
    const filepath = path.join(process.cwd(), '_team', 'team.json'); 
    const data = JSON.parse(fs.readFileSync(filepath, 'utf-8'));
  
    return data.map((member: any): TeamMember => ({
      name: member.name, 
      links: member.links 
        ? { 
            twitter: member.links.twitter || null, 
            github: member.links.github || null, 
            website: member.links.website || null 
          } 
        : null,
      picture: member.picture || null,
      title: member.title || null,
      previous: member.previous || null,
    }));
  }