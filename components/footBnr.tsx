import React, { useEffect, useState } from "react";
import styles from "../styles/customForm.styles.module.css";
import { Row, Col } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { NodeNextRequest } from "next/dist/server/base-http/node";
interface FooterPropsType {
  imageSrc?: StaticImageData | string;
  url?: string;
  linkText?: string;
}
function LinkBanner({ imageSrc, linkText, url }: FooterPropsType): JSX.Element {
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
    <div className={styles.bannerContainer}>
      <Row
        className={styles.bannerRow}
        style={{
          borderBottom: "none",
          paddingBottom: "0px",
        }}
      >
        <Col sm="12" md="6">
          {imageSrc ? (
            <Image
              src={imageSrc}
              width={880}
              height={300}
              layout="responsive"
              alt="footer-image"
              priority={true}
            />
          ) : null}
        </Col>
        <Col style={{padding:'0px'}} className={styles.contactBtnContainer} sm="12" md="4">
          <Link href={`/${url}`}>
            <button className={styles.contactBtnBox} 
              data-aos="fade-right"
              data-aos-delay="150"
              >
              {linkText ? (
                <div className={styles.contactBtnText}>{linkText}</div>
              ) : null}
              <Image
                src="/images/btn-arrow.svg"
                alt="arrow"
                width={25.19}
                height={12.87}
                layout="fixed"
              />
            </button>
          </Link>
        </Col>
      </Row>
    </div>
  );
}

export default function footBnr(props: FooterPropsType): JSX.Element {
  return (
    <div>
      {props.imageSrc && props.linkText ? (
        <LinkBanner
          imageSrc={props.imageSrc}
          linkText={props.linkText}
          url={props.url}
        />
      ) : (
        <div
          style={{
            paddingTop: "110px",
            backgroundColor: "#FBEFE1",
            opacity: 0.5,
          }}
        ></div>
      )}
    </div>
  );
}
