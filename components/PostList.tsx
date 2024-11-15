import * as React from "react";
import ListItem from "./PostListItem";
import { User } from "../interfaces";

type Props = {
  items: User[];
};

const PostList = ({ items }: Props) => (
  <ul>
    {items.map((item) => (
      <li key={item.id}>
        <ListItem data={item} />
      </li>
    ))}
  </ul>
);

export default PostList;
