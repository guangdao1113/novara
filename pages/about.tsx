import React from "react";
import styles from "../styles/about.module.css";
import HeroBanner from "components/heroBanner";
import aboutImage from "@/about-img.svg";
import aboutContact from "@/about-contact-img.svg";
import Image from "next/image";
import { Row, Col } from "react-bootstrap";
import Contact from "../components/contact";

function Heading(): JSX.Element {
  return (
    <div id="content" className={styles.headingContainer}>
      <div className={styles.headingText}>NOVARA PROPERTIES</div>
      <div className={styles.headingPara}>
        We seek out locales with a lower supply of real estate and a high
        potential for growth.
        <br />
        We build valued properties that deliver excellent returns with low
        risks.
      </div>
      <Row className={styles.headingRow}>
        <Col xl="12" xxl="6">
          <Image
            src="/images/about-heading-img.svg"
            width={720}
            height={450}
            layout="responsive"
            alt="about-heading"
            priority={true}
          />

          <div className={styles.headingQuoteTxt}>
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed dd
            tempor incididunt ut labore et dolore magna aliqua.”
          </div>
          <div className={styles.headingQuoteName}>
            — Micheal Jin, Co-Founder
          </div>
        </Col>
        <Col xl="12" xxl="6">
          <div className={styles.headingQuoteTitle}>ABOUT US</div>
          <div
            style={{ paddingBottom: "50px" }}
            className={styles.headingQuotePara}
          >
            Founded in 2011, Novara Properties is a family- owned enterprise
            that identifies opportunities for and invests in the development of
            residential real estate in and around the Vancouver area. We build
            valued properties that deliver excellent returns with low risks,
            seeking out areas with a lower supply of real estate and,
            consequently, a high potential for growth.
          </div>
          <div className={styles.headingQuotePara}>
            From the beginning, our aim has been to provide exceptional value
            for clients by developing functional and innovative residential real
            estate. Our approach is progressive and, as a family-run business,
            we have a heartfelt devotion to the local communities we help
            develop.
          </div>
        </Col>
      </Row>
    </div>
  );
}
function Project(): JSX.Element {
  return (
    <div className={styles.projectContainer}>
      <Row className={styles.projectRowBox}>
        <Col lg="12" xl="6">
          <div className={styles.projectTitle}>VALUES</div>
          <div className={styles.projectTxt}>
            We value our process just as much as our results. Our work ethic,
            relationships, and results are based on a set of values that our
            entire organization embodies from the inside out.
          </div>
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
            <div className={styles.projectTitle}>VISION</div>
            <div className={styles.projectTxt}>
              As a family business, we understand that a home is more than a
              physical building; it’s a vibrant environment, full of life. The
              space we live in influences our well-being, which is why we are
              passionate about designing functional, yet intimate spaces that
              evolve as your family’s lifestyle and needs change.
            </div>
            <div className={`${styles.projectImgBox} ${styles.leftVerImg}`}>
              <Image
                src="/images/about-project-img3.svg"
                width={456}
                height={590}
                layout="responsive"
                priority={true}
              />
            </div>
            <div className={styles.projectTitle}>PARTNERSHIP</div>
            <div className={styles.projectTxt}>
              Cooperation is an integral factor in the success of our projects.
              We build our relationships on a solid foundation of trust,
              respect, and collaboration in order to forge authentic, enduring
              connections.
            </div>
          </div>
          <div className={styles.projectLeftBox}>
            <div className={styles.projectImgBox}>
              <Image
                src="/images/about-project-img5.png"
                width={585}
                height={425}
                layout="responsive"
                priority={true}
              />
            </div>
            <div className={styles.projectTitle}>COMMUNITY & SERVICE</div>
            <div className={styles.projectTxt}>
              We put others’ needs first and strive to help people. Our concept
              of service encompasses caring for our neighbors, communities, and
              cities and enriching people’s lives. We strive to reflect this in
              not only our relationships but also in the way we approach our
              work.
            </div>
          </div>
        </Col>
        <Col lg="12" xl="6">
          <div className={styles.projectRightBox}>
            <div>
              <Image
                src="/images/about-project-img2.png"
                width={456}
                height={590}
                layout="responsive"
                priority={true}
              />
            </div>
            <div style={{ paddingTop: "80px" }} className={styles.projectTitle}>
              INTEGRITY
            </div>
            <div className={styles.projectTxt}>
              We strive for honesty, transparency, and mindfulness in everything
              we do. We put people first, and the quality of our work reflects
              our diligence and conscientiousness in the design and building
              process.
            </div>
          </div>
          <div className={styles.projectRightBox}>
            <div className={styles.projectImgBox}>
              <Image
                src="/images/about-project-img4.svg"
                width={585}
                height={425}
                layout="responsive"
                priority={true}
              />
            </div>

            <div style={{ paddingTop: "80px" }} className={styles.projectTitle}>
              PASSION
            </div>
            <div className={styles.projectTxt}>
              Building homes is not just a business—it is integral to who we
              are. We desire to create thriving spaces and communities that we
              can be proud of, and this ethos permeates every level of our
              organization.
            </div>
          </div>
          <div className={styles.projectRightBox}>
            <div className={styles.projectImgBox}>
              <Image
                src="/images/about-project-img6.png"
                width={456}
                height={590}
                layout="responsive"
                priority={true}
              />
            </div>
            <div style={{ paddingTop: "80px" }} className={styles.projectTitle}>
              CULTURE
            </div>
            <div className={styles.projectTxt}>
              The success and unity of our team revolves around keeping each
              other accountable and following a set of values that we uphold
              with positive energy, disciplined action, and camaraderie. We take
              great pride in our people and what we do.
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
        src="/images/about-info-img.png"
        width={1920}
        height={900}
        layout="responsive"
        priority={true}
      />
      <div className={styles.infoBox}>
        <Row className={styles.infoRow}>
          <Col md="12" lg="12" xl="6">
            <div className={styles.infoQuoteTitle}>OUR TEAM</div>
            <div
              style={{ paddingBottom: "50px" }}
              className={styles.infoQuotePara}
            >
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
              src="/images/about-info-img2.svg"
              width={736}
              height={450}
              layout="responsive"
              alt="about-info"
            />

            <div className={styles.headingQuoteTxt}>
              “We are stronger together, and working collaboratively with a
              common goal allows us to take a vision and turn it into a
              reality..”
            </div>
            <div className={styles.headingQuoteName}>
              — Nancy Jin, Co-Founder
            </div>
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
        imageSrc={aboutImage}
        overlayOpa={0.3}
        headingText="About Novara"
      />
      <Heading />
      <Project />
      <Info />
      <Contact imageSrc={aboutContact} linkText="Approach" url="approach" />
    </div>
  );
}
