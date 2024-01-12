import React,{useEffect, useState} from "react";
import type { ReactNode } from "react";
import Header from "./header";
import Head from 'next/head';
import homeLogo from "@/home-logo.png";
import whiteLogo from "@/white_logo.svg";
import Footer from "./footer";
import styles from "../styles/header.styles.module.css";
import { useRouter } from "next/router";
import { relative } from 'path';

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
          <link rel="shortcut icon" href="/images/socialIcons/UA-logo.jpg" />
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
          <link rel="shortcut icon" href="/images/socialIcons/UA-logo.jpg" />
        </Head>
        <Header logo={whiteLogo} homeLogo="" navbarLink={styles.navbarLink} />
        <div>{children}</div>
        {/* <Footer /> */}
      </div>
    );
  }
}
