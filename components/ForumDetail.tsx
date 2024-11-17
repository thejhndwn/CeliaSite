import * as React from "react";
import parse from "html-react-parser";

import { Forum, Post } from "../interfaces";
import ForumMessage from "./ForumMessage";
import ForumCommenter from "./ForumCommenter";

type ForumListDetailProps = {
  item: Forum;
};

const ForumListDetail = ({ item: forum }: ForumListDetailProps) => (
  <div>
    <h1> {forum.title}</h1>
    {forum.messages.map((message) => (
        <ForumMessage data={message}/>
    ))}
    <ForumCommenter id={forum.id.toString()}/>
  </div>
);

export default ForumListDetail;
