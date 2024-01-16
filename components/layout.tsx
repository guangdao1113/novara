import React, { useEffect, useState } from "react";
import type { ReactNode } from "react";
import Header from "./header";
import Head from "next/head";
import homeLogo from "@/home-logo.png";
import whiteLogo from "@/white_logo.svg";
import Footer from "./footer";
import styles from "../styles/header.styles.module.css";
import { useRouter } from "next/router";
import { relative } from "path";

interface LayoutProps {
  children: ReactNode;
}
export default function Layout({ children }: LayoutProps) {
  const router = useRouter();

  if (router.pathname === "/") {
    return (
      <div className={styles.theme}>
        {/* <div style={{ overflowX: "hidden" }}> */}
        <Head>
          <title>NOVARA PROPERTIES</title>
          <link
            rel="shortcut icon"
            href="/images/socialIcons/Novara-webicon.png"
          />
          <meta
            name="description"
            content="Since 2011, Novara Properties has been reimagining the possibilities of living space with better ideas. We are a family-owned business that identifies opportunities for and invests in the development of residential real estate in and around the Vancouver area."
          />
        </Head>
        <Header
          logo={homeLogo}
          homeLogo={styles.homeLogo}
          navbarLink={styles.homeNavbarLink}
        />
        <div>{children}</div>
      </div>
    );
  } else {
    return (
      <div className={styles.otherPages}>
        {/* <div style={{ overflowX: "hidden" }} className={styles.otherPages}> */}
        <Head>
          <title>Projects | NOVARA PROPERTIES</title>
          <link
            rel="shortcut icon"
            href="/images/socialIcons/Novara-webicon.png"
          />
          <meta name="description" content="ASHLYN AT CAMBIE PARK." />
        </Head>
        <Header logo={whiteLogo} homeLogo="" navbarLink={styles.navbarLink} />
        <div>{children}</div>
        {/* <Footer /> */}
      </div>
    );
  }
}
