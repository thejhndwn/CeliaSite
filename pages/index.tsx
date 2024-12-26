import Link from "next/link";
import Layout from "../components/Layout";

// Work board -  should contain post like objects with links, visible should be abstracts on the projects, main contributor/lead/contact, and customizable should be photo and background. 
// Team - contains simple objects that contain picture, personal title, and previous experience, or quote/excerpt
// Forums - contains forum like objects,
// Blog - contains blog like objects. 

const IndexPage = () => (
  <Layout title="Celia | Home" footer="Click something, do something.">
    <div>
    <h1>Welcome to lokispalace.com, currently housing Celia Intelligence Anemone</h1>
    <p>
      CIA is founded to further AI powered 3D generation. We do this by researching... efficient generation methods in architecture, hardware, graphics representation and capture, and AI methodology. 
    </p>
    <p>
      Site directory to get you started
      <ul>
        <li><Link href="/workboard">Work Board</Link> Public ongoing and released work </li>
        <li><Link href="/team">Team</Link> Beware, pirates! </li>
        <li><Link href="/blog">Blog</Link> Posts about important developments in the scene</li>
      </ul>
      
    </p>
    </div>
  </Layout>
);

export default IndexPage;
