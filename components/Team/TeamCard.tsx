import React from "react";
import Link from "next/link";

import { Project, TeamMember } from "../../interfaces";

/* <Link href="/workboard/[id]" as={`/workboard/${data.projectId}`}>
{data.title}
</Link>
<i> {data.details} | {data.status}</i>
<p>Contributors: {
    [...data.contributors] 
      .sort(() => Math.random() - 0.5) 
      .join(', ') 
  }  | Maintainer: {data.maintainer} </p> */

type Props = {
  data: TeamMember;
};

const TeamCard = ({ data }: Props) => (
  <div>
    {data.name}
    {data.title}
  </div>
);

export default TeamCard;

