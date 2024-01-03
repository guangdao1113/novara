import React, { useEffect, useState } from "react";
import styles from "../styles/customForm.styles.module.css";
import { Row, Col } from "react-bootstrap";
import Image from "next/image";
import MailChimpSubscribe from "react-mailchimp-subscribe";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
interface CustomFormPropsTypeS {
  status: string;
  message: string;
  onValidated: (string) => string;
}
// function CustomFormS({
//   status,
//   message,
//   onValidated,
// }: CustomFormPropsTypeS): JSX.Element {
//   const [formData, setFormData] = useState({
//     email: null,
//   });
//   const changeHandler = (event) => {
//     setFormData({
//       ...formData,
//       [event.target.name]: event.target.value,
//     });
//   };
//   const handleSubmit = (e) => {
//     console.log('t1')
//     e.preventDefault();
//     // 需要所有的值不然会报 can not convert null or undefined to object的错误
//     formData.email &&
//       formData.email.indexOf("@") > -1 &&
//       onValidated({
//         EMAIL: formData.email,
//       });
//   };
//   useEffect(() => {
//     AOS.init({
//       offset: 0,
//       duration: 1000,
//       easing: "ease-in-out",
//       delay: 100,
//       once: true,
//       mirror: true,
//       anchorPlacement: "top-bottom",
//     });
//     if (status === "success") {
//       clearForm();
//     }
//   }, [status]);

//   const clearForm = () => {
//     const contactForm = document.getElementById(
//       "contact-form"
//     ) as HTMLFormElement;
//     contactForm.reset();
//   };

//   // const colourStyles = {
//   //   placeholder: (defaultStyles) => {
//   //       return {
//   //           ...defaultStyles,
//   //           color: 'rgba(89,73,59,0.4)',
//   //           // fontSize: '18px'
//   //       }
//   //   }
//   // }

//   // const style = {
//   //   control: (base) => ({
//   //     ...base,
//   //     borderTop: 0,
//   //     borderLeft: 0,
//   //     borderRight: 0,
//   //     borderBottom: "1px solid #59493B",
//   //     background: "transparent",
//   //     borderRadius: 0,
//   //     fontFamily: "Gotham-Book",
//   //     fontSize: "clamp(12px,0.7vw,18px)",
//   //     // This line disable the blue border
//   //     boxShadow: "none",
//   //   }),
//   // };
//   return (
//     <div>
//       <Row data-aos="fade-up" data-aos-delay="150">
//         <Col className={styles.cusFormHeading} md="12" xl="12">
//           SIGN UP FOR NEWS AND UPDATES
//         </Col>
//         <Col md="12" xl="12">
//           <form
//             id="contact-form"
//             className={styles.contactForm}
//             onSubmit={(e) => handleSubmit(e)}
//           >
//             <Row className={styles.row}>
//               <Col className={styles.cusInputBox}>
//                 <input
//                   className={styles.cusInput}
//                   id="email"
//                   name="email"
//                   required={true}
//                   type="email"
//                   placeholder="Email"
//                   onChange={changeHandler}
//                 />
//               </Col>
//             </Row>
//             <button className={styles.contactBtnBoxTwo}>
//               <div className={styles.contactBtnTextTwo}>SUBMIT</div>
//               <Image
//                 src="/images/btn-arrow.svg"
//                 alt="arrow"
//                 width={25.19}
//                 height={12.87}
//                 layout="fixed"
//               />
//             </button>
//             <div className={styles.messageContainer}>
//               {status === "success" ? (
//                 <div className={styles.messageTxt}>
//                   Thank you for subscribing.
//                 </div>
//               ) : null}
//               {status === "error" ? (
//                 <div className={styles.messageTxt}>{message}</div>
//               ) : null}
//             </div>
//           </form>
//         </Col>
//       </Row>
//     </div>
//   );
// }
// export default function SubscribeEmail(): JSX.Element {
//   const postUrl = `${process.env.NEXT_PUBLIC_MAILCHIMP_ACTION_URL}?u=${process.env.NEXT_PUBLIC_MAILCHIMP_U_VALUE}&id=${process.env.NEXT_PUBLIC_MAILCHIMP_ID_VALUE}`;
//   //const postUrl = `https://yahoo.us13.list-manage.com/subscribe/post?u=56a5a6faefa46b019dbd969e7&id=c250b296eb`;
//   return (
//     <div className={styles.cusFormContainer}>
//       <MailChimpSubscribe
//         url={postUrl}
//         render={({ subscribe, status, message }) => (
//           <CustomFormS
//             status={status}
//             message={message}
//             onValidated={(formData) => subscribe(formData)}
//           />
//         )}
//       />
//     </div>
//   );
// }


const CustomForm = ({ status, message, onValidated }: CustomFormPropsTypeS) => {
  console.log('t1')
  const [formData, setFormData] = useState({
    email: null,
    tags: 3755573

  });
  const changeHandler = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    formData.email &&
    formData.tags &&
    formData.email.indexOf("@") > -1 &&
    onValidated({
        EMAIL: formData.email,
        tags: formData.tags,
    });
}

  return (
    <form onSubmit={(e) => handleSubmit(e)}> 
      <h3>join our email</h3> 
      <input
        id="email"
        name="email"
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={changeHandler}
      />
      <div><input type="hidden" name="tags" value="3755573"/></div>
      <input type="submit" />
      <div>
        {status === "success" ? (
          <div>
            Thank you for registering.
          </div>
        ) : null}
        {status === "error" ? (
          <div>{message}</div>
        ) : null}
      </div>
    </form>
  );
};

const EmailMailchimpFormContainer = () => {
  const postUrl = `https://hotmail.us20.list-manage.com/subscribe/post?u=daaf6d61c262407593d7455dd&amp;id=976d627fd9&amp;v_id=4297&amp;f_id=00e953e7f0`;
    return (
        <div className="mc__form-container">
            <MailChimpSubscribe
                url={postUrl}
                render={({ subscribe, status, message }) => (
                    <CustomForm
                        status={status} 
                        message={message}
                        onValidated={formData => subscribe(formData)}
                    />
                )}
             />
        </div>
    );
};

export default EmailMailchimpFormContainer;


