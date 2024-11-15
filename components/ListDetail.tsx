import * as React from "react";

import { Post } from "../interfaces";

type PostListDetailProps = {
  item: Post;
};

const ListDetail = ({ item: post }: PostListDetailProps) => (
  <div>
    <h1>${post.title}</h1>
    <h3>${post.subtext}</h3>
    <p>Written by: ${post.author}</p>
    <p>${post.content}</p>
  </div>
);

export default ListDetail;
