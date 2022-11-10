import React from "react";
import styles from "../styles/community.module.css";
import HeroBanner from "components/heroBanner";
import communityImage from "@/community-img.svg";
import communityContact from "@/community-contact-img.png";
import Image from "next/image";
import { Row, Col } from "react-bootstrap";
import FootBnr from "../components/footBnr";

function Heading(): JSX.Element {
  return (
    <div id="content" className={styles.headingContainer}>
      <div
        className={styles.headingText}
        data-aos="fade-up"
        data-aos-delay="50"
      >
        HAND IN HAND
      </div>
      <div
        className={styles.headingPara}
        data-aos="fade-up"
        data-aos-delay="550"
      >
        We strive to treat all of our relationships as if they were family; we
        see our people (team members, builders, homeowners, and investors) as
        equals and stand alongside them.
      </div>
    </div>
  );
}
function Project(): JSX.Element {
  return (
    <div className={styles.projectContainer}>
      <Row
        className={styles.projectRowBox}
        data-aos="fade-up"
        data-aos-delay="50"
      >
        <Col lg="12" xl="6">
          <div
            style={{ paddingTop: "0" }}
            className={`${styles.projectImgBox} ${styles.leftVerImg}`}
          >
            <Image
              src="/images/community-project-img.png"
              width={575}
              height={426}
              layout="responsive"
              priority={true}
            />
          </div>
        </Col>
        <Col lg="12" xl="6">
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
        <Col lg="12" xl="7">
          <div
            className={styles.projectLeftBox}
            data-aos="fade-up"
            data-aos-delay="550"
          >
            <div className={styles.projectTitle}>BUILDING COMMUNITY</div>
            <div className={styles.projectTxt}>
              We believe that a community is at its healthiest when its people
              are uplifted collectively. We focus beyond the individuals in our
              immediate vicinity and look at how we can enrich the broader
              community. We place a high importance on acts of charity,
              donations, and remaining open-minded.
            </div>
            <div className={styles.projectImgBox}>
              <Image
                src="/images/community-project-img2.png"
                width={586}
                height={399}
                layout="responsive"
                priority={true}
              />
            </div>
          </div>
        </Col>
        <Col lg="12" xl="5" data-aos="fade-up" data-aos-delay="1050">
          <div className={styles.projectRightBox}>
            <div>
              <Image
                src="/images/community-project-img3.png"
                width={456}
                height={590}
                layout="responsive"
                priority={true}
              />
            </div>
            <div style={{ paddingTop: "80px" }} className={styles.projectTitle}>
              CULTURE
            </div>
            <div style={{ width: "100%" }} className={styles.projectTxt}>
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
        src="/images/community-info-img.png"
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
        imageSrc={communityImage}
        overlayOpa={0.45}
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
