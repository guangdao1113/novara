import React from "react";
import { useEffect } from "react";
import styles from "../styles/Home.module.css";
import HeroBanner from "components/heroBanner";
// import overlay from "@/index-overlay.svg";
import aboutImage from "@/about-img.svg";
import homeContact from "@/home-contact.svg";
import Image from "next/image";
import { Row, Col } from "react-bootstrap";
import Contact from "../components/contact";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

function Heading(): JSX.Element {
  return (
    <div id="content" className={styles.headingContainer}>
      <div
        className={styles.headingText}
        data-aos="fade-up"
        data-aos-delay="50"
      >
        ABOUT NOVARA
      </div>
      <div
        className={styles.headingPara}
        data-aos="fade-up"
        data-aos-delay="550"
      >
        Since 2011, Novara Properties has been reimagining the possibilities of
        living space with better ideas. We are a family-owned business that
        identifies opportunities for and invests in the development of
        residential real estate in and around the Vancouver area.
      </div>
      <Link href="/about">
        <button
          className={styles.headingBtnBox}
          data-aos="fade-right"
          data-aos-delay="750"
        >
          <div className={styles.headingBtn}>Our Story</div>
          <Image
            src="/images/btn-arrow.svg"
            alt="arrow"
            width={25.19}
            height={12.87}
            layout="fixed"
          />
        </button>
      </Link>
    </div>
  );
}
function Project(): JSX.Element {
  return (
    <div className={styles.projectContainer}>
      <Row>
        <Col md="12" lg="8">
          <Row className={styles.projectImageBox}>
            <Col sm="12" md="6" lg="6">
              <div
                className={styles.projectImageLeft}
                data-aos="fade-right"
                data-aos-delay="550"
              >
                <Image
                  src="/images/home-project1.svg"
                  width={530}
                  height={364}
                  objectFit="cover"
                  alt="project1"
                />
                <div className={styles.projectImageTextBox}>
                  <div className={styles.projectImageText}>Project Name</div>
                  <Image
                    src="/images/btn-arrow.svg"
                    alt="arrow"
                    width={25.19}
                    height={12.87}
                    layout="fixed"
                  />
                </div>
              </div>
            </Col>
            <Col sm="12" md="6" lg="6">
              <div
                className={styles.projectImageRight}
                data-aos="fade-right"
                data-aos-delay="50"
              >
                <Image
                  src="/images/home-project2.svg"
                  width={530}
                  height={364}
                  objectFit="cover"
                  alt="project2"
                />
                <div className={styles.projectImageTextBox}>
                  <div className={styles.projectImageText}>Project Name</div>
                  <Image
                    src="/images/btn-arrow.svg"
                    alt="arrow"
                    width={25.19}
                    height={12.87}
                    layout="fixed"
                  />
                </div>
              </div>
            </Col>
          </Row>
          <Row className={styles.projectImageBoxTwo}>
            <Col sm="12" md="1" lg="3"></Col>
            <Col
              sm="12"
              md="11"
              lg="9"
              data-aos="fade-right"
              data-aos-delay="50"
            >
              <div className={styles.projectImageRight}>
                <Image
                  src="/images/home-project3.svg"
                  width={805}
                  height={500}
                  objectFit="cover"
                  alt="project3"
                />
              </div>
              <div className={styles.projectImageTextBox}>
                <div className={styles.projectImageText}>Project Name</div>
                <Image
                  src="/images/btn-arrow.svg"
                  alt="arrow"
                  width={25.19}
                  height={12.87}
                  layout="fixed"
                />
              </div>
            </Col>
          </Row>
        </Col>
        <Col
          className={styles.projectTextBox}
          md="12"
          lg="4"
          data-aos="fade-left"
          data-aos-delay="750"
        >
          <div className={styles.projectTextHeading}>OUR RESIDENCES</div>
          <div className={styles.projectTextBoxParagh}>
            We specialize in the development of townhomes and multi-family homes
            in Greater Vancouver. We focus on creating modern, yet cozy spaces
            that evolve with your family’s lifestyle and needs.
          </div>
          <button className={styles.projectTextBoxBtn}>
            <div className={styles.projectImageText}>View all</div>
            <Image
              src="/images/btn-arrow.svg"
              alt="arrow"
              width={25.19}
              height={12.87}
              layout="fixed"
            />
          </button>
        </Col>
      </Row>
    </div>
  );
}
function Info(): JSX.Element {
  return (
    <div className={styles.infoContainer}>
      <Row>
        <Col md="12" lg="12" xl="6">
          <div
            className={styles.infoLeftBox}
            data-aos="fade-right"
            data-aos-delay="50"
          >
            <div
              className={`${styles.projectTextHeading} ${styles.infoTextHeading}`}
            >
              Build & Care
            </div>
            <div className={styles.projectTextBoxParagh}>
              With an emphasis on environmental and social responsibility in
              both concept and construction, Novara invests in sustainable
              projects that enrich the local economy while enhancing the well-
              being of the community. We utilize our expertise, strengths and
              connections to help bring your real estate vision to life.
            </div>
            <Link href="/approach">
              <button className={styles.infoBtn}>
                <div className={styles.projectImageText}>Read more</div>
                <Image
                  src="/images/btn-arrow.svg"
                  alt="arrow"
                  width={25.19}
                  height={12.87}
                  layout="fixed"
                />
              </button>
            </Link>
          </div>
        </Col>
        <Col className={styles.infoRightImg} md="12" lg="12" xl="6">
          <Image
            src="/images/home-info1.png"
            layout="fill"
            objectFit="cover"
            alt="home-info"
            data-aos="fade-right"
            data-aos-delay="550"
          />
        </Col>
      </Row>
      <Row>
        <Col className={styles.infoLeftImg} md="12" lg="12" xl="6">
          <Image
            src="/images/home-info2.png"
            layout="fill"
            objectFit="cover"
            alt="home-info2"
            data-aos="fade-right"
            data-aos-delay="50"
          />
        </Col>
        <Col className={styles.infoRightContainer} md="12" lg="12" xl="6">
          <div className={styles.infoRightBox}>
            <div data-aos="fade-right" data-aos-delay="550">
              <div
                className={`${styles.projectTextHeading} ${styles.infoTextHeading}`}
              >
                COMMUNITY
              </div>
              <div className={styles.projectTextBoxParagh}>
                People are at the heart of our business. Whether a client, a
                team member, or another professional in our network, we strive
                to uphold and enrich our local community every step of the way.
              </div>
              <Link href="/community">
                <button className={styles.infoBtn}>
                  <div className={styles.projectImageText}>Read more</div>
                  <Image
                    src="/images/btn-arrow.svg"
                    alt="arrow"
                    width={25.19}
                    height={12.87}
                    layout="fixed"
                  />
                </button>
              </Link>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
export default function Home() {
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
    <div>
      <HeroBanner
        imageSrc={aboutImage}
        overlayOpa={0.2}
        headingText="Where dreams come home."
      />
      <Heading />
      <Project />
      <Info />
    </div>
  );
}
 