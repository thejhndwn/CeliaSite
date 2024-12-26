import React from "react";
import Link from "next/link";

import { Project, TeamMember } from "../../interfaces";

//TODO: Fix the Socials/Links conditional

type Props = {
  data: TeamMember;
};

const TeamCard = ({ data }: Props) => (
  <div>
    <h3>{data.name}</h3>
    <img src={`/profiles/${data.picture}`} alt="Profile Picture" width="150" height="150"/> 
    <br></br>
    <i>{data.title}</i>
    <br></br>
    <i>{data.previous}</i>
    <br></br>
    <i>Twitter: {data.links.twitter}</i>
  </div>
);

export default TeamCard;

