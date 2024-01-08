import { Link } from "react-router-dom";

import styles from "./styles.module.scss";
import Paths from "../../../routing/Paths";

export const Hero = () => {
  return (
    <div className={styles["hero-container"]}>
      <div className={styles["texts-outer-container"]}>
        <div className={styles["texts-inner-container"]}>
          <h1 className={styles.title}>Welcome!</h1>
          <p>
            Thank you for taking the time to visit my website. Here, you will
            find some information about my practice, qualifications, clinical
            experience and areas of specialization.
          </p>
          <p>
            I believe choosing a skilled and an experienced psychotherapist is a
            crucial initial step prior to starting one’s journey towards
            improving the quality of their emotional well-being. So, please take
            the time to explore my website and feel free to contact me with any
            questions.
          </p>
          <Link to={Paths.CONTACT} className={styles["cta-button"]}>
            CONTACT ME
          </Link>
        </div>
      </div>
      <img src="/images/therapy_room_3.jpeg" alt="therapy-room" />
    </div>
  );
};

export default Hero;
