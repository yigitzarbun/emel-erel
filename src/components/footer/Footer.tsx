import React from "react";
import styles from "./styles.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        {/* Brand Section */}
        <div>
          <h2>Emel L. Erel, Psy.D.</h2>
          <p>Licensed Psychologist (NY & NJ)</p>
        </div>

        {/* Contact Section */}
        <div className={styles["contact-container"]}>
          <a href="mailto:emelerel@gmail.com">emelerel@gmail.com</a>
          <a href="tel:646-326-6814">646-326-6814</a>
        </div>

        {/* Address Section */}
        <div className={styles["address-container"]}>
          <address>
            306 Washington Street
            <br />
            Suite 207
            <br />
            Hoboken, NJ 07030
          </address>
        </div>
      </div>

      <p className={styles.copyright}>
        Copyright © {new Date().getFullYear()} Emel L. Erel, All Rights Reserved
      </p>
    </footer>
  );
};
export default Footer;
