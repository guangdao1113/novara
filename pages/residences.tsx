import React from "react";
import styles from "../styles/residences.module.css";
import HeroBanner from "components/heroBanner";
import homeImage from "@/HOME-page-ps.jpg";
import resImage from "@/Residences-Banner.jpg";
import aboutContact from "@/about-contact-img.svg";
import aboutIntroPic from "@/about-intro-pic.jpg";
import Image from "next/image";
import { Row, Col } from "react-bootstrap";
import FootBnr from "../components/footBnr";

function CurrentProjects(): JSX.Element {
  return (
    <div id="content" className={styles.headingContainer}>
      <Row
        className={styles.headingRow}
        data-aos="fade-up"
        data-aos-delay="150"
      >
        <div className={styles.heading}>Current</div>
        <Col style={{ paddingLeft: "0px" }} md="12" lg="6">
          <Image
            src="/images/Ashlyn_Novara-Properties_Logo-Banner.jpg"
            width={721}
            height={447}
            layout="responsive"
            alt="Ashlyn_Novara-Properties_Logo-Banner"
            priority={true}
          />

          <div className={styles.headingTxt}>ASHLYN AT CAMBIE PARK</div>
          <div className={styles.headingPara}>
            A refined collection of 23 townhomes coming to sought-after Cambie
            area in West side Vancouver.
          </div>
          <button className={styles.projectTextBoxBtn}>
            <div className={styles.projectImageText}>View Project</div>
            <Image
              src="/images/btn-arrow-white.png"
              alt="arrow"
              width={25.19}
              height={12.87}
              layout="fixed"
            />
          </button>
        </Col>
        <Col style={{ paddingRight: "0px" }} md="12" lg="6">
          <Image
            src="/images/Ashlyn_Novara-Properties_Logo-Banner.jpg"
            width={721}
            height={447}
            layout="responsive"
            alt="Ashlyn_Novara-Properties_Logo-Banner"
            priority={true}
          />

          <div className={styles.headingTxt}>ASHLYN AT CAMBIE PARK</div>
          <div className={styles.headingPara}>
            A refined collection of 23 townhomes coming to sought-after Cambie
            area in West side Vancouver.
          </div>
          <button className={styles.projectTextBoxBtn}>
            <div className={styles.projectImageText}>View Project</div>
            <Image
              src="/images/btn-arrow-white.png"
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
function UpComingProjects(): JSX.Element {
  return (
    <div id="content" className={styles.headingContainer}>
      <Row
        className={styles.headingRow}
        data-aos="fade-up"
        data-aos-delay="150"
      >
        <div className={styles.heading}>Upcoming</div>
        <Col style={{ paddingLeft: "0px" }} md="12" lg="6">
          <Image
            src="/images/Ashlyn_Novara-Properties_Logo-Banner.jpg"
            width={721}
            height={447}
            layout="responsive"
            alt="Ashlyn_Novara-Properties_Logo-Banner"
            priority={true}
          />

          <div className={styles.headingTxt}>ASHLYN AT CAMBIE PARK</div>
          <div className={styles.headingPara}>
            A refined collection of 23 townhomes coming to sought-after Cambie
            area in West side Vancouver.
          </div>
          <button className={styles.projectTextBoxBtn}>
            <div className={styles.projectImageText}>View Project</div>
            <Image
              src="/images/btn-arrow-white.png"
              alt="arrow"
              width={25.19}
              height={12.87}
              layout="fixed"
            />
          </button>
        </Col>
        <Col style={{ paddingRight: "0px" }} md="12" lg="6">
          <Image
            src="/images/Ashlyn_Novara-Properties_Logo-Banner.jpg"
            width={721}
            height={447}
            layout="responsive"
            alt="Ashlyn_Novara-Properties_Logo-Banner"
            priority={true}
          />

          <div className={styles.headingTxt}>ASHLYN AT CAMBIE PARK</div>
          <div className={styles.headingPara}>
            A refined collection of 23 townhomes coming to sought-after Cambie
            area in West side Vancouver.
          </div>
          <button className={styles.projectTextBoxBtn}>
            <div className={styles.projectImageText}>View Project</div>
            <Image
              src="/images/btn-arrow-white.png"
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
function PastProjects(): JSX.Element {
  return (
    <div id="content" className={styles.headingContainer}>
      <Row
        className={styles.headingRow}
        data-aos="fade-up"
        data-aos-delay="150"
      >
        <div className={styles.heading}>Past</div>
        <Col style={{ paddingLeft: "0px" }} md="12" lg="6">
          <Image
            src="/images/Ashlyn_Novara-Properties_Logo-Banner.jpg"
            width={721}
            height={447}
            layout="responsive"
            alt="Ashlyn_Novara-Properties_Logo-Banner"
            priority={true}
          />
          <div className={styles.headingTxt}>ASHLYN AT CAMBIE PARK</div>
          <div className={styles.headingPara}>
            A refined collection of 23 townhomes coming to sought-after Cambie
            area in West side Vancouver.
          </div>
          <button className={styles.projectTextBoxBtn}>
            <div className={styles.projectImageText}>View Project</div>
            <Image
              src="/images/btn-arrow-white.png"
              alt="arrow"
              width={25.19}
              height={12.87}
              layout="fixed"
            />
          </button>
        </Col>
        <Col style={{ paddingRight: "0px" }} md="12" lg="6">
          <Image
            src="/images/Ashlyn_Novara-Properties_Logo-Banner.jpg"
            width={721}
            height={447}
            layout="responsive"
            alt="Ashlyn_Novara-Properties_Logo-Banner"
            priority={true}
          />

          <div className={styles.headingTxt}>ASHLYN AT CAMBIE PARK</div>
          <div className={styles.headingPara}>
            A refined collection of 23 townhomes coming to sought-after Cambie
            area in West side Vancouver.
          </div>
          <button className={styles.projectTextBoxBtn}>
            <div className={styles.projectImageText}>View Project</div>
            <Image
              src="/images/btn-arrow-white.png"
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
export default function Residences() {
  return (
    <div>
      <HeroBanner
        imageSrc={resImage}
        overlayOpa={0.25}
        headingTextClassName="hero-text"
        headingText="Our Residences"
      />
      <CurrentProjects />
      <UpComingProjects />
      <PastProjects />
      <FootBnr imageSrc={aboutIntroPic} linkText="About Us" url="about" />
    </div>
  );
}
