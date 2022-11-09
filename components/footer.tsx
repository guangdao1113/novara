import React from "react";
import { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
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
          padding: 104.3px 4vw 151px 4vw;
          background-color: #483525;
        }
        .footer-heading {
          font-family: "Gotham-Medium";
          font-size: 18px;
          font-weight: 500;
          line-height: 22px;
          word-spacing: 1px;
          color: #d19e80;
          padding-bottom: 30px;
        }
        .footer-link {
          padding-bottom: 15px;
          font-family: "Gotham-Book";
          font-size: 15px;
          line-height: 18px;
          word-spacing: 1px;
          color: #dbc7a9;
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
          line-height: 14px;
          word-spacing: 1px;
          color: #dbc7a9;
        }
        .footer-spacer {
          padding: 0 5px 0 5px;
        }
        @media (max-width: 992px) {
          .footer-logo {
            text-align: center;
          }
          .footer-heading {
            text-align: center;
            padding-top: 50px;
          }
          .footer-link {
            text-align: center;
          }
          .footer-text-box {
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }
          .footer-text {
            padding-bottom: 15px;
            text-transform: uppercase;
          }
          .footer-spacer {
            display: none;
          }
        }
      `}</style>
      <Row data-aos="fade-up" data-aos-delay="250">
        <Col md="12" lg="4">
          <div className="footer-logo">
            <Image
              src="/images/footer-logo.png"
              width={220.79}
              height={60}
              alt="footer-logo"
            />
          </div>
        </Col>
        <Col md="12" lg="8">
          <Row>
            <Col md="12" lg="4">
              <div className="footer-heading">NOVARA PROPERTIES</div>
              {/* <div className="footer-link">
                <a href="/">RESIDENCES</a>
              </div> */}
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
            </Col>
            <Col md="12" lg="4">
              <div className="footer-heading">INFORMATION</div>
              <div
                style={{ paddingBottom: "10px", textTransform: "uppercase" }}
                className="footer-link"
              >
                217 - 510 West Pender Street,
              </div>
              <div
                style={{ paddingBottom: "10px", textTransform: "uppercase" }}
                className="footer-link"
              >
                Vancouver BC V6B 6H5
              </div>
              <div
                style={{ paddingBottom: "10px", textTransform: "uppercase" }}
                className="footer-link"
              >
                info@novaraproperties.ca
              </div>
              <div
                style={{ paddingBottom: "10px", textTransform: "uppercase" }}
                className="footer-link"
              >
                604 888 9999
              </div>
            </Col>
            <Col md="12" lg="4">
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
            </Col>
          </Row>
          <Row>
            <div className="footer-text-box">
              <div className="footer-text">TERMS & PRIVACY </div>
              <div className="footer-text footer-spacer">|</div>
              <Link href="https://www.alabcreative.ca/">
                <a target="_blank">
                  <div className="footer-text">SITE BY A_LAB CREATIVE </div>
                </a>
              </Link>
              <div className="footer-text footer-spacer">|</div>
              <div className="footer-text">
                © 2022 NOVARA PROPERTIES. ALL RIGHTS RESERVED.{" "}
              </div>
            </div>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
