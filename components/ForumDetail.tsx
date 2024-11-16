import * as React from "react";
import parse from "html-react-parser";

import { Post } from "../interfaces";

type ForumListDetailProps = {
  item: Post;
};

const ForumListDetail = ({ item: post }: ForumListDetailProps) => (
  <div>
    <h1> {post.title}</h1>
  </div>
);

export default ForumListDetail;
