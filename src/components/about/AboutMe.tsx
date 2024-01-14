import styles from "./styles.module.scss";

const AboutMe = () => {
  return (
    <div className={styles["home-about-container"]}>
      <div className={styles["text-outer-container"]}>
        <div className={styles["text-inner-container"]}>
          <img
            src="/images/emel_erel_profile.jpeg"
            alt="emel-erel-profile-picutre"
            className={styles["profile-picture"]}
          />
          <h3 className={styles.title}>About Me</h3>
          <p>
            I am a bilingual in Turkish-English, NY and NJ licensed Clinical
            Psychologist for over 15 years of clinical experience in working
            with Adolescents (13+), Adults, and Couples struggling with various
            emotional difficulties. I am predominantly trained in
            psychodynamic/psychoanalytic frame work which determines the way I
            approach in understanding the psychological problems and the mind.
          </p>
          <p>
            I believe I am effective in developing strong working alliances with
            my patients so that therapy experience can lead to emotional growth
            and change. In fact, the process of building a unique relationship
            and creating a new experience together with my patients, making a
            change in their lives is what makes this work rewarding for me.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
