import React from "react";
import Link from "next/link";

import { Forum, User } from "../interfaces";

type Props = {
  data: Forum;
};

const ForumListItem = ({ data }: Props) => (
  <Link href="/forums/[id]" as={`/forums/${data.id}`}>
    {data.likes}-{data.dislikes} | {data.title} | {data.date}
  </Link>
);

export default ForumListItem;
