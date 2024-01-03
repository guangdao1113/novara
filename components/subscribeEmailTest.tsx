import React, { useEffect, useState } from "react";
import Select from "react-select";
import styles from "../styles/customForm.styles.module.css";
import { Row, Col } from "react-bootstrap";
import Image from "next/image";
import MailChimpSubscribe from "react-mailchimp-subscribe";
import { ProjectCheckbox } from "./projectCheckbox";
import { RealtorCheckbox } from "./realtorCheckbox";
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
  // const options = [
  //   { value: "", label: "" },
  //   { value: "Friends and Family", label: "Friends and Family" },
  //   { value: "Realtor", label: "Realtor" },
  //   {
  //     value: "Signage / Walk by / Drive by",
  //     label: "Signage / Walk by / Drive by",
  //   },
  //   { value: "Online Search", label: "Online Search" },
  //   { value: "Social Media", label: "Social Media" },
  // ];
  const [formData, setFormData] = useState({
    //firstName: null,
    // lastName: null,
    email: null,
    // phone: null,
    // projectName: null,
    //hearUs: "Select",
    // isRelator: null,
    // allowContact: null,
  });
  // const projectInfoHandler = (projectName) => {
  //   setFormData({
  //     ...formData,
  //     projectName: projectName,
  //   });
  // };
  // const changeSelectHandler = (event) => {
  //   console.log(event.value);
  //   setFormData({
  //     ...formData,
  //     hearUs: event.value,
  //   });
  // };
  // const realtorHandler = (isRealtor) => {
  //   setFormData({
  //     ...formData,
  //     isRelator: isRealtor,
  //   });
  // };
  // const allowContactHandler = (event) => {
  //   if (event.target.checked) {
  //     setFormData({
  //       ...formData,
  //       allowContact: "Yes",
  //     });
  //   } else {
  //     setFormData({
  //       ...formData,
  //       allowContact: "No",
  //     });
  //   }
  // };
  const changeHandler = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (e) => {
    console.log('t2')
    e.preventDefault();
    // 需要所有的值不然会报 can not convert null or undefined to object的错误
    formData.email &&
      //formData.firstName &&
      // // formData.lastName &&
      //  formData.isRelator &&
      //  formData.phone &&
      // formData.projectName &&
      //formData.hearUs &&
     // formData.allowContact &&
      formData.email.indexOf("@") > -1 &&
      onValidated({
        EMAIL: formData.email,
        // FNAME: formData.firstName,
        // // LNAME: formData.lastName,
        //  PHONE: formData.phone,
        // PROJECTS: formData.projectName,
        //HEARUS: formData.hearUs,
        // ISREALTOR: formData.isRelator,
        // CONTACT: formData.allowContact,
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

  // const colourStyles = {
  //   placeholder: (defaultStyles) => {
  //       return {
  //           ...defaultStyles,
  //           color: 'rgba(89,73,59,0.4)',
  //           // fontSize: '18px'
  //       }
  //   }
  // }

  const style = {
    control: (base) => ({
      ...base,
      borderTop: 0,
      borderLeft: 0,
      borderRight: 0,
      borderBottom: "1px solid #59493B",
      background: "transparent",
      borderRadius: 0,
      fontFamily: "Gotham-Book",
      fontSize: "clamp(12px,0.7vw,18px)",
      // This line disable the blue border
      boxShadow: "none",
    }),
  };
  return (
    <div>
      <Row data-aos="fade-up" data-aos-delay="150">
        <Col className={styles.cusFormHeading} md="12" xl="6">
          Register Your Interest
        </Col>
        <Col md="12" xl="6">
          <form
            id="contact-form"
            className={styles.contactForm}
            onSubmit={(e) => handleSubmit(e)}
          >
            <div className={styles.cusFormSubtitle}>INFORMATION</div>
            <Row className={styles.row}>
              <Col className={styles.cusInputBox}>
                {/* <input
                  className={styles.cusInput}
                  id="firstName"
                  name="firstName"
                  required={true}
                  type="text"
                  placeholder="First Name"
                  onChange={changeHandler}
                /> */}
                {/* <input
                  className={styles.cusInput}
                  id="lastName"
                  name="lastName"
                  required={true}
                  type="text"
                  placeholder="Last Name"
                  onChange={changeHandler}
                /> */}
              </Col>
              <Col className={styles.cusInputBox}>
                <input
                  className={styles.cusInput}
                  id="email"
                  name="email"
                  required={true}
                  type="email"
                  placeholder="Email"
                  onChange={changeHandler}
                />
                {/* <input
                  className={styles.cusInput}
                  id="phone"
                  name="phone"
                  required={true}
                  type="text"
                  placeholder="Phone Number"
                  onChange={changeHandler}
                /> */}
              </Col>
            </Row>
            {/* <ProjectCheckbox projectInfoHandler={projectInfoHandler} /> */}
            {/* <div className={styles.cusFormSubtitleHearUs}>
              How did you hear about us?
            </div> */}
            {/* <Select 
              options={options}
              placeholder={
                <div className={styles.selectPlaceholderText}>Select</div>
              }
              className={styles.registerSelect}
              onChange={changeSelectHandler}
              styles={style}
            />  */}
            {/* <select
              id="mce-source"
              name="hearUs"
              className={styles.registerSelect}
              onChange={changeSelectHandler}
              // styles={{ opacity: this.state.someValidationError ? "0.5" : "1"}}
            >
              <option
                className={styles.registerOption}
                value=""
                selected
                disabled
                hidden
              >
                Select
              </option>
              <option
                className={styles.registerOption}
                value="Friends and Family"
              >
                Friends and Family
              </option>
              <option className={styles.registerOption} value="Realtor">
                Realtor
              </option>
              <option
                className={styles.registerOption}
                value="Signage / Walk by / Drive by"
              >
                Signage / Walk by / Drive by
              </option>
              <option className={styles.registerOption} value="Online Search">
                Online Search
              </option>
              <option className={styles.registerOption} value="Social Media">
                Social Media
              </option>
            </select> */}
            {/* <RealtorCheckbox realtorHandler={realtorHandler} />
            <div className={styles.allowContactBox}>
              <input
                onChange={allowContactHandler}
                type="checkbox"
                name="allowContact"
                className={styles.allowContactInput}
              />
              <div className={styles.allowContactText}>
                I agree to allow Novara Properties and its affiliates to contact
                me and send me information via email, phone, or SMS. I
                understand I can unsubscribe at any time.
              </div>
            </div>  */}
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
            <div className={styles.messageContainer}>
              {status === "success" ? (
                <div className={styles.messageTxt}>
                  Thank you for registering.
                </div>
              ) : null}
              {status === "error" ? (
                <div className={styles.messageTxt}>{message}</div>
              ) : null}
            </div>
          </form>
        </Col>
      </Row>
    </div>
  );
}
function Register(): JSX.Element {
  const postUrl = `${process.env.NEXT_PUBLIC_MAILCHIMP_ACTION_URL}?u=${process.env.NEXT_PUBLIC_MAILCHIMP_U_VALUE}&id=${process.env.NEXT_PUBLIC_MAILCHIMP_ID_VALUE}`;
  //const postUrl = `https://yahoo.us13.list-manage.com/subscribe/post?u=56a5a6faefa46b019dbd969e7&id=c250b296eb`;
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
export default function SubscribeEmailTest(props: FooterPropsType): JSX.Element {
  return (
    <div>
      {props.imageSrc && props.linkText ? (
        <LinkBanner
          imageSrc={props.imageSrc}
          linkText={props.linkText}
          url={props.url}
        />
      ) : (
        <div></div>
      )}
      <Register />
    </div>
  );
}





