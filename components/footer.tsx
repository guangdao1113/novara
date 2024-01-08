import React, { useState, useRef,MutableRefObject  } from "react";
import { useEffect } from "react";
import EmailMailchimpFormContainer from "./emailSubscribe"
import { Row, Col } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import arrow from "@/instagram/insta-arrow.png";
import styles from "../styles/header.styles.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { relative } from 'path';

export default function Footer(): JSX.Element {

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
  }, []);
  return (
    <div className="footer-container">
      <style jsx>{`
        .footer-container {
          padding: 78px 4vw 70px 4vw;
          background-color: #483525;
          position:relative;
          z-index:2;
        }
        .row-container {
          display:flex;
          justify-content: space-between;
        }
        .footer-heading {
          font-family: "Gotham-Medium";
          font-size: 16px;
          font-weight: 500;
          line-height: 19px;
          word-spacing: 1px;
          color: #d19e80;
          padding-bottom: 28px;
        }
        .footer-link {
          padding-bottom: 12px;
          font-family: "Gotham-Book";
          font-size: 12px;
          line-height: 15px;
          word-spacing: -1.5px;
          color: #dbc7a9;
          letter-spacing: 1.2px;
        }
        .footer-link > a:hover {
          color: #fbefe1;
        }
        .footer-text-box {
          // display: flex;
          // flex-direction: row;
          // justify-content: flex-start;
          padding-top: 27px;
          font-family: "Gotham-Book";
          font-size: 11.5px;
          line-height: 15px;
          word-spacing: -1.5px;
          color: #D6C3A4;
          opacity:0.5;
          letter-spacing: 1.2px;
        }
        .footer-text {
          display:inline-flex;
        }
        .socialIcons {
          display:inline-flex;
        }
        .socialIcons .footer-link {
          margin-right:10px;
        }
        .footer-spacer {
          padding: 0 5px 0 5px;
        }
        .footer-mobile {
          display: none;
        }
        .alabcreative {
          transiiton: color 500ms east-out;
        }
        .alabcreative:hover {
          color:#fbefe1;
        }

        @media (max-width: 1700px) {
          .footer-container {
            padding: clamp(60px, 5vw, 70px) 4vw;
          }
          .footer-logo {
            width: clamp(173.98px, 14vw, 220.79px) !important;
          }
          .footer-heading {
            font-size: clamp(12px, 0.7vw, 16px);
            line-height: clamp(18px, 1vw, 19px);
          }
          .footer-link {
            font-size: clamp(10px, 0.6vw, 12px);
            line-height: clamp(9px, 0.5vw, 15px);
          }
          .footer-text-box {
            font-size: clamp(7px, 0.5vw, 12px);
            line-height: clamp(9px, 0.5vw, 15px);
          }
          // .footer-text-box {
          //   // padding-top: clamp(30px,80.7px);
          // }
          .footer-text-box {
            font-size: clamp(7px, 0.6vw, 12px);
            line-height: clamp(9px, 0.5vw, 15px);
            padding-top: clamp(5px,0.7vw,27px);
          }
        }
        @media (max-width: 1500px) {
          .footer-text {
            display:block!important;
          }
        }
        @media (max-width: 991px) {
          .footer-container {
            padding: 68px 9vw 70.9px;
          }
          .social-container {
            padding-top: 68px;
            padding-bottom: 86px;
          }
          .footer-logo {
            text-align: center;
          }
          .footer-desktop {
            display: none;
          }
          .footer-mobile {
            display: block;
          }
          .footer-heading {
            padding-top: 50px;
            padding-bottom: 46px;
            font-size: 15px;
            line-height: 18px;
          }
          .footer-link {
            font-size: 15px;
            line-height: 24px;
            padding-bottom: 2px;
          }
          .footer-text-box {
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding-top: 35px;
            display: none;
          }
          .footer-text {
            padding-bottom: 15px;
            text-transform: uppercase;
          }
          .footer-spacer {
          }
        }
      `}</style>
      <div className="footer-desktop" style={{position:"relative"}}>
        <Row>
          <div className="row-container">
            <Col md="12" lg="3">
              {/* <div
                className="footer-logo"
                data-aos="fade-up-right"
                data-aos-delay="150"
              >
                <Link href="/">
                  <Image
                    src="/images/footer-logo.png"
                    width={220.79}
                    height={60}
                    alt="footer-logo"
                  />
                </Link>
              </div> */}
              <EmailMailchimpFormContainer/>
            </Col>
            <Col md="12" lg="7">
              <Row>
                <Col md="12" lg="4"style={{padding:0}}>
                  <div>
                    <div className="footer-heading">NOVARA PROPERTIES</div>
                    <div className="footer-link">
                      <a href="/projects">PROJECTS</a>
                    </div>
                    <div className="footer-link">
                      <a href="/company">COMPANY</a>
                    </div>
                    <div className="footer-link">
                      <a href="/approach">APPROACH</a>
                    </div>
                    <div className="footer-link">
                      <a href="/community">COMMUNITY</a>
                    </div>
                    <div className="footer-link">
                      <a href="/contact">CONTACT</a>
                    </div>
                  </div>
                </Col>
                <Col md="12" lg="5" xl="4"style={{padding:0}}>
                  <div className="footer-heading">INFORMATION</div>
                  <div
                    style={{ paddingBottom: "5px", textTransform: "uppercase" }}
                    className="footer-link"
                  >
                    215 - 515 West Pender Street,
                  </div>
                  <div
                    style={{ paddingBottom: "5px", textTransform: "uppercase" }}
                    className="footer-link"
                  >
                    Vancouver BC V6B 6H5
                  </div>
                  <div
                    style={{ paddingBottom: "5px", textTransform: "uppercase" }}
                    className="footer-link"
                  >
                    +1 (604) 232 1070
                  </div>
                  <div
                    style={{ paddingBottom: "5px", textTransform: "uppercase" }}
                    className="footer-link"
                  >
                    info@novaraproperties.ca
                  </div>
                </Col>
                <Col md="12" lg="3" xl="4" style={{padding:0}}>
                  <div>
                    <div className="footer-heading">SOCIAL</div>
                    <div className="socialIcons">
                      <div className="footer-link">
                        <a href="/">
                          <Image
                            src="/images/socialIcons/facebook-icon-W.png"
                            alt="arrow"
                            width={21}
                            height={21}
                            layout="fixed"
                          />
                        </a>
                      </div>
                      <div className="footer-link">
                        <a href="/">
                          <Image
                            src="/images/socialIcons/instagram-icon-w.png"
                            alt="arrow"
                            width={21.29}
                            height={20.96}
                            layout="fixed"
                          />
                        </a>
                      </div>
                      <div className="footer-link">
                        <a href="/">
                          <Image
                            src="/images/socialIcons/wechat-icon-w.png"
                            alt="arrow"
                            width={25.54}
                            height={25.1}
                            layout="fixed"
                          />
                        </a>
                      </div>
                      <div className="footer-link">
                        <a href="/">
                          <Image
                            src="/images/socialIcons/linkedin-icon-w.png"
                            alt="arrow"
                            width={21.29}
                            height={20.96}
                            layout="fixed"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="footer-text-box">
                      <div className="">
                        © 2024 NOVARA PROPERTIES.{""}
                      </div>
                      <div className="footer-text" style={{display:"inline-flex"}}>TERMS & PRIVACY&nbsp;|&nbsp; 
                      {/* <div className="footer-text footer-spacer"></div> */}
                        <Link href="https://www.alabcreative.com/">
                          <a target="_blank" className="alabcreative">
                            <div>SITE BY A_LAB CREATIVE </div>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </div>
        </Row>
        <div className={styles.darkLogoFooter}>
          <Image
            src="/images/novara-logo-dark-footer.png"
            width={1777.79}
            height={341.95}
            objectFit="cover"
            alt="Instagram Post"
          />
        </div>
              
      </div>
      <div className="footer-mobile">
        <EmailMailchimpFormContainer/>
        <div>
          <div className="footer-heading">INFORMATION</div>
          <div style={{ textTransform: "uppercase" }} className="footer-link">
            215 - 515 West Pender Street,
          </div>
          <div style={{ textTransform: "uppercase" }} className="footer-link">
            Vancouver BC V6B 6H5
          </div>
          <div style={{ textTransform: "uppercase" }} className="footer-link">
            +1 (604) 232 1070
          </div>
          <div style={{ textTransform: "uppercase" }} className="footer-link">
            info@novaraproperties.ca
          </div>
        </div>
        <div className="social-container">
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
              <div>ALL RIGHTS RESERVED.</div>
              <div>
                TERMS & PRIVACY &nbsp;|&nbsp;
                <Link href="https://www.alabcreative.com/">
                  <a target="_blank" className={styles.alabcreative}>
                    SITE BY A_LAB CREATIVE
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-logo">
          <Link href="/">
            <Image
              src="/images/footer-logo.png"
              width={165.83}
              height={45.06}
              alt="footer-logo"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
