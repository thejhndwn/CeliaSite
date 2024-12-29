import { GetStaticProps, GetStaticPaths } from "next";

import { Post } from "../../interfaces";
import Layout from "../../components/Layout";
import ListDetail from "../../components/ListDetail";
import { getPosts } from "../../lib/posts";

type Props = {
  item?: Post;
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
      title={`${
        item ? item.title : "User Detail"
      } | Next.js + TypeScript Example`}
    >
      {item && <ListDetail item={item} />}
    </Layout>
  );
};

export default StaticPropsDetail;

export const getStaticPaths: GetStaticPaths = async () => {
  // Get the paths we want to pre-render based on users
  const posts = await getPosts();
  const paths = posts.map((post) => {
  
    return {
      params: { id: post.id.toString() },
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
    const items = await getPosts();
    const item = items.find((data) => data.id === id);
    return { props: { item } };
  } catch (err: any) {
    return { props: { errors: err.message } };
  }
};
