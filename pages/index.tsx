import Link from "next/link";
import Layout from "../components/Layout";

const IndexPage = () => (
  <Layout title="Home">
    <h1>Welcome to Loki's Palace</h1>
    <p>
      This is the premier place on the internet for memory sports enthusiasts. <br></br>
      This site is for seasoned World Memory Champions, complete beginners, 
      or if you're just looking to improve your memory.
    </p>
    <p>
      Here's a rough guide to get you started
      <ul>
        <li><Link href="/about">About</Link> is where  you can find resources on memory competitions, memory improvement technniques, and a history of memory sports </li>
        <li><Link href="/users">Games</Link> is where our interactive memory games are located. These are inspired by real memory tasks you would find at memory competitions</li>
        <li><Link href="/forums">Forums</Link> is where you can talk to other memory enthusiasts and share your best scores or memory technniques or talk about new compeititons or request new features</li>
        <li><Link href="/blog">Blog</Link> is where you can find posts written by our users about all-things memory or whatever I find interesting. Similar to the forums but more polished and curated</li>
      </ul>
      
    </p>
  </Layout>
);

export default IndexPage;
