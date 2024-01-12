import React, {useState, useEffect} from 'react';
import Image from "next/image";
import styles from "../styles/emailSubscribe.module.css";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import arrow from "@/instagram/insta-arrow.png";

interface CustomFormPropsType {
  status: string;
  message: string;
  onValidated: (string) => string;
}

const CustomForm = ({ status, message, onValidated }:CustomFormPropsType) => {;
  const [formData, setFormData] = useState({
    email: null,
    tags: 7075190

  });
  const changeHandler = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(()=>{
    if (status === "success") {
      clearForm();
    }

  },[status])

  const clearForm = () => {
    setFormData({
      ...formData,
      email: ""
    });
  }

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
      <div className={styles.signupHeading}>SIGN UP FOR NEWS AND UPDATES</div>
      <div className={styles.inputContainer}>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="EMAIL ADDRESS"
          value={formData.email}
          onChange={changeHandler}
          className={styles.emailInput}
        />
        <div><input type="hidden" name="tags" value="7075190"/></div>
        <button className={styles.signupBtn}>
          <Image
            src={arrow}
            alt="arrow"
            width={11.08}
            height={10.85}
            layout="fixed"
          />
        </button>
      </div>
      <div>
        {status === "success" ? (
          <div className={styles.subscribe}>
            Thank you for signing up.
          </div>
        ) : null}
        {status === "error" ? (
          <div className={styles.error}>{message}</div>
        ) : null}
      </div>
    </form>
  );
};

const EmailMailchimpFormContainer = () => {
  //const postUrl = `https://yahoo.us13.list-manage.com/subscribe/post?u=56a5a6faefa46b019dbd969e7&amp;id=c250b296eb&amp;f_id=00290ce4f0`;
  const postUrl = `${process.env.NEXT_PUBLIC_MAILCHIMP_ACTION_URL}?u=${process.env.NEXT_PUBLIC_MAILCHIMP_U_VALUE}&id=${process.env.NEXT_PUBLIC_MAILCHIMP_ID_VALUE}&amp;id=${process.env.NEXT_PUBLIC_MAILCHIMP_AMP_ID}&amp;f_id=${process.env.NEXT_PUBLIC_MAILCHIMP_AMP_F_ID}`;
  
    return (
        <div className="mc__form-container">
            <MailchimpSubscribe
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