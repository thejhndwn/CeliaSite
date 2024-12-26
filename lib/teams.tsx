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
            twitter: member.links.twitter || undefined, 
            github: member.links.github || undefined, 
            website: member.links.website || undefined 
          } 
        : undefined,
      picture: member.picture || undefined,
      title: member.title || undefined,
      previous: member.previous || undefined,
    }));
  }