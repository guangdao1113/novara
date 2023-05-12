import React from "react";
import type { ReactNode } from "react";
import Header from "./header";
import homeLogo from "@/home-logo.png";
import whiteLogo from "@/white_logo.svg";
import Footer from "./footer";
import styles from "../styles/header.styles.module.css";
import { useRouter } from 'next/router';

interface LayoutProps {
  children: ReactNode;
}
export default function Layout({ children }: LayoutProps) {
  const router = useRouter();

  if (router.pathname === '/') {
    return (
      <div style={{overflowX: 'hidden'}}>
        <Header 
          logo={homeLogo}
          homeLogo={styles.homeLogo}
          navbarLink={styles.homeNavbarLink}
        />
        <main>{children}</main>
        <Footer />
      </div>
    );
  } else {
    return (
      <div style={{overflowX: 'hidden'}}>
        <Header 
          logo={whiteLogo}
          homeLogo=''
          navbarLink={styles.navbarLink}
        />
        <main>{children}</main>
        <Footer />
      </div>
    );

  }
}
