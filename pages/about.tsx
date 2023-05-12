import React from "react";
import styles from "../styles/about.module.css";
import HeroBanner from "components/heroBanner";
import homeImage from "@/HOME-page-ps.jpg";
import aboutBnr from "@/about-bnr.jpg";
import aboutContact from "@/about-contact-img.svg";
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
        NOVARA PROPERTIES
      </div>
      <div
        className={styles.headingPara}
        data-aos="fade-up"
        data-aos-delay="200"
      >
        We build high quality homes that suit your lifestyle,
        <br />
        that bring you peace and joy.
      </div>
      <Row className={styles.headingRow}>
        <Col style={{ paddingLeft: "0px" }} xl="12" xxl="6">
          <Image
            src="/images/about-heading-img.jpg"
            width={720}
            height={450}
            layout="responsive"
            alt="about-heading"
            priority={true}
          />
        </Col>
        <Col
          style={{ paddingRight: "0px" }}
          xl="12"
          xxl="4"
          data-aos="fade-left"
          data-aos-delay="150"
        >
          <div className={styles.headingQuoteTitle}>ABOUT US</div>
          <div className={styles.headingQuotePara}>
            Founded in 2011, Novara Properties is a family- owned enterprise
            that identifies opportunities for and invests in the development of
            residential real estate in and around the Vancouver area. From the
            beginning, our aim has been to provide exceptional quality and value
            for clients by developing functional, innovative and characteristic
            residential real estate, which blend into and enhance our local
            community.
          </div>
        </Col>
      </Row>
    </div>
  );
}
function Project(): JSX.Element {
  return (
    <div className={styles.projectContainer}>
      <div
        className={styles.headingQuoteTxt}
        data-aos="zoom-in-up"
        data-aos-delay="150"
      >
        “Attention to detail is the key to success of projects. From site
        selection, design details, to construction management, we go above and
        beyond on every detail, with future residences’ needs in mind.”
      </div>
      <div
        className={styles.headingQuoteName}
        data-aos="zoom-in-up"
        data-aos-delay="150"
      >
        — Michael Jin, Cofounder Director Operations
      </div>
      <Row className={styles.projectRowBox}>
        <Col style={{ padding: "0px" }} lg="12" xl="5">
          <div className={styles.projectLeftBox}>
            <div className={styles.projectSpeImgBox}>
              <Image
                src="/images/about-project-img.svg"
                width={585}
                height={425}
                layout="responsive"
                priority={true}
              />
            </div>
            <div
              className={styles.projectTitle}
              data-aos="fade-up"
              data-aos-delay="150"
            >
              VISION
            </div>
            <div
              className={styles.projectTxt}
              data-aos="fade-up"
              data-aos-delay="150"
            >
              As a family business, we understand that a home is more than a
              physical building; it’s a vibrant environment, full of life. The
              space we live in influences our well-being, which is why we are
              passionate about designing functional, yet intimate spaces that
              evolve as your family’s lifestyle and needs change.
            </div>
          </div>
        </Col>
        <Col style={{ padding: "0px" }} lg="12" xl="5">
          <div className={styles.projectRightBox}>
            <div
              className={styles.projectTitle}
              data-aos="fade-up"
              data-aos-delay="150"
            >
              PASSION
            </div>
            <div
              className={styles.projectTxt}
              data-aos="fade-up"
              data-aos-delay="150"
            >
              Building homes is not just a business—it is integral to who we
              are. We desire to create thriving spaces and communities that we
              can be proud of, and this ethos permeates every level of our
              organization.
            </div>
            <div className={styles.projectImgBox}>
              <Image
                src="/images/about-project-img4.svg"
                width={585}
                height={425}
                layout="responsive"
                priority={true}
              />
            </div>
          </div>
        </Col>
      </Row>
      <Row className={styles.projectRowBox}>
        <Col style={{ padding: "0px" }} lg="12" xl="4">
          <div className={`${styles.projectImgBox} ${styles.leftVerImg}`}>
            <Image
              src="/images/about-project-img3.svg"
              width={456}
              height={590}
              layout="responsive"
              priority={true}
            />
          </div>
        </Col>
        <Col
          style={{ padding: "0px" }}
          lg="12"
          xl="7"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          <div className={styles.projectTitle}>PARTNERSHIP</div>
          <div className={styles.projectTxt}>
            Cooperation is an integral factor in the success of our projects. We
            build our relationships on a solid foundation of trust, respect, and
            collaboration in order to forge authentic, enduring connections.
          </div>
        </Col>
      </Row>
    </div>
  );
}
function Info(): JSX.Element {
  return (
    <div className={styles.infoContainer}>
      <div
        className={styles.headingQuoteTxt}
        data-aos="zoom-in-up"
        data-aos-delay="150"
      >
        “We ensure our projects are financially viable and bring value to our
        customers.”
      </div>
      <div
        className={styles.headingQuoteName}
        data-aos="zoom-in-up"
        data-aos-delay="150"
      >
        — Nancy Jin, Cofounder Director Finance
      </div>
      <div className={styles.infoBox}>
        <Row className={styles.infoRow}>
          <Col
            md="12"
            lg="12"
            xl="4"
            data-aos="fade-right"
            data-aos-delay="150"
          >
            <div className={styles.infoQuoteTitle}>OUR TEAM</div>
            <div className={styles.infoQuotePara}>
              We are an eclectic family from all different walks of life and
              bring with us a high level of local knowledge, experience, and a
              track record of exemplary results. We are creative, passionate,
              and always ready to connect, partnering with architects,
              designers, and other local professionals to bring our residential
              developments and other creative projects to fruition.
            </div>
          </Col>
          <Col className={styles.infoRightImg} md="12" lg="12" xl="6">
            <Image
              src="/images/about-info-img2.jpg"
              width={736}
              height={450}
              layout="responsive"
              alt="about-info"
            />
          </Col>
        </Row>
      </div>
    </div>
  );
}
export default function About() {
  return (
    <div>
      <HeroBanner
        imageSrc={aboutBnr}
        overlayOpa={0.25}
        headingTextClassName="hero-text"
        headingText="About Novara"
      />
      <Heading />
      <Project />
      <Info />
      <FootBnr imageSrc={aboutContact} linkText="Approach" url="approach" />
    </div>
  );
}
