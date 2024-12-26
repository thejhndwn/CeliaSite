import React from "react";
import Link from "next/link";

import { Project } from "../../interfaces";

type Props = {
  data: Project;
};

const WorkBoardItem = ({ data }: Props) => (
    <div>
  <Link href="/workboard/[id]" as={`/workboard/${data.projectId}`}>
    {data.title}
  </Link>
  <i> {data.details} | {data.status}</i>
  <p>Contributors: {
        [...data.contributors] 
          .sort(() => Math.random() - 0.5) 
          .join(', ') 
      }  | Maintainer: {data.maintainer} </p>
  </div>
);

export default WorkBoardItem;