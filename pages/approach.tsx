import React from "react";
import { useEffect, useState } from "react";
import styles from "../styles/approach.module.css";
import HeroBanner from "components/heroBanner";
import approachImg from "@/approach-img.svg";
import approachBnr from "@/approachBnr.jpg";
import approachBnrMobile from "@/approachBnr-mobile.jpg";
import aboutContact from "@/approach-contact-img.png";
import aboutContactMobile from "@/approach-contact-img-mobile.jpg";
import Image from "next/image";
import { Row, Col } from "react-bootstrap";
import FootBnr from "../components/footBnr";
import Footer from "../components/footer";

function Heading(): JSX.Element {
  return (
    <div id="content" className={styles.headingContainer}>
      <div
        className={styles.headingText}
        data-aos="fade-up"
        data-aos-delay="150"
      >
        HOLISTIC PHILOSOPHY & APPROACH
      </div>
      <div
        className={styles.headingPara}
        data-aos="fade-up"
        data-aos-delay="200"
      >
        We remain deeply committed to our environmental and social
        responsibilities as home designers. Novara invests in sustainable
        projects that prioritize quality of life for families and enhance the
        well-being of the local community. We advocate for the homeowner every
        step of the way, even after completion.
      </div>
      <Row className={styles.headingRow}>
        <Col
          md="6"
          lg="6"
          data-aos="fade-right"
          data-aos-delay="150"
          className={styles.left}
        >
          <div className={styles.headingQuoteTitle}>OUR APPROACH</div>
          <div className={styles.headingQuotePara}>
            We ensure quality, transparency, and excellent communication
            throughout the process. The three stages of our development process
            are the construction (including building and finishing), handover,
            and homeowner care.
          </div>
          <div className={styles.headingTxt}>1. Build & Construction</div>
          <div className={styles.headingTxt}>2. Finishing</div>
          <div className={styles.headingTxt}>3. The Handover Guarantee</div>
          <div className={styles.headingTxt}>4. Our Guarantee</div>
        </Col>
        <Col md="6" lg="6" className={styles.right}>
          <Image
            src="/images/approach-heading-img.svg"
            width={720}
            height={450}
            layout="responsive"
            alt="approach-heading"
          />
        </Col>
      </Row>
    </div>
  );
}
function Project(): JSX.Element {
  return (
    <div className={styles.projectContainer}>
      <Row className={styles.projectRowBox}>
        <Col md="5" lg="4">
          <div className={styles.projectLeftBox}>
            <div className={`${styles.projectSepImgBox} ${styles.leftVerImg}`}>
              <Image
                src="/images/approach-project-img.png"
                width={456}
                height={590}
                layout="responsive"
              />
            </div>
          </div>
          <div className={styles.projectMobile}>
            <div
              className={styles.projectTitle}
              data-aos="fade-up"
              data-aos-delay="150"
            >
              BUILD & CONSTRUCTION
            </div>
            <div
              className={styles.projectTxt}
              data-aos="fade-up"
              data-aos-delay="150"
            >
              We work with the reliable construction team that prioritizes
              quality and integrity just as we do. This diligence and care is
              reflected in how the team handles every detail, including building
              specifications and general design aesthetic. We oversee the entire
              process, from initial design to permits and construction.
            </div>
          </div>
        </Col>
        <Col className={styles.projectRightBox} md="6" lg="5">
          <div
            className={styles.projectTitle}
            data-aos="fade-up"
            data-aos-delay="150"
          >
            FINISHING
          </div>
          <div
            className={styles.projectTxt}
            data-aos="fade-up"
            data-aos-delay="150"
          >
            The big picture is important, but it’s the small things that make a
            lasting impression. Buying a home is one of the biggest decisions a
            person can make in their life, so Novara gives just as much
            attention to the minutiae to give every home a personal touch.
          </div>
        </Col>
      </Row>
      <Row className={styles.projectRowBox}>
        <Col className={styles.projectRightBox} md="5" lg="4">
          <div
            className={styles.projectTitle}
            data-aos="fade-up"
            data-aos-delay="150"
          >
            BUILD & CONSTRUCTION
          </div>
          <div
            className={styles.projectTxt}
            data-aos="fade-up"
            data-aos-delay="150"
          >
            We work with the reliable construction team that prioritizes quality
            and integrity just as we do. This diligence and care is reflected in
            how the team handles every detail, including building specifications
            and general design aesthetic. We oversee the entire process, from
            initial design to permits and construction.
          </div>
        </Col>
        <Col className={styles.projectRightBox} md="6" lg="5">
          <div className={styles.projectImgBox}>
            <Image
              src="/images/approach-project-img3.png"
              width={585}
              height={425}
              layout="responsive"
            />
          </div>
          <div className={styles.projectMobile}>
            <div
              className={styles.projectTitle}
              data-aos="fade-up"
              data-aos-delay="150"
            >
              FINISHING
            </div>
            <div
              className={styles.projectTxt}
              data-aos="fade-up"
              data-aos-delay="150"
            >
              The big picture is important, but it’s the small things that make
              a lasting impression. Buying a home is one of the biggest
              decisions a person can make in their life, so Novara gives just as
              much attention to the minutiae to give every home a personal
              touch.
            </div>
          </div>
        </Col>
      </Row>
      <Row className={styles.projectRowBox}>
        <Col md="5" lg="5">
          <div className={styles.projectSpeImgBox}>
            <Image
              src="/images/approach-project-img2.png"
              width={635}
              height={425}
              layout="responsive"
            />
          </div>
        </Col>
        <Col
          className={styles.projectSpeRightBox}
          md="7"
          lg="6"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          <div className={`${styles.projectTitle} ${styles.projectSpeTitle}`}>
            THE HANDOVER
          </div>
          <div className={styles.projectTxt}>
            The magic happens when we walk you through your new home and give
            you the keys, but the journey doesn’t end there—we want to make sure
            we have succeeded in providing you with a space that can evolve into
            a happy, thriving home. We realize that the process of moving in can
            be daunting, so we’re always available to answer any questions you
            may have and help in any way we can.
          </div>
        </Col>
      </Row>
    </div>
  );
}
function Info(): JSX.Element {
  return (
    <div className={styles.infoContainer}>
      <Row className={styles.projectRowBox}>
        <Col md="5" lg="4" data-aos="fade-up" data-aos-delay="150">
          <div className={styles.projectTitle}>OUR GUARANTEE</div>
          <div className={styles.projectTxt}>
            Undoubtedly the highlight of the process is when you become the
            owner of your new living space. We recognize that your new home is a
            blank canvas for future memories and opportunities, so we do not
            simply step away once the work is done. We offer a 2-5-10 warranty
            on your home so you can rest assured that your home will be looked
            after for years to come.
          </div>
          <div className={styles.projectSubTxt}>
            <div className={styles.headingTxt}>
              • 2 years coverage on labour and materials
            </div>
            <div className={styles.headingTxt}>
              • 5 years coverage on building envelope
            </div>
            <div className={styles.headingTxt}>
              • 10 years on the structure of home
            </div>
          </div>
        </Col>
        <Col className={styles.projectRightBox} md="6" lg="7">
          <div className={styles.projectImgBox}>
            <Image
              src="/images/approach-project-img4.png"
              width={585}
              height={425}
              layout="responsive"
            />
          </div>
        </Col>
      </Row>
    </div>
  );
}
export default function About() {
  const [bnrDesk, bnrMobile] = useState(approachBnr);
  const [footBnrDesk, footBnrMobile] = useState(aboutContact);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 575px)");
    if (mediaQuery.matches) {
      bnrMobile(approachBnrMobile);
      footBnrMobile(aboutContactMobile);
    }
  }, []);
  return (
    <div>
      <HeroBanner
        imageSrc={bnrDesk}
        overlayOpa={0.25}
        headingTextClassName="hero-text"
        headingText="Our Approah"
      />
      <Heading />
      <Project />
      <Info />
      <FootBnr imageSrc={footBnrDesk} linkText="Community" url="community" />
      <Footer/>
    </div>
  );
}
