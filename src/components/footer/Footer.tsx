import { NavLink, Link } from "react-router-dom";
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
          <NavLink
            to={Paths.ABOUT}
            className={({ isActive }) =>
              isActive
                ? `${styles["active-nav-link"]}`
                : `${styles["nav-link"]}`
            }
          >
            ABOUT
          </NavLink>
          <NavLink
            to={Paths.PHILOSOPHY}
            className={({ isActive }) =>
              isActive
                ? `${styles["active-nav-link"]}`
                : `${styles["nav-link"]}`
            }
          >
            PHILOSOPHY
          </NavLink>
          <NavLink
            to={Paths.SERVICES}
            className={({ isActive }) =>
              isActive
                ? `${styles["active-nav-link"]}`
                : `${styles["nav-link"]}`
            }
          >
            SERVICES
          </NavLink>
          <NavLink
            to={Paths.EDUCATION}
            className={({ isActive }) =>
              isActive
                ? `${styles["active-nav-link"]}`
                : `${styles["nav-link"]}`
            }
          >
            EDUCATION
          </NavLink>
          <NavLink
            to={Paths.SPECIALIZATIONS}
            className={({ isActive }) =>
              isActive
                ? `${styles["active-nav-link"]}`
                : `${styles["nav-link"]}`
            }
          >
            SPECIALIZATIONS
          </NavLink>
          <NavLink
            to={Paths.PRACTICE_INFO}
            className={({ isActive }) =>
              isActive
                ? `${styles["active-nav-link"]}`
                : `${styles["nav-link"]}`
            }
          >
            PRACTICE INFO
          </NavLink>
          <NavLink
            to={Paths.CONTACT}
            className={({ isActive }) =>
              isActive
                ? `${styles["active-nav-link"]}`
                : `${styles["nav-link"]}`
            }
          >
            CONTACT
          </NavLink>
        </nav>
        <div className={styles["contact-container"]}>
          <div className={styles.contact}>
            <MdOutlineEmail />
            <a href="mailto:emelerel@gmail.com">emelerel@gmail.com</a>
          </div>
          <div className={styles.contact}>
            <MdPhone />
            <a href="tel:646-326-6814">646-326-6814</a>
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
