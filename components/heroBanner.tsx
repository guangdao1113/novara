import React from "react";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import blurPlaceHolder from "@/blurPlaceHolder.png";
import AOS from "aos";
import "aos/dist/aos.css";

interface HeroPropsType {
  imageSrc: string | StaticImageData;
  overlayOpa: number;
  headingText: string;
}

export default function HeroBanner(props: HeroPropsType): JSX.Element {
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
    <div className="hero-container">
      <style jsx>{`
        .hero-container {
          position: relative;
          width: 100%;
          height: 100vh;
        }
        .overlay {
          position: relative;
          background-color: rgba(37, 33, 31);
          opacity: ${props.overlayOpa};
          height: 100%;
        }
        .hero-text {
          position: absolute;
          color: #ffffff;
          font-family: PPEiko-LightItalic;
          font-weight: 300;
          font-size: 50px;
          line-height: 60px;
          width: 50%;
          transform: translate(-50%);
          top: 50%;
          left: 50%;
          text-align: center;
          z-index: 11;
        }
        .scroll {
          width: 1px;
          height: 100px;
          background-color: #ffffff;
          position: absolute;
          bottom: 0%;
          left: 50%;
          margin-right: -50%;
          transform: translate(-50%, 0%);
        }
        button.navbar-toggler.collapsed {
        }
        @media (max-width: 992px) {
          .hero-text {
            font-size: 25px;
            width: 100%;
          }
          .scroll {
            height: 50px;
          }
        }
        @media (max-wdith: 550px) {
          .hero-text {
            font-size: 40px;
            width: 100%;
          }
          .scroll {
            height: 50px;
          }
        }
      `}</style>
      <Image
        src={props.imageSrc}
        layout="fill"
        objectFit="cover"
        alt="hero-bg-img"
        // placeholder="blur"
        // blurDataURL={blurPlaceHolder}
        priority={true}
      />
      {/* <div className="overlayImg">
        <Image
          src={props.overlaySrc}
          layout="fill"
          objectFit="cover"
          alt="overlay"
        />
      </div> */}
      <div className="overlay"></div>
      <div className="hero-text">
        <div data-aos="fade-up" data-aos-delay="550">
          {props.headingText}
        </div>
      </div>
      <Link href="#content">
        <div>
          <div
            className="scroll"
            data-aos="fade-up"
            data-aos-delay="750"
            data-aos-offset="-300"
          ></div>
        </div>
      </Link>
    </div>
  );
}
