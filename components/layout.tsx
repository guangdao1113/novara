import React,{useRef, useEffect, useState} from "react";
import type { ReactNode } from "react";
import Header from "./header";
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
  // const footerNode = useRef<HTMLDivElement>(null);

  if (router.pathname === "/") {
    return (
      <div>
      {/* <div style={{ overflowX: "hidden" }}> */}
        <Header
          logo={homeLogo}
          homeLogo={styles.homeLogo}
          navbarLink={styles.homeNavbarLink}
        />
        <div>{children}</div>
        <Footer />
      </div>
    );
  } else {
    return (
      <div className={styles.otherPages}>
      {/* <div style={{ overflowX: "hidden" }} className={styles.otherPages}> */}
        <Header logo={whiteLogo} homeLogo="" navbarLink={styles.navbarLink} />
        <div>{children}</div>
        {/* <Footer /> */}
      </div>
    );
  }
}
