import { GetStaticProps } from "next";


import Layout from "../../components/Layout";
import Team from "../../components/Team/Team";
import { TeamMember } from "../../interfaces";
import { getTeam } from "../../lib/teams";

type Props = {
  items: TeamMember[];
};

const WithStaticProps = ({ items }: Props) => (
  <Layout title="Celia | Team" footer="We're from the guild that doesn't know when to stop! We won't survive unless we keep running! - Hiro Mashima (Fairy Tail)">
    <Team items={items}></Team>
  </Layout>
);

export const getStaticProps: GetStaticProps = async () => {
  // Example for including static props in a Next.js function component page.
  // Don't forget to include the respective types for any props passed into
  // the component.
  const items: TeamMember[] = getTeam();
  return { props: { items } };
};




export default WithStaticProps;
