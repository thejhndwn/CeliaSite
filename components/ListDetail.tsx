import * as React from "react";

import { User } from "../interfaces";

type PostListDetailProps = {
  item: User;
};

const ListDetail = ({ item: Post }: PostListDetailProps) => (
  <div>
    <h1>Detail for {user.name}</h1>
    <p>ID: {user.id}</p>
  </div>
);

export default ListDetail;
