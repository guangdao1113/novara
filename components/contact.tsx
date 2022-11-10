import React, { useEffect, useState } from "react";
import styles from "../styles/customForm.styles.module.css";
import { Row, Col } from "react-bootstrap";
import Image from "next/image";
import MailChimpSubscribe from "react-mailchimp-subscribe";
import { ProjectCheckbox } from "../components/projectCheckbox";
import { RealtorCheckbox } from "../components/realtorCheckbox";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
interface FooterPropsType {
  imageSrc?: StaticImageData | string;
  url?: string;
  linkText?: string;
}
function LinkBanner({ imageSrc, linkText, url }: FooterPropsType): JSX.Element {
  return (
    <div className={styles.bannerContainer}>
      <Row className={styles.bannerRow}>
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
        <Col className={styles.contactBtnContainer} sm="12" md="6">
          <Link href={`/${url}`}>
            <button className={styles.contactBtnBox}>
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
interface CustomFormPropsType {
  status: string;
  message: string;
  onValidated: (string) => string;
}
function CustomForm({
  status,
  message,
  onValidated,
}: CustomFormPropsType): JSX.Element {
  const [formData, setFormData] = useState({
    firstName: null,
    lastName: null,
    email: null,
    phone: null,
    projectName: null,
    isRelator: null,
    allowContact: null,
  });
  const projectInfoHandler = (projectName) => {
    setFormData({
      ...formData,
      projectName: projectName,
    });
  };
  const realtorHandler = (isRealtor) => {
    setFormData({
      ...formData,
      isRelator: isRealtor,
    });
  };
  const allowContactHandler = (event) => {
    if (event.target.checked) {
      setFormData({
        ...formData,
        allowContact: "Yes",
      });
    } else {
      setFormData({
        ...formData,
        allowContact: "No",
      });
    }
  };
  const changeHandler = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // 需要所有的值不然会报 can not convert null or undefined to object的错误
    formData.email &&
      formData.firstName &&
      formData.lastName &&
      formData.isRelator &&
      formData.phone &&
      formData.projectName &&
      formData.allowContact &&
      formData.email.indexOf("@") > -1 &&
      onValidated({
        EMAIL: formData.email,
        FNAME: formData.firstName,
        LNAME: formData.lastName,
        PHONE: formData.phone,
        PROJECTS: formData.projectName,
        ISREALTOR: formData.isRelator,
        CONTACT: formData.allowContact,
      });
  };
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
    if (status === "success") {
      clearForm();
    }
  }, [status]);

  const clearForm = () => {
    const contactForm = document.getElementById(
      "contact-form"
    ) as HTMLFormElement;
    contactForm.reset();
  };
  return (
    <div>
      <Row data-aos="fade-up" data-aos-delay="50">
        <Col className={styles.cusFormHeading} xl="12" xxl="4">
          Register Your Interest
        </Col>
        <Col xl="12" xxl="8">
          <form id="contact-form" onSubmit={handleSubmit}>
            <Row>
              <Col md="12" lg="6">
                <ProjectCheckbox projectInfoHandler={projectInfoHandler} />
                <RealtorCheckbox realtorHandler={realtorHandler} />
              </Col>
              <Col md="12" lg="6">
                <div className={styles.cusFormSubtitle}>INFORMATION</div>
                <Row style={{ paddingTop: "7.5px" }}>
                  <Col className={styles.cusInputBox}>
                    <input
                      className={styles.cusInput}
                      id="firstName"
                      name="firstName"
                      required={true}
                      type="text"
                      placeholder="First Name"
                      onChange={changeHandler}
                    />
                    <input
                      className={styles.cusInput}
                      id="email"
                      name="email"
                      required={true}
                      type="email"
                      placeholder="Email"
                      onChange={changeHandler}
                    />
                  </Col>
                  <Col className={styles.cusInputBox}>
                    <input
                      className={styles.cusInput}
                      id="lastName"
                      name="lastName"
                      required={true}
                      type="text"
                      placeholder="Last Name"
                      onChange={changeHandler}
                    />
                    <input
                      className={styles.cusInput}
                      id="phone"
                      name="phone"
                      required={true}
                      type="text"
                      placeholder="Phone Number"
                      onChange={changeHandler}
                    />
                  </Col>
                </Row>
                <div className={styles.allowContactBox}>
                  <input
                    onChange={allowContactHandler}
                    type="checkbox"
                    name="allowContact"
                    className={styles.allowContactInput}
                  />
                  <div className={styles.allowContactText}>
                    I agree to allow Novara Properties and its affiliates to
                    contact me and send me information via email, phone, or SMS.
                    I understand I can unsubscribe at any time.
                  </div>
                </div>
                <button className={styles.contactBtnBoxTwo}>
                  <div className={styles.contactBtnTextTwo}>Register</div>
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
          </form>
        </Col>
      </Row>
      <div className={styles.messageContainer}>
        {status === "success" ? (
          <div className={styles.messageTxt}>
            Message Sent Successfully! {message}
          </div>
        ) : null}
        {status === "error" ? (
          <div className={styles.messageTxt}>{message}</div>
        ) : null}
      </div>
    </div>
  );
}
function Register(): JSX.Element {
  const postUrl = `${process.env.NEXT_PUBLIC_MAILCHIMP_ACTION_URL}?u=${process.env.NEXT_PUBLIC_MAILCHIMP_U_VALUE}&id=${process.env.NEXT_PUBLIC_MAILCHIMP_ID_VALUE}`;

  return (
    <div className={styles.cusFormContainer}>
      <MailChimpSubscribe
        url={postUrl}
        render={({ subscribe, status, message }) => (
          <CustomForm
            status={status}
            message={message}
            onValidated={(formData) => subscribe(formData)}
          />
        )}
      />
    </div>
  );
}
export default function Contact(props: FooterPropsType): JSX.Element {
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
      <Register />
    </div>
  );
}
