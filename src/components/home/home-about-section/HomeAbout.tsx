import { Link } from "react-router-dom";

import styles from "./styles.module.scss";
import Paths from "../../../routing/Paths";

const HomeAbout = () => {
  return (
    <div className={styles["home-about-container"]}>
      <div className={styles["text-outer-container"]}>
        <div className={styles["text-inner-container"]}>
          <h3 className={styles.title}>Hi! I'm Emel,</h3>
          <p>
            I am a NY and NJ licensed psychologist with 15+ years of clinical
            experience in treating adults of all ages and adolescents (14 years
            old and up) struggling with various emotional difficulties.{" "}
          </p>
          <p>
            Throughout my career in Psychology, I have worked in various
            settings including inpatient and outpatient clinics, schools, and
            residential facilities providing individual, group, and family
            therapies, and psychological assessments. These experiences not only
            allowed me to serve diverse populations who were in need of
            comprehensive services but also prepared me to understand a range of
            psychological difficulties and the intertwine of body-mind as well
            as race, sex, culture.
          </p>
          <Link to={Paths.CONTACT} className={styles["cta-button"]}>
            BOOK AN APPOINTMENT
          </Link>
        </div>
      </div>
      <img
        src="/images/emel_erel_profile.jpeg"
        alt="emel-erel-profile-picutre"
        className={styles["profile-picture"]}
      />
    </div>
  );
};

export default HomeAbout;
