import { Link } from "react-router-dom";
import { MdPhone, MdOutlineEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

import Paths from "../../routing/Paths";
import styles from "./styles.module.scss";

const Footer = () => {
  return (
    <div className={styles["footer-container"]}>
      <hr />
      <div className={styles["nav-container"]}>
        <Link to={Paths.HOME} className={styles["logo-container"]}>
          <div>
            <h2 className={styles.logo}>Emel L. Erel, Psy.D.</h2>
            <p>NY and NJ licensed psychologist</p>
          </div>
        </Link>
        <nav className={styles.nav}>
          <Link to={Paths.ABOUT} className={styles.link}>
            ABOUT
          </Link>
          <Link to={Paths.PHILOSOPHY} className={styles.link}>
            PHILOSOPHY
          </Link>
          <Link to={Paths.SERVICES} className={styles.link}>
            SERVICES
          </Link>
          <Link to={Paths.EDUCATION} className={styles.link}>
            EDUCATION
          </Link>
          <Link to={Paths.SPECIALIZATIONS} className={styles.link}>
            SPECIALIZATIONS
          </Link>
          <Link to={Paths.PRACTICE_INFO} className={styles.link}>
            PRACTICE INFO
          </Link>
          <Link to={Paths.CONTACT} className={styles.link}>
            CONTACT
          </Link>
        </nav>
        <div className={styles["contact-container"]}>
          <div className={styles.contact}>
            <MdOutlineEmail />
            <a href="mailto: emelerel@gmail.com">emelerel@gmail.com</a>
          </div>
          <div className={styles.contact}>
            <MdPhone />
            <a href="tel:+4733378901">(201) 581-3395</a>
          </div>
          <Link to={Paths.CONTACT} className={styles["cta-button"]}>
            BOOK AN APPOINTMENT
          </Link>
        </div>
        <div className={styles["address-container"]}>
          <FaLocationDot />
          <address>306 Washington Street Suite 207 Hoboken, NJ 07030</address>
        </div>
      </div>
      <div>
        <p className={styles.copyright}>
          Copyright © 2023 Emel L. Erel, All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
