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
  console.log(isModalOpen);
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
          Home
        </NavLink>
        <NavLink
          to={Paths.ABOUT}
          onClick={() => handleNavigate("ABOUT")}
          className={({ isActive }) =>
            isActive ? `${styles["active-nav-link"]}` : `${styles["nav-link"]}`
          }
        >
          About
        </NavLink>
        <NavLink
          to={Paths.SERVICES}
          onClick={() => handleNavigate("SERVICES")}
          className={({ isActive }) =>
            isActive ? `${styles["active-nav-link"]}` : `${styles["nav-link"]}`
          }
        >
          Services
        </NavLink>
        <NavLink
          to={Paths.ORIENTATION}
          onClick={() => handleNavigate("ORIENTATION")}
          className={({ isActive }) =>
            isActive ? `${styles["active-nav-link"]}` : `${styles["nav-link"]}`
          }
        >
          Orientation
        </NavLink>
        <NavLink
          to={Paths.CONTACT}
          onClick={() => handleNavigate("CONTACT")}
          className={({ isActive }) =>
            isActive ? `${styles["active-nav-link"]}` : `${styles["nav-link"]}`
          }
        >
          Contact
        </NavLink>
      </nav>
    </Modal>
  );
};
export default MenuModal;
