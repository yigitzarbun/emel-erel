import { useState } from "react";
import { NavLink } from "react-router-dom";
import { MdMenu, MdClose } from "react-icons/md"; // Material Design icons
import styles from "./styles.module.scss";
import Paths from "../../routing/Paths";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <div>
          <NavLink
            to={Paths.HOME}
            className={({ isActive }) =>
              isActive
                ? `${styles["logo-link"]} ${styles["logo-active"]}`
                : styles["logo-link"]
            }
          >
            Emel L. Erel, Psy.D. <br />{" "}
          </NavLink>
          <p className={styles.subtitle}>
            New Jersey & New York Licensed Psychologist
          </p>
        </div>

        <button
          className={styles.burger}
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
        >
          {isOpen ? <MdClose size={30} /> : <MdMenu size={30} />}
        </button>

        <div className={`${styles.links} ${isOpen ? styles.active : ""}`}>
          <NavLink
            to={Paths.ABOUT}
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
          >
            About
          </NavLink>
          <NavLink
            to={Paths.SERVICES}
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
          >
            Services
          </NavLink>
          <NavLink
            to={Paths.APPROACH}
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
          >
            Approach
          </NavLink>
          <NavLink
            to={Paths.POLICY}
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
          >
            Policy
          </NavLink>
          <NavLink
            to={Paths.COUPLES_THERAPY}
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
          >
            Couples Therapy
          </NavLink>
          <NavLink
            to={Paths.PMAD}
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
          >
            PMADs
          </NavLink>
          <NavLink
            to={Paths.CONTACT}
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
