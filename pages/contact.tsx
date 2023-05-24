import React from "react";
import Link from "next/link";
import styles from "../styles/contact.module.css";
import HeroBanner from "components/heroBanner";
import contactImage from "@/contact-img.svg";
import contactBnr from "@/contactBnr.jpg";
import Image from "next/image";
import { Row, Col } from "react-bootstrap";
import Contact from "../components/contact";

function Heading(): JSX.Element {
  return (
    <Row
      id="content"
      className={styles.headingContainer}
      data-aos="fade-up"
      data-aos-delay="150"
    >
      <Col md="12" lg="4">
        <div className={styles.headingText}>GET IN TOUCH</div>
      </Col>
      <Col md="12" lg="5">
        <div className={styles.headingSubText}>GENERAL INQUIRIES</div>
        <div className={styles.headingPara}>
          For any general inquiries, please contact us at the number or email
          below and we’ll be happy to assist you.
        </div>
      </Col>
      <Col md="12" lg="3">
        <div className={styles.headingSubTxt}>+1 (604) 232 1070</div>
        <div className={styles.headingSubTxt}>info@novaraproperties.ca</div>
      </Col>
    </Row>
  );
}

function Info(): JSX.Element {
  return (
    <div className={styles.infoContainer}>
      <Link href="https://www.google.com/maps/place/515+W+Pender+St+%23215,+Vancouver,+BC+V6B+6H5/@49.2836983,-123.1154215,17z/data=!3m1!4b1!4m6!3m5!1s0x54867178f003943d:0xf6dd15347f0e18bf!8m2!3d49.2836948!4d-123.1128466!16s%2Fg%2F11qqn8kw7f">
        <a target="_blank">
          <Image
            src="/images/Novara-website-map-icon.png"
            width={1920}
            height={900}
            layout="responsive"
            priority={true}
          />
        </a>
      </Link>
    </div>
  );
}
export default function About() {
  return (
    <div>
      <HeroBanner
        imageSrc={contactBnr}
        overlayOpa={0.25}
        headingTextClassName="hero-text"
        headingText="Contact Us"
      />
      <Heading />
      <Info />
      <Contact />
    </div>
  );
}
