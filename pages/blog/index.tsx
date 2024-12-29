import { GetStaticProps } from "next";
import Link from "next/link";


import { Post, User } from "../../interfaces";
import { sampleUserData } from "../../utils/sample-data";
import Layout from "../../components/Layout";
import List from "../../components/PostList";
import { getPosts } from "../../lib/posts";

type Props = {
  items: Post[];
};

const WithStaticProps = ({ items }: Props) => (
  <Layout title="Celia | Blog" footer="Write. Finish things. Go for walks. Read a lot and outside your comfort zone. Stay interested. Daydream. Write. - Neil Gaiman">
    <h1>Latest Posts</h1>
    <List items={items} />
  </Layout>
);

export const getStaticProps: GetStaticProps = async () => {
  // Example for including static props in a Next.js function component page.
  // Don't forget to include the respective types for any props passed into
  // the component.
  const items: Post[] = await getPosts();
  return { props: { items } };
};




export default WithStaticProps;
