import { NavLink, Link } from "react-router-dom";
import { MdPhone, MdOutlineEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { useState, useEffect } from "react";
import axios from "axios";

import Paths from "../../routing/Paths";
import styles from "./styles.module.scss";

const Footer = () => {
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const contentfulToken = import.meta.env.VITE_REACT_APP_CONTENTFUL_TOKEN;
  useEffect(() => {
    const fetchTitle = async () => {
      try {
        const response = await axios.get(
          `https://cdn.contentful.com/spaces/tqqtse60ni6t/entries?content_type=hero&access_token=${contentfulToken}`
        );
        for (let i = 0; i < response.data.items.length; i++) {
          if (response.data.items[i].sys.id === "1MBGunnQTjzOJ2JjdHUROS") {
            setContactEmail(response.data.items[i].fields.title);
          } else if (
            response.data.items[i].sys.id === "1D069TJl77vWKSkxHT1Owc"
          ) {
            setContactPhone(response.data.items[i].fields.title);
          }
        }
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      }
    };
    fetchTitle();
  }, []);
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
            <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
          </div>
          <div className={styles.contact}>
            <MdPhone />
            <a href={`tel:${contactPhone}`}>{contactPhone}</a>
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
