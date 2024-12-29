import * as React from "react";
import parse from "html-react-parser";

import { Project } from "../../interfaces";

type ProjectDetailProps = {
  item: Project;
};

const ProjectDetail = ({ item: post }: ProjectDetailProps) => (
  <div>
    <h1>{post.title}</h1>
    <i>{post.details}</i>
    <p>Contributors: {
        [...post.contributors] 
          .sort(() => Math.random() - 0.5) 
          .join(', ') 
      }  | Maintainer: {post.maintainer} </p>
    {parse(post.content)}
  </div>
);

export default ProjectDetail;
