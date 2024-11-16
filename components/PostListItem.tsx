import React from "react";
import Link from "next/link";

import { Post, User } from "../interfaces";

type Props = {
  data: Post;
};

const PostListItem = ({ data }: Props) => (
  <Link href="/blog/[id]" as={`/blog/${data.id}`}>
    {data.date}: {data.title}
  </Link>
);

export default PostListItem;
