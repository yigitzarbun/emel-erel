import Modal from "react-modal";

import { NavLink, useNavigate } from "react-router-dom";

import { RxCross2 } from "react-icons/rx";

import Paths from "../../../routing/Paths";

import styles from "./styles.module.scss";

interface MenuModalProps {
  isModalOpen: boolean;
  closeModal: () => void;
}

const MenuModal = ({ isModalOpen, closeModal }: MenuModalProps) => {
  const navigate = useNavigate();

  const handleNavigate = (value: string) => {
    navigate(Paths[value]);
    closeModal();
  };
  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      className={styles.modal}
    >
      <RxCross2 onClick={closeModal} className={styles.close} />
      <nav>
        <NavLink
          to={Paths.HOME}
          onClick={() => handleNavigate("HOME")}
          className={({ isActive }) =>
            isActive ? `${styles["active-nav-link"]}` : `${styles["nav-link"]}`
          }
        >
          HOME
        </NavLink>
        <NavLink
          to={Paths.ABOUT}
          onClick={() => handleNavigate("ABOUT")}
          className={({ isActive }) =>
            isActive ? `${styles["active-nav-link"]}` : `${styles["nav-link"]}`
          }
        >
          ABOUT
        </NavLink>
        <NavLink
          to={Paths.PHILOSOPHY}
          onClick={() => handleNavigate("PHILOSOPHY")}
          className={({ isActive }) =>
            isActive ? `${styles["active-nav-link"]}` : `${styles["nav-link"]}`
          }
        >
          PHILOSOPHY
        </NavLink>
        <NavLink
          to={Paths.SERVICES}
          onClick={() => handleNavigate("SERVICES")}
          className={({ isActive }) =>
            isActive ? `${styles["active-nav-link"]}` : `${styles["nav-link"]}`
          }
        >
          SERVICES
        </NavLink>
        <NavLink
          to={Paths.EDUCATION}
          onClick={() => handleNavigate("EDUCATION")}
          className={({ isActive }) =>
            isActive ? `${styles["active-nav-link"]}` : `${styles["nav-link"]}`
          }
        >
          EDUCATION
        </NavLink>
        <NavLink
          to={Paths.SPECIALIZATIONS}
          onClick={() => handleNavigate("SPECIALIZATIONS")}
          className={({ isActive }) =>
            isActive ? `${styles["active-nav-link"]}` : `${styles["nav-link"]}`
          }
        >
          SPECIALIZATIONS
        </NavLink>
        <NavLink
          to={Paths.PRACTICE_INFO}
          onClick={() => handleNavigate("PRACTICE_INFO")}
          className={({ isActive }) =>
            isActive ? `${styles["active-nav-link"]}` : `${styles["nav-link"]}`
          }
        >
          PRACTICE INFO
        </NavLink>
        <NavLink
          to={Paths.CONTACT}
          onClick={() => handleNavigate("CONTACT")}
          className={({ isActive }) =>
            isActive ? `${styles["active-nav-link"]}` : `${styles["nav-link"]}`
          }
        >
          CONTACT
        </NavLink>
      </nav>
    </Modal>
  );
};
export default MenuModal;
