import React from "react";
import Link from "next/link";

import { ForumMessage } from "../interfaces";

type Props = {
  data: ForumMessage;
};

const ForumMessage = ({ data }: Props) => (
    <div>
  <h6>{data.title}</h6>
  <p> likes: {data.likes}, dislikes: {data.dislikes}</p>
  <p>date: {data.date}, author: {data.author}</p>
  <p>{data.content}</p>

  </div>
);

export default ForumMessage;
