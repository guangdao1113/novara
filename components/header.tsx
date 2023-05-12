import React, { useState, useEffect } from "react";
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/header.styles.module.css";
import logo from "@/Novara-Properties_LOGO_Metallic.png";
import AOS from "aos";
import "aos/dist/aos.css";

interface HeaderPropsType {
  logo: string | StaticImageData;
  homeLogo: string;
  navbarLink: string;
}
export default function Header(props: HeaderPropsType): JSX.Element {
  const navLinkList = ["RESIDENCES","ABOUT", "APPROACH", "COMMUNITY", "CONTACT"];
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
    >
      <Row data-aos="fade-in" data-aos-delay="50">
        {/* <Col xs="9"> */}
        <Col style={{padding:'0px'}}>
          <Link href="/">
            <button className={styles.headerLogoBtn}>
              <Image
                src={isScroll ? logo : props.logo}
                width={isScroll ? 234.94 : 234.94}
                height={isScroll ? 64 : 64}
                alt="novara-logo"
                className={props.homeLogo}
              />
            </button>
          </Link>
        </Col>
        {/* <Col xs="3" className={styles.navContainer}> */}
        <Col style={{padding:'0px'}} className={styles.navContainer}>
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
                        isScroll ? styles.navbarActiveLink : props.navbarLink
                      }
                      href={`/${url ?? ""}`}
                    >
                      {item}
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
