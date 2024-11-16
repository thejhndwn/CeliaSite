import * as React from "react";
import ListItem from "./PostListItem";
import { Forum, User } from "../interfaces";
import ForumListItem from "./ForumListItem";

type Props = {
  items: Forum[];
};

const ForumList = ({ items }: Props) => (
  <ul>
    {items.map((item) => (
      <li key={item.id}>
        <ForumListItem data={item} />
      </li>
    ))}
  </ul>
);

export default ForumList;
