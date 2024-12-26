import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";

type Props = {
  children?: ReactNode;
  title?: string;
  footer?: ReactNode;
};

const Layout = ({ children, title = "In-Titled", footer = "BIGFOOTER" }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav>
        <Link href="/">Home</Link> | <Link href="/workboard">Work Board</Link> |{" "}
        <Link href="/team">Team</Link> |{" "}
        <Link href="/forums">Forums</Link> |{" "}
        <Link href="/blog">Blog</Link> |{" "}
      </nav>
    </header>
    {children}
    <footer>
      <hr />
      <i>{footer}</i>
    </footer>
  </div>
);
export default Layout;
