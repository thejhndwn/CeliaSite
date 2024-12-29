import * as React from "react";
import WorkBoardItem from "./WorkBoardItem";
import { Project } from "../../interfaces";

type Props = {
  items: Project[];
};

const WorkBoard = ({ items }: Props) => (
  <ul>
    {items.map((item) => (
      <li key={item.projectId}>
        <WorkBoardItem data={item} />
      </li>
    ))}
  </ul>
);

export default WorkBoard;
