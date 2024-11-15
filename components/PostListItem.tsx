import React from "react";
import Link from "next/link";

import { User } from "../interfaces";

type Props = {
  data: User;
};

const PostListItem = ({ data }: Props) => (
  <Link href="/blog/[id]" as={`/blog/${data.id}`}>
    {data.id}:{data.name}
  </Link>
);

export default PostListItem;
