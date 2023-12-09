import { Link, NavLink } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { MdPhone, MdOutlineEmail } from "react-icons/md";
import { FaAlignJustify } from "react-icons/fa6";

import styles from "./styles.module.scss";
import Paths from "../../routing/Paths";
import { useState } from "react";
import MenuModal from "./menu-modal/MenuModal";

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

  return (
    <div className={styles["header-container"]}>
      {ctaVisible && (
        <div className={styles["cta-container"]}>
          <p>Call or email Emel L. Erel, Psy.D. now to book an appointment</p>
          <div className={styles["contact-container"]}>
            <div className={styles.contact}>
              <MdOutlineEmail className={styles.icon} />
              <a href="mailto: emelerel@gmail.com">emelerel@gmail.com</a>
            </div>
            <div className={styles.contact}>
              <MdPhone className={styles.icon} />
              <a href="tel:+4733378901">(201) 581-3395</a>
            </div>
          </div>
          <Link to={Paths.CONTACT} className={styles["cta-button"]}>
            BOOK AN APPOINTMENT
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
          <h6>NY and NJ licensed psychologist </h6>
        </Link>
        <FaAlignJustify className={styles.menu} onClick={handleOpenModal} />
      </div>
      <div className={styles["header-nav-container"]}>
        <nav className={styles.nav}>
          <NavLink
            to={Paths.HOME}
            className={({ isActive }) =>
              isActive
                ? `${styles["active-nav-link"]}`
                : `${styles["nav-link"]}`
            }
          >
            HOME
          </NavLink>
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
            to={Paths.ORIENTATION}
            className={({ isActive }) =>
              isActive
                ? `${styles["active-nav-link"]}`
                : `${styles["nav-link"]}`
            }
          >
            ORIENTATION
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
          <NavLink to={Paths.CONTACT} className={styles["contact-link"]}>
            CONTACT
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Header;
