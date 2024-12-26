import * as React from "react";
import { Project, TeamMember } from "../../interfaces";
import TeamCard from "./TeamCard";

type Props = {
  items: TeamMember[];
};

const Team = ({ items }: Props) => (
  <div>
    {items.map((item) => (
        <TeamCard data={item} />
    ))}
  </div>
);

export default Team;
