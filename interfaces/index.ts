// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

export type User = {
  id: number;
  name: string;
};

export type Post = {
  id: number;
  title: string;
  date: string;
  author: string;
  content: string;
  subtext: string;
}

export type Forum = {
  id: number;
  title: string;
  date: string;
  likes: number;
  dislikes: number;
  messages: ForumMessage[]
}

export type ForumMessage = {
  id: number;
  timestamp: string;
  author: string;
  content: string;
  likes: number;
  dislikes: number;
}

export type Project = {
  title: string;
  details: string;
  contributors: string[];
  maintainer: string;
  status: string;
  quote: string;
  projectId: string;
  content: string;
}


export type TeamMember = {
  name: string;
  links?: Links,
  picture?: string;
  title: string;
  previous?: string;
}

export type Links = {
  github?: string;
  twitter?: string;
  website?: string;
}