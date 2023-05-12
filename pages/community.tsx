import React from "react";
import styles from "../styles/community.module.css";
import HeroBanner from "components/heroBanner";
import communityImage from "@/community-img.svg";
import communityContact from "@/community-contact-img.png";
import communityBnr from "@/communityBnr.jpg";
import Image from "next/image";
import { Row, Col } from "react-bootstrap";
import FootBnr from "../components/footBnr";

function Heading(): JSX.Element {
  return (
    <div id="content" className={styles.headingContainer}>
      <div
        className={styles.headingText}
        data-aos="fade-up"
        data-aos-delay="150"
      >
        HAND IN HAND
      </div>
      <div
        className={styles.headingPara}
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Our concept of service involves caring for our neighbors, communities,
        and cities, enriching people’s lives. We strive to reflect this in not
        only our relationships but also in how we approach our work.
      </div>
    </div>
  );
}
function Project(): JSX.Element {
  return (
    <div className={styles.projectContainer}>
      <Row className={styles.projectRowBox}>
        <Col lg="12" xl="5">
          <div
            style={{ paddingTop: "0" }}
            className={`${styles.projectImgBox} ${styles.leftVerImg}`}
          >
            <Image
              src="/images/community-project-img.jpg"
              width={575}
              height={426}
              layout="responsive"
              priority={true}
            />
          </div>
        </Col>
        <Col lg="12" xl="6" data-aos="fade-up" data-aos-delay="150">
          <div>
            <div className={`${styles.projectTitle} ${styles.speTitle}`}>
              CONTRIBUTION
            </div>
            <div className={styles.projectTxt}>
              We put others’ needs first and strive to help people. Our concept
              of service involves caring for our neighbors, communities, and
              cities, enriching people’s lives. We strive to reflect this in not
              only our relationships but also in how we approach our work.
            </div>
          </div>
        </Col>
      </Row>
      <Row className={styles.projectRowBox}>
        <Col lg="12" xl="6">
          <div className={styles.projectLeftBox}>
            <div
              className={styles.projectTitle}
              data-aos="fade-up"
              data-aos-delay="150"
            >
              BUILDING COMMUNITY
            </div>
            <div
              className={styles.projectTxt}
              data-aos="fade-up"
              data-aos-delay="150"
            >
              We believe that a community is at its healthiest when its people
              are uplifted collectively. We focus beyond the individuals in our
              immediate vicinity and look at how we can enrich the broader
              community. We place a high importance on acts of charity,
              donations, and remaining open-minded.
            </div>
            <div className={styles.projectImgBox}>
              <Image
                src="/images/community-project-img2.jpg"
                width={586}
                height={399}
                layout="responsive"
                priority={true}
              />
            </div>
          </div>
        </Col>
        <Col style={{ padding: "0px" }} lg="12" xl="4">
          <div className={styles.projectRightBox}>
            <div>
              <Image
                src="/images/community-project-img3.jpg"
                width={456}
                height={590}
                layout="responsive"
                priority={true}
              />
            </div>
            <div
              className={styles.projectTitle}
              data-aos="fade-up"
              data-aos-delay="150"
            >
              CULTURE
            </div>
            <div
              className={styles.projectTxt}
              data-aos="fade-up"
              data-aos-delay="150"
            >
              Our people at Novara Properties are not merely a team, we’re
              family. We care for each other just as we care for our work. From
              daily interactions to big decisions, everything we do factors in
              each person’s needs and embodies a spirit of camaraderie and
              collaboration.
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
function Info(): JSX.Element {
  return (
    <div className={styles.infoContainer}>
      <Image
        src="/images/community-info-img.jpg"
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
        imageSrc={communityBnr}
        overlayOpa={0.25}
        headingTextClassName="hero-text"
        headingText="Our Community"
      />
      <Heading />
      <Project />
      <Info />
      <FootBnr
        imageSrc={communityContact}
        linkText="Contact Us"
        url="contact"
      />
    </div>
  );
}
