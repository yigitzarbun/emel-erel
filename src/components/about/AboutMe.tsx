import { Link } from "react-router-dom";
import { useState } from "react";

import styles from "./styles.module.scss";
import Paths from "../../routing/Paths";

const AboutMe = () => {
  const [readMore, setReadMore] = useState(false);

  const handleReadMore = () => {
    readMore === true ? setReadMore(false) : setReadMore(true);
  };

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
          {readMore && (
            <>
              <p>
                Today, I maintain a full-time private practice serving
                Adolescents, Adults, Families and Couples from diverse ethnic
                and religious backgrounds struggling with a wide range of
                emotional difficulties including
                immigration/acculturation/adaptation issues, early traumatic
                experiences, sexual trauma, attachments disorders, relationship
                problems within family and at work, self-esteem issues, anxiety,
                depression, infertility, post-partum depression, loss, and
                grief. I believe I am effective in developing strong working
                alliances with my patients so that therapy experience can lead
                to emotional growth and change. In fact, the process of building
                a unique relationship and creating a new experience together
                with my patients, making a change in their lives is what makes
                this work rewarding for me.
              </p>
              <p>
                Besides having an active practice, I also enjoy supervising
                psychology students and serve as an Adjunct Clinical Supervisor
                for the Pace University in New York.
              </p>
              <p>
                Passionate about the work I do, I also constantly work towards
                developing and strengthening my clinical skills through
                attending workshops, seminars, classes and supervision groups.
              </p>
            </>
          )}
          <button
            onClick={handleReadMore}
            className={styles["read-more-button"]}
          >
            {readMore === true ? "Read Less" : "Read More"}
          </button>
          <Link to={Paths.CONTACT} className={styles["cta-button"]}>
            BOOK AN APPOINTMENT
          </Link>
        </div>
        <div className={styles["text-inner-container"]}>
          <h3 className={styles.title}>Education</h3>
          <ul>
            <li>
              Ferkauf Graduate School of Psychology, Psy.D. in Clinical
              Psychology
            </li>
            <li>
              Teachers College, Columbia University, Ed.M in School Psychology
            </li>
            <li>
              Bogazici University, B.A. Double Major in Psychology and
              Counseling
            </li>
          </ul>
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

export default AboutMe;
