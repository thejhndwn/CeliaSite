import * as React from "react";
import parse from "html-react-parser";

import { Forum, Post } from "../interfaces";
import ForumMessage from "./ForumMessage";

type ForumListDetailProps = {
  item: Forum;
};

export default function ForumCommenter() {
    const handleSubmit = async (e) => {

        console.log("here are the other things")
        e.preventDefault();

        console.log("here are the things")

        await fetch('/api/comments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: new FormData(e.target)

        });


    };

    return (
        <div>
        <form onSubmit={handleSubmit}>
        <label for='name'>Name:</label>
        <input type="text" name="name" />
        <label for='message'>Message:</label>
        <input type="text" name="message" />
        <button type="submit">Submit</button> 
        </form>
        </div>
    )
}
