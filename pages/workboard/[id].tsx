import { GetStaticProps, GetStaticPaths } from "next";

import { Project } from "../../interfaces";
import Layout from "../../components/Layout";
import { getProjects } from "../../lib/projects";
import ProjectDetail from "../../components/WorkBoard/ProjectDetail";

type Props = {
  item?: Project;
  errors?: string;
};

const StaticPropsDetail = ({ item, errors }: Props) => {
  if (errors) {
    return (
      <Layout title="Error | Next.js + TypeScript Example">
        <p>
          <span style={{ color: "red" }}>Error:</span> {errors}
        </p>
      </Layout>
    );
  }

  return (
    <Layout
      title={`PROJECT${
        item ? item.projectId : "User Detail"
      } ` }
      footer={` ${item.quote} `}
    >
      {item && <ProjectDetail item={item} />}
    </Layout>
  );
};

export default StaticPropsDetail;

export const getStaticPaths: GetStaticPaths = async () => {
  // Get the paths we want to pre-render based on users
  const projects = await getProjects();
  const paths = projects.map((project) => {

  
    return {
      params: { id: project.projectId },
    };
  });
  

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
};

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const id = params?.id;
    const items = await getProjects();
    const item = items.find((data) => data.projectId === id);

    return { props: { item } };
  } catch (err: any) {
    return { props: { errors: err.message } };
  }
};
