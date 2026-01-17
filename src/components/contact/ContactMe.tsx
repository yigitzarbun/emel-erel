import { useEffect, useState } from "react";
import { MdPhone, MdOutlineEmail } from "react-icons/md";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import styles from "./styles.module.scss";

type FormValues = {
  fname: string;
  lname: string;
  email: string;
  message: string;
};

const ContactMe = () => {
  return (
    <div className={styles["home-contact-container"]}>
      <div className={styles["text-outer-container"]}>
        <div className={styles["text-inner-container"]}>
          <img
            src="/images/therapy_room_2.jpeg"
            alt="emel-erel-therapy-room-picutre"
            className={styles["profile-picture"]}
          />
          <h3 className={styles.title}>Contact Info</h3>
          <p>
            To schedule an appointment or to obtain additional information
            please call or email me:
          </p>
          <div className={styles["contact-container"]}>
            <div className={styles.contact}>
              <MdOutlineEmail />
              <a href="mailto:emelerel@gmail.com">emelerel@gmail.com</a>
            </div>
            <div className={styles.contact}>
              <MdPhone />
              <a href="tel:646-326-6814">646-326-6814</a>
            </div>
          </div>
          <div className={styles.office}>
            <h3>Office Address:</h3>
            <address>
              306 Washington Street, Suite 1207 Hoboken, NJ 07030
            </address>
          </div>
          <h5>
            **Please DO NOT include confidential or private information
            regarding your health condition in your messages.
          </h5>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
