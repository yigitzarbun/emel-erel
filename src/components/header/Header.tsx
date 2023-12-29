import { Link, NavLink } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { MdPhone, MdOutlineEmail } from "react-icons/md";
import { FaAlignJustify } from "react-icons/fa6";
import { useState, useEffect } from "react";
import axios from "axios";
import MenuModal from "./menu-modal/MenuModal";

import styles from "./styles.module.scss";
import Paths from "../../routing/Paths";

const Header = () => {
  const [ctaVisible, setCtaVisible] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleCta = () => {
    setCtaVisible(false);
  };

  const [ctaText, setCtaText] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [buttonText, setButtonText] = useState("");

  useEffect(() => {
    const fetchTitle = async () => {
      try {
        const response = await axios.get(
          `https://cdn.contentful.com/spaces/tqqtse60ni6t/entries?content_type=hero&access_token=mSdeKn1HOhTazeXKcTMSnBtkQ5cttKCuDYRq28CkiSk`
        );
        for (let i = 0; i < response.data.items.length; i++) {
          if (response.data.items[i].sys.id === "4S8lJMrnvyyeffG2whtlQP") {
            setCtaText(response.data.items[i].fields.title);
          } else if (
            response.data.items[i].sys.id === "1MBGunnQTjzOJ2JjdHUROS"
          ) {
            setContactEmail(response.data.items[i].fields.title);
          } else if (
            response.data.items[i].sys.id === "1D069TJl77vWKSkxHT1Owc"
          ) {
            setContactPhone(response.data.items[i].fields.title);
          } else if (
            response.data.items[i].sys.id === "UThP5yhKwG1GiUMqXr7L1"
          ) {
            setButtonText(response.data.items[i].fields.title);
          }
        }
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      }
    };
    fetchTitle();
  }, []);
  return (
    <div className={styles["header-container"]}>
      {ctaVisible && (
        <div className={styles["cta-container"]}>
          <p>{ctaText}</p>
          <div className={styles["contact-container"]}>
            <div className={styles.contact}>
              <MdOutlineEmail className={styles.icon} />
              <a href="mailto: emelerel@gmail.com">{contactEmail}</a>
            </div>
            <div className={styles.contact}>
              <MdPhone className={styles.icon} />
              <a href="tel:+6463266814">{contactPhone}</a>
            </div>
          </div>
          <Link to={Paths.CONTACT} className={styles["cta-button"]}>
            {buttonText}
          </Link>
          <AiOutlineClose
            onClick={handleCta}
            className={styles["close-icon"]}
          />
        </div>
      )}
      {isModalOpen && (
        <MenuModal isModalOpen={isModalOpen} closeModal={closeModal} />
      )}

      <div className={styles["logo-container"]}>
        <Link to={Paths.HOME} className={styles.logo}>
          <h2>Emel L. Erel, Psy.D.</h2>
          <h6>NY and NJ Licensed Psychologist </h6>
          <h5>PSYCHOTHERAPY FOR ADULTS, ADOLESCENTS AND COUPLES</h5>
        </Link>
        <FaAlignJustify className={styles.menu} onClick={handleOpenModal} />
      </div>
      <div className={styles["header-nav-container"]}>
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
          <NavLink to={Paths.CONTACT} className={styles["contact-link"]}>
            CONTACT
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Header;
