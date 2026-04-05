import React from "react";
import SEO from "../../SEO/SEO";
import styles from "./styles.module.scss";

const Contact: React.FC = () => {
  return (
    <div className={styles.page}>
      <SEO title="Contact" />

      {/* HERO / INTRO */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.image}>
            <img src="/images/hero.jpg" alt="Dr. Emel Erel" />
          </div>
          <div className={styles.text}>
            <h1>Contact</h1>
            <p>
              To schedule an appointment or to obtain additional information
              please call: <strong>646-326-6814</strong> or you can also e-mail
              me at
              <strong> emelerel@gmail.com</strong>
            </p>
            <br />
            <p>
              <strong>
                **Please DO NOT include confidential or private information
                regarding your health condition in your messages.
              </strong>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
