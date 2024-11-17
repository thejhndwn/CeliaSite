import * as React from "react";
import parse from "html-react-parser";

import { Forum, Post } from "../interfaces";
import ForumMessage from "./ForumMessage";

type ForumCommenterProps = {
  id: string;
};

export default function ForumCommenter({id} : ForumCommenterProps) {
    const handleSubmit = async (e) => {

        console.log("here are the other things")
        e.preventDefault();

        console.log("here are the things")
        console.log(new FormData(e.target))
        console.log(e.toString());

        await fetch('/api/comments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({name: e.target.name.value, message: e.target.message.value, forumId: id}),

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
