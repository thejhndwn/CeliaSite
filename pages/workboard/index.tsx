import { GetStaticProps } from "next";
import Link from "next/link";


import { Project } from "../../interfaces";
import Layout from "../../components/Layout";
import { getProjects } from "../../lib/projects";
import WorkBoard from "../../components/WorkBoard/WorkBoard";

type Props = {
  items: Project[];
};

const WithStaticProps = ({ items }: Props) => (
  <Layout title="Board of Work" footer="Something small, every day">
    <h1>WorkBoard</h1>
    <WorkBoard items={items} />
  </Layout>
);

export const getStaticProps: GetStaticProps = async () => {
  // Example for including static props in a Next.js function component page.
  // Don't forget to include the respective types for any props passed into
  // the component.
  const items: Project[] = getProjects();
  return { props: { items } };
};




export default WithStaticProps;
