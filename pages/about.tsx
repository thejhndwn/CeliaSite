import Link from "next/link";
import Layout from "../components/Layout";

const AboutPage = () => (
  <Layout title="About | Next.js + TypeScript Example">
    <h1>About</h1>
    
    <p>I created this site because I found a lack of memory-related resources on the web <br>
    </br>
    I mean it's not the hottest sport, but surely there are people out there who care about improving their memory.<br></br> There has to be, there's a Memory World Championship for crying out loud! <br></br>
    So I decided to make a site that would be a one-stop-shop for all things memory-related. <br></br>
    </p>
    <p>
      There are many resources for memory competitions and you can find mnemonic techniques all over the web, but when you look there's no place to actually PRACTICE. <br></br>
      Originally I planned for this to be a game portal site, but wanting to improve my web development skills I expanded it to a little more<br></br>
      I hope this draws interest from the memory community and I hope to see you all on the forums!

    </p>
    <h2>A Brief History on Memory</h2>
    <p>For now please see the <Link href='https://en.wikipedia.org/wiki/Memory'>Wikipedia Page: Memory</Link></p>
    <h2>What are Memory Competitions?</h2>
    <p> For now please see the <Link href='https://en.wikipedia.org/wiki/Memory_sport'>Wikipedia Page: Memory sport</Link></p>
    <h2>What are Popular Memory Techniques?</h2>
    <p> One of the most famous memory techniques is the Method of Loci. This technique goes by many names: memory journey, memory palace, mind palace technique. <br></br>
    The website is a reference to this technique. <br></br>
    You can see depictions of this technique in popular media such as the BBC show Sherlock, The Mentalist, The Good Doctor, and the movie Limitless. <br></br>
    </p>
    <p>
      <Link href="/">Go home</Link>
    </p>
  </Layout>
);

export default AboutPage;
