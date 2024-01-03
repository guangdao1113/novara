import React from "react";
import { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import EmailMailchimpFormContainer from './subscribeEmail'
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/header.styles.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

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
          padding: 100px 4vw 99px 4vw;
          background-color: #483525;
        }
        .footer-heading {
          font-family: "Gotham-Medium";
          font-size: 18px;
          font-weight: 500;
          line-height: 21px;
          word-spacing: 1px;
          color: #d19e80;
          padding-bottom: 28px;
        }
        .footer-link {
          padding-bottom: 12px;
          font-family: "Gotham-Book";
          font-size: 15px;
          line-height: 18px;
          word-spacing: 1px;
          color: #dbc7a9;
          letter-spacing: 1.2px;
        }
        .footer-link > a:hover {
          color: #fbefe1;
        }
        .footer-text-box {
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          padding-top: 80.7px;
        }
        .footer-text {
          font-family: "Gotham-Book";
          font-size: 12px;
          line-height: 15px;
          word-spacing: 1px;
          color: #dbc7a9;
          letter-spacing: 1.2px;
        }
        .footer-spacer {
          padding: 0 5px 0 5px;
        }
        .footer-mobile {
          display: none;
        }

        @media (max-width: 1700px) {
          .footer-container {
            padding: clamp(60px, 5vw, 100px) 4vw;
          }
          .footer-logo {
            width: clamp(173.98px, 14vw, 220.79px) !important;
          }
          .footer-heading {
            font-size: clamp(15px, 0.7vw, 18px);
            line-height: clamp(18px, 1vw, 21px);
          }
          .footer-link {
            font-size: clamp(10px, 0.6vw, 15px);
            line-height: clamp(9px, 0.5vw, 18px);
          }
          .footer-text {
            font-size: clamp(8px, 0.5vw, 12px);
            line-height: clamp(9px, 0.5vw, 15px);
          }
          .footer-text-box {
            // padding-top: clamp(30px,80.7px);
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
            padding-top: 0px;
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
      <div className="footer-desktop">
        <Row>
          <Col md="12" lg="4">
            <div
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
            </div>
            <EmailMailchimpFormContainer/>
          </Col>
          <Col md="12" lg="8">
            <Row>
              <Col md="12" lg="4">
                <div>
                  <div className="footer-heading">NOVARA PROPERTIES</div>
                  <div className="footer-link">
                    <a href="/residences">RESIDENCES</a>
                  </div>
                  <div className="footer-link">
                    <a href="/about">ABOUT</a>
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
              <Col md="12" lg="5" xl="4">
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
              <Col md="12" lg="3" xl="4">
                <div>
                  <div className="footer-heading">SOCIAL</div>
                  <div className="footer-link">
                    <a href="/">FACEBOOK</a>
                  </div>
                  <div className="footer-link">
                    <a href="/">LINKEDIN</a>
                  </div>
                  <div className="footer-link">
                    <a href="/">INSTAGRAM</a>
                  </div>
                  <div className="footer-link">
                    <a href="/">WECHAT</a>
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <div className="footer-text-box">
                <div className="footer-text">
                  © 2023 NOVARA PROPERTIES. ALL RIGHTS RESERVED.{""}
                </div>
                <div className="footer-text footer-spacer">&nbsp;|&nbsp;</div>
                <div className="footer-text">TERMS & PRIVACY </div>
                <div className="footer-text footer-spacer">&nbsp;|&nbsp;</div>
                <Link href="https://www.alabcreative.ca/">
                  <a target="_blank">
                    <div className="footer-text">SITE BY A_LAB CREATIVE </div>
                  </a>
                </Link>
              </div>
            </Row>
          </Col>
        </Row>
      </div>
      <div className="footer-mobile">
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
                © 2023 NOVARA PROPERTIES. {""}
              </div>
              <div>ALL RIGHTS RESERVED.</div>
              <div>
                TERMS & PRIVACY &nbsp;|&nbsp;
                <Link href="https://www.alabcreative.ca/">
                  <a target="_blank" className={styles.footerText}>
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
