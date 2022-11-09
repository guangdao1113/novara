import React, { useState, useEffect } from "react";
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/header.styles.module.css";
import whiteLogo from "@/white_logo.svg";
import logo from "@/logo.png";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Header(): JSX.Element {
  const navLinkList = ["ABOUT", "APPROACH", "COMMUNITY", "CONTACT"];
  const [isScroll, setScroll] = useState(false);
  const changeHeaderStyle = () => {
    if (typeof window !== "undefined" && window.scrollY >= 80) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  useEffect(() => {
    AOS.init({
      offset: 0,
      duration: 1000,
      easing: "ease-in-out",
      delay: 100,
      once: true,
      mirror: true,
      anchorPlacement: "top-bottom",
    });
    window.addEventListener("scroll", changeHeaderStyle);
    return () => window.removeEventListener("scroll", changeHeaderStyle);
  }, []);

  return (
    <Container
      className={
        isScroll ? styles.headerActiveContainer : styles.headerContainer
      }
      data-aos="fade-down"
      data-aos-delay="50"
    >
      <Row>
        <Col xs="9">
          <Link href="/">
            <button className={styles.headerLogoBtn}>
              <Image
                src={isScroll ? logo : whiteLogo}
                width={isScroll ? 183.99 : 234.94}
                height={isScroll ? 50 : 64}
                alt="novara-logo"
              />
            </button>
          </Link>
        </Col>
        <Col xs="3" className={styles.navContainer}>
          <Navbar collapseOnSelect expand="lg" className={styles.navLinkBox}>
            <Navbar.Toggle
              className={
                isScroll ? styles.navbarActiveToggler : styles.navbarToggler
              }
              aria-controls="responsive-navbar-nav"
            />
            <Navbar.Collapse
              className={styles.navCollapse}
              id="responsive-navbar-nav"
            >
              <Nav>
                {navLinkList.map((item, index) => {
                  const url = item?.toLowerCase();
                  return (
                    <Nav.Link
                      key={index}
                      eventKey={index}
                      className={
                        isScroll ? styles.navbarActiveLink : styles.navbarLink
                      }
                      href={`/${url ?? ""}`}
                    >
                      {item ?? "RESIDENCES"}
                    </Nav.Link>
                  );
                })}
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Col>
      </Row>
    </Container>
  );
}
