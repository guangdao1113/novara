import React, { useState, useEffect } from "react";
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import Image from "next/image";
//import arrow from "@/instagram/insta-arrow.png";
import arrow from "@/socialIcons/test-arrow.png";
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
  const navLinkList = [
    "PROJECTS",
    "COMPANY",
    "APPROACH",
    "COMMUNITY",
    "CONTACT",
  ];
  const [isScroll, setScroll] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [hidden,setHidden] = useState({
    // visibility:'hidden',
    opacity:0
  })

  const changeHeaderStyle = () => {
    if (typeof window !== "undefined" && window.scrollY >= 80) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  
  const scrolltotop = () => {
    window.scrollTo(0, 0);
  }
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

    window.onscroll = () => {
      if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        setHidden({
          // visibility:'visible',
          opacity:1
        })
      }else {
        setHidden({
          // visibility:'hidden',
          opacity:0
        })
      }
    }

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
        <Col style={{ padding: "0px" }} className={styles.leftLogo}>
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
        <Col style={{ padding: "0px" }} className={styles.navContainer}>
          <Navbar collapseOnSelect expand="lg" className={styles.navLinkBox}>
            {/* <Navbar.Toggle
              className={
                isScroll ? styles.navbarActiveToggler : styles.navbarToggler
              }
              aria-controls="responsive-navbar-nav"
            />
            <Navbar.Collapse
              className={styles.navCollapse}
              id="responsive-navbar-nav"
            > */}
            <Nav className={styles.NavDesktopVersion}>
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

            <Navbar.Toggle
              className={
                isScroll ? styles.navbarActiveToggler : styles.navbarToggler
              }
              aria-controls={`offcanvasNavbar-expand-lg`}
            />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-lg`}
              aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
              placement="end"
              className={styles.navCollapse}
            >
              <Offcanvas.Header closeButton className={styles.offcanvasBtn}>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                  <Link href="/">
                    <button className={styles.headerLogoBtn}>
                      <Image
                        src={logo}
                        width={180}
                        height={48.92}
                        alt="novara-logo"
                        className={props.homeLogo}
                      />
                    </button>
                  </Link>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className={styles.offcanvasBody}>
                <Nav>
                  {navLinkList.map((item, index) => {
                    const url = item?.toLowerCase();
                    return (
                      <Nav.Link
                        key={index}
                        eventKey={index}
                        className={styles.navbarActiveLink}
                        href={`/${url ?? ""}`}
                        onClick={() => setToggle(!toggle)}
                      >
                        {item}
                      </Nav.Link>
                    );
                  })}
                </Nav>
                <div>
                  <div className={styles.socialIcons}>
                    <Link href="/">
                      <Image
                        src="/images/facebook-copy-white.png"
                        width={30}
                        height={30}
                        alt="Facebook"
                      />
                    </Link>
                    <Link href="/">
                      <Image
                        src="/images/instagram-white.png"
                        width={30}
                        height={30}
                        alt="instagram"
                      />
                    </Link>
                    <Link href="/">
                      <Image
                        src="/images/linkedin-white.png"
                        width={30}
                        height={30}
                        alt="linkedin"
                      />
                    </Link>
                    <Link href="/">
                      <Image
                        src="/images/wechat-White.png"
                        width={30}
                        height={30}
                        alt="wechat"
                      />
                    </Link>
                  </div>
                  <div>
                    <div className={styles.footerTextBox}>
                      <div className={styles.footerText}>
                        © 2024 NOVARA PROPERTIES. {""}
                      </div>
                      <div className="footer-text footer-spacer">
                        ALL RIGHTS RESERVED.
                      </div>
                      <div className="footer-text">
                        TERMS & PRIVACY &nbsp;|&nbsp;
                        <Link href="https://www.alabcreative.com/">
                          <a target="_blank" className={styles.footerText}>
                            SITE BY A_LAB CREATIVE
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Navbar>
        </Col>
      </Row>
        <div className={styles.scrollup} onClick={scrolltotop} style={{
    opacity:hidden.opacity}}>
          <Image
              src={arrow}
              alt="arrow"
              width={12.08}
              height={15.85}
              layout="fixed"
            />
        </div>
    </Container>
  );
}
