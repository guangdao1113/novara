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
          <link rel="apple-touch-icon" sizes="57x57" href="/favicon/apple-icon-57x57.png"/>
          <link rel="apple-touch-icon" sizes="60x60" href="/favicon/apple-icon-60x60.png"/>
          <link rel="apple-touch-icon" sizes="72x72" href="/favicon/apple-icon-72x72.png"/>
          <link rel="apple-touch-icon" sizes="76x76" href="/favicon/apple-icon-76x76.png"/>
          <link rel="apple-touch-icon" sizes="114x114" href="/favicon/apple-icon-114x114.png"/>
          <link rel="apple-touch-icon" sizes="120x120" href="/favicon/apple-icon-120x120.png"/>
          <link rel="apple-touch-icon" sizes="144x144" href="/favicon/apple-icon-144x144.png"/>
          <link rel="apple-touch-icon" sizes="152x152" href="/favicon/apple-icon-152x152.png"/>
          <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-icon-180x180.png"/>
          <link rel="icon" type="image/png" sizes="192x192"  href="/favicon/android-icon-192x192.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
          <link rel="manifest" href="/favicon/manifest.json"/>
          <meta name="msapplication-TileColor" content="#ffffff"/>
          <meta name="msapplication-TileImage" content="/favicon/ms-icon-144x144.png"/>
          <meta name="theme-color" content="#ffffff"/>
        </Head>
        <Header
          logo={homeLogo}
          homeLogo={styles.homeLogo}
          navbarLink={styles.homeNavbarLink}
        />
        <div>{children}</div>
      </div>
    );
  } else if (router.pathname === "/projects") {
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
          <link rel="apple-touch-icon" sizes="57x57" href="/favicon/apple-icon-57x57.png"/>
          <link rel="apple-touch-icon" sizes="60x60" href="/favicon/apple-icon-60x60.png"/>
          <link rel="apple-touch-icon" sizes="72x72" href="/favicon/apple-icon-72x72.png"/>
          <link rel="apple-touch-icon" sizes="76x76" href="/favicon/apple-icon-76x76.png"/>
          <link rel="apple-touch-icon" sizes="114x114" href="/favicon/apple-icon-114x114.png"/>
          <link rel="apple-touch-icon" sizes="120x120" href="/favicon/apple-icon-120x120.png"/>
          <link rel="apple-touch-icon" sizes="144x144" href="/favicon/apple-icon-144x144.png"/>
          <link rel="apple-touch-icon" sizes="152x152" href="/favicon/apple-icon-152x152.png"/>
          <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-icon-180x180.png"/>
          <link rel="icon" type="image/png" sizes="192x192"  href="/favicon/android-icon-192x192.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
          <link rel="manifest" href="/favicon/manifest.json"/>
          <meta name="msapplication-TileColor" content="#ffffff"/>
          <meta name="msapplication-TileImage" content="/favicon/ms-icon-144x144.png"/>
          <meta name="theme-color" content="#ffffff"/>
        </Head>
        <Header logo={whiteLogo} homeLogo="" navbarLink={styles.navbarLink} />
        <div>{children}</div>
        {/* <Footer /> */}
      </div>
    );
  } else if (router.pathname === "/company") {
    return (
      <div className={styles.otherPages}>
        {/* <div style={{ overflowX: "hidden" }} className={styles.otherPages}> */}
        <Head>
          <title>Company | NOVARA PROPERTIES</title>
          <link
            rel="shortcut icon"
            href="/images/socialIcons/Novara-webicon.png"
          />
          <meta
            name="description"
            content="We build high quality homes that suit your lifestyle, that bring you peace and joy."
          />
          <link rel="apple-touch-icon" sizes="57x57" href="/favicon/apple-icon-57x57.png"/>
          <link rel="apple-touch-icon" sizes="60x60" href="/favicon/apple-icon-60x60.png"/>
          <link rel="apple-touch-icon" sizes="72x72" href="/favicon/apple-icon-72x72.png"/>
          <link rel="apple-touch-icon" sizes="76x76" href="/favicon/apple-icon-76x76.png"/>
          <link rel="apple-touch-icon" sizes="114x114" href="/favicon/apple-icon-114x114.png"/>
          <link rel="apple-touch-icon" sizes="120x120" href="/favicon/apple-icon-120x120.png"/>
          <link rel="apple-touch-icon" sizes="144x144" href="/favicon/apple-icon-144x144.png"/>
          <link rel="apple-touch-icon" sizes="152x152" href="/favicon/apple-icon-152x152.png"/>
          <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-icon-180x180.png"/>
          <link rel="icon" type="image/png" sizes="192x192"  href="/favicon/android-icon-192x192.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
          <link rel="manifest" href="/favicon/manifest.json"/>
          <meta name="msapplication-TileColor" content="#ffffff"/>
          <meta name="msapplication-TileImage" content="/favicon/ms-icon-144x144.png"/>
          <meta name="theme-color" content="#ffffff"/>
        </Head>
        <Header logo={whiteLogo} homeLogo="" navbarLink={styles.navbarLink} />
        <div>{children}</div>
        {/* <Footer /> */}
      </div>
    );
  } else if (router.pathname === "/approach") {
    return (
      <div className={styles.otherPages}>
        {/* <div style={{ overflowX: "hidden" }} className={styles.otherPages}> */}
        <Head>
          <title>Approach | NOVARA PROPERTIES</title>
          <link
            rel="shortcut icon"
            href="/images/socialIcons/Novara-webicon.png"
          />
          <meta
            name="description"
            content="We remain deeply committed to our environmental and social responsibilities as home designers. Novara invests in sustainable projects that prioritize quality of life for families and enhance the well-being of the local community. We advocate for the homeowner every step of the way, even after completion."
          />
          <link rel="apple-touch-icon" sizes="57x57" href="/favicon/apple-icon-57x57.png"/>
          <link rel="apple-touch-icon" sizes="60x60" href="/favicon/apple-icon-60x60.png"/>
          <link rel="apple-touch-icon" sizes="72x72" href="/favicon/apple-icon-72x72.png"/>
          <link rel="apple-touch-icon" sizes="76x76" href="/favicon/apple-icon-76x76.png"/>
          <link rel="apple-touch-icon" sizes="114x114" href="/favicon/apple-icon-114x114.png"/>
          <link rel="apple-touch-icon" sizes="120x120" href="/favicon/apple-icon-120x120.png"/>
          <link rel="apple-touch-icon" sizes="144x144" href="/favicon/apple-icon-144x144.png"/>
          <link rel="apple-touch-icon" sizes="152x152" href="/favicon/apple-icon-152x152.png"/>
          <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-icon-180x180.png"/>
          <link rel="icon" type="image/png" sizes="192x192"  href="/favicon/android-icon-192x192.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
          <link rel="manifest" href="/favicon/manifest.json"/>
          <meta name="msapplication-TileColor" content="#ffffff"/>
          <meta name="msapplication-TileImage" content="/favicon/ms-icon-144x144.png"/>
          <meta name="theme-color" content="#ffffff"/>
        </Head>
        <Header logo={whiteLogo} homeLogo="" navbarLink={styles.navbarLink} />
        <div>{children}</div>
        {/* <Footer /> */}
      </div>
    );
  } else if (router.pathname === "/community") {
    return (
      <div className={styles.otherPages}>
        {/* <div style={{ overflowX: "hidden" }} className={styles.otherPages}> */}
        <Head>
          <title>Community | NOVARA PROPERTIES</title>
          <link
            rel="shortcut icon"
            href="/images/socialIcons/Novara-webicon.png"
          />
          <meta
            name="description"
            content="Our concept of service involves caring for our neighbors, communities, and cities, enriching people’s lives. We strive to reflect this in not only our relationships but also in how we approach our work."
          />
          <link rel="apple-touch-icon" sizes="57x57" href="/favicon/apple-icon-57x57.png"/>
          <link rel="apple-touch-icon" sizes="60x60" href="/favicon/apple-icon-60x60.png"/>
          <link rel="apple-touch-icon" sizes="72x72" href="/favicon/apple-icon-72x72.png"/>
          <link rel="apple-touch-icon" sizes="76x76" href="/favicon/apple-icon-76x76.png"/>
          <link rel="apple-touch-icon" sizes="114x114" href="/favicon/apple-icon-114x114.png"/>
          <link rel="apple-touch-icon" sizes="120x120" href="/favicon/apple-icon-120x120.png"/>
          <link rel="apple-touch-icon" sizes="144x144" href="/favicon/apple-icon-144x144.png"/>
          <link rel="apple-touch-icon" sizes="152x152" href="/favicon/apple-icon-152x152.png"/>
          <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-icon-180x180.png"/>
          <link rel="icon" type="image/png" sizes="192x192"  href="/favicon/android-icon-192x192.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
          <link rel="manifest" href="/favicon/manifest.json"/>
          <meta name="msapplication-TileColor" content="#ffffff"/>
          <meta name="msapplication-TileImage" content="/favicon/ms-icon-144x144.png"/>
          <meta name="theme-color" content="#ffffff"/>
        </Head>
        <Header logo={whiteLogo} homeLogo="" navbarLink={styles.navbarLink} />
        <div>{children}</div>
        {/* <Footer /> */}
      </div>
    );
  } else {
    return (
      <div className={styles.otherPages}>
        {/* <div style={{ overflowX: "hidden" }} className={styles.otherPages}> */}
        <Head>
          <title>Contact | NOVARA PROPERTIES</title>
          <link
            rel="shortcut icon"
            href="/images/socialIcons/Novara-webicon.png"
          />
          <meta
            name="description"
            content="215 - 515 WEST PENDER STREET, VANCOUVER BC V6B 6H5"
          />
          <link rel="apple-touch-icon" sizes="57x57" href="/favicon/apple-icon-57x57.png"/>
          <link rel="apple-touch-icon" sizes="60x60" href="/favicon/apple-icon-60x60.png"/>
          <link rel="apple-touch-icon" sizes="72x72" href="/favicon/apple-icon-72x72.png"/>
          <link rel="apple-touch-icon" sizes="76x76" href="/favicon/apple-icon-76x76.png"/>
          <link rel="apple-touch-icon" sizes="114x114" href="/favicon/apple-icon-114x114.png"/>
          <link rel="apple-touch-icon" sizes="120x120" href="/favicon/apple-icon-120x120.png"/>
          <link rel="apple-touch-icon" sizes="144x144" href="/favicon/apple-icon-144x144.png"/>
          <link rel="apple-touch-icon" sizes="152x152" href="/favicon/apple-icon-152x152.png"/>
          <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-icon-180x180.png"/>
          <link rel="icon" type="image/png" sizes="192x192"  href="/favicon/android-icon-192x192.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
          <link rel="manifest" href="/favicon/manifest.json"/>
          <meta name="msapplication-TileColor" content="#ffffff"/>
          <meta name="msapplication-TileImage" content="/favicon/ms-icon-144x144.png"/>
          <meta name="theme-color" content="#ffffff"/>
        </Head>
        <Header logo={whiteLogo} homeLogo="" navbarLink={styles.navbarLink} />
        <div>{children}</div>
        {/* <Footer /> */}
      </div>
    );
  }
}
