import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";

type Props = {
  children?: ReactNode;
  title?: string;
  footer?: ReactNode;
};

const Layout = ({ children, title = "This is the default title", footer = "BIGFOOTER" }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav>
        <Link href="/">Home</Link> | <Link href="/about">About</Link> |{" "}
        <Link href="/blog">Blog</Link> |{" "}
        <Link href="/forums">Forums</Link> |{" "}
        <Link href="/games">Games</Link> |{" "}
      </nav>
    </header>
    {children}
    <footer>
      <hr />
      {footer}
    </footer>
  </div>
);
export default Layout;
