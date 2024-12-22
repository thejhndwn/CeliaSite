import Link from "next/link";
import Layout from "../components/Layout";

const IndexPage = () => (
  <Layout title="Home">
    <h1>Welcome to lokispalace.com the current home of Celia Intelligence Anemone</h1>
    <p>
      CIA is founded to further AI powered 3D generation. We do this by researching... efficient generation methods in architecture, hardware, graphics representation and capture, and AI methodology. 
    </p>
    <p>
      Site directory to get you started
      <ul>
        <li><Link href="/about">Work board</Link> Find out about our ongoign and preiovus work </li>
        <li><Link href="/users">Team</Link> Learn about our team or contact us </li>
        <li><Link href="/forums">Forums</Link> Find ongoing discourse. Come learn and be a student. Contribute and be a hero!</li>
        <li><Link href="/blog">Blog</Link> Find posts written by our verified contributors to learn about ongoing developments in the scene</li>
      </ul>
      
    </p>
  </Layout>
);

export default IndexPage;
