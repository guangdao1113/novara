import React from "react";
import styles from "../styles/contact.module.css";
import HeroBanner from "components/heroBanner";
import contactImage from "@/contact-img.svg";
import Image from "next/image";
import { Row, Col } from "react-bootstrap";
import Contact from "../components/contact";

function Heading(): JSX.Element {
  return (
    <Row
      id="content"
      className={styles.headingContainer}
      data-aos="fade-up"
      data-aos-delay="50"
    >
      <Col md="12" lg="4">
        <div className={styles.headingText}>GET IN TOUCH</div>
      </Col>
      <Col md="12" lg="4">
        <div className={styles.headingSubText}>GENERAL INQUIRIES</div>
        <div className={styles.headingPara}>
          For any general inquiries, please contact us at the number or email
          below and we’ll be happy to assist you.
        </div>
        <div className={styles.headingSubTxt}>604 888 9999</div>
        <div className={styles.headingSubTxt}>info@novaraproperties.ca</div>
      </Col>
      <Col md="12" lg="4">
        <div className={styles.headingSubText}>REALTORS</div>
        <div className={styles.headingPara}>
          To inquire on the latest information for our current projects, please
          contact our sales team.
        </div>
        <div className={styles.headingSubTxt}>604 888 2222</div>
        <div className={styles.headingSubTxt}>info@novaraproperties.ca</div>
      </Col>
    </Row>
  );
}

function Info(): JSX.Element {
  return (
    <div className={styles.infoContainer}>
      <Image
        src="/images/Novara-website-map-icon.png"
        width={1920}
        height={900}
        layout="responsive"
        priority={true}
      />
    </div>
  );
}
export default function About() {
  return (
    <div>
      <HeroBanner
        imageSrc={contactImage}
        overlayOpa={0.45}
        headingText="Contact Us"
      />
      <Heading />
      <Info />
      <Contact />
    </div>
  );
}
