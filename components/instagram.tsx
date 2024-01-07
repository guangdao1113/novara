import React, {useState} from "react";
import arrow from "@/btn-arrow.svg";
import { Row, Col } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import styles from "../styles/instagram.module.css";
import "aos/dist/aos.css";

export default function Instagram(): JSX.Element {
  const [bnrArrowDesk, bnrArrowMobile] = useState(arrow);
  return (
    <div className={styles.instaContainer}>
      <Link href="">
        <button className={styles.contactBtnBox} 
          data-aos="fade-right"
          data-aos-delay="150"
          >
          <div className={styles.contactBtnText}>Visit Our Instagram</div>
          <Image
            src={bnrArrowDesk}
            alt="arrow"
            width={25.19}
            height={12.87}
            layout="fixed"
          />
        </button>
      </Link>
      <Row className={styles.firstRow}>
        <Col lg="12" className={styles.firstCol}>
          <div className={styles.postImg}>
            <Link href="">
              <Image
                src="/images/instagram/iStock-1194809853.jpg"
                width={270}
                height={270}
                objectFit="cover"
                alt="Instagram Post"
              />
            </Link>
          </div>
          <div className={styles.postImg}>
            <Link href="">
              <Image
                src="/images/instagram/iStock-1127397327.jpg"
                width={270}
                height={270}
                objectFit="cover"
                alt="Instagram Post"
              />
            </Link>
          </div>
          <div className={styles.postImg}>
            <Link href="">
              <Image
                src="/images/instagram/iStock-918803534.jpg"
                width={270}
                height={270}
                objectFit="cover"
                alt="Instagram Post"
              />
            </Link>
          </div>
          <div className={styles.postImg}>
            <Link href="">
              <Image
                src="/images/instagram/iStock-1130645859.jpg"
                width={270}
                height={270}
                objectFit="cover"
                alt="Instagram Post"
              />
            </Link>
          </div>
          <div className={styles.postImg}>
            <Link href="">
              <Image
                src="/images/instagram/iStock-619508358.jpg"
                width={270}
                height={270}
                objectFit="cover"
                alt="Instagram Post"
              />
            </Link>
          </div>
          <div className={styles.postImg}>
            <Link href="">
              <Image
                src="/images/instagram/iStock-1185905057.jpg"
                width={270}
                height={270}
                objectFit="cover"
                alt="Instagram Post"
              />
            </Link>
          </div>
        </Col>
      </Row>
    </div>
  );
}
