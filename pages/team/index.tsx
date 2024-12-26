import { GetStaticProps } from "next";
import Link from "next/link";


import { Post, TeamMember, User } from "../../interfaces";
import Layout from "../../components/Layout";
import List from "../../components/PostList";
import { getTeam } from "../../lib/teams";
import Team from "../../components/Team/Team";

type Props = {
  items: TeamMember[];
};

const WithStaticProps = ({ items }: Props) => (
  <Layout title="Blog">
    <Team items={items}></Team>
  </Layout>
);

export const getStaticProps: GetStaticProps = async () => {
  // Example for including static props in a Next.js function component page.
  // Don't forget to include the respective types for any props passed into
  // the component.
  const items: TeamMember[] = getTeam();
  console.log(items);
  return { props: { items } };
};




export default WithStaticProps;
