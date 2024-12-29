import { GetStaticProps } from "next";
import Link from "next/link";

import { Forum } from "../../interfaces";
import Layout from "../../components/Layout";
import List from "../../components/ForumList";
import { getForums } from "../../lib/forums";

type Props = {
  items: Forum[];
};

const WithStaticProps = ({ items }: Props) => (
  <Layout title="Forums">
    <h1>Forums</h1>
    <p>Find forums below</p>
    <List items={items} />
    <p>
      <Link href="/">Go home</Link>
    </p>
  </Layout>
);

export const getStaticProps: GetStaticProps = async () => {
  // Example for including static props in a Next.js function component page.
  // Don't forget to include the respective types for any props passed into
  // the component.
  const items: Forum[] = getForums();
  return { props: { items } };
};

export default WithStaticProps;
