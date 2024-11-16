import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
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
      <span>Made by <a href="https://twitter.com/ifnneedtechhelp">@ifnneedtechhelp</a> with love</span>
    </footer>
  </div>
);
export default Layout;
