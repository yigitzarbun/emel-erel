import styles from "./styles.module.scss";

const MyEducation = () => {
  return (
    <div className={styles["services-container"]}>
      <div className={styles["texts-container"]}>
        <div className={styles["text-inner-container"]}>
          <img src="/images/img1.jpg" alt="abstract-painting" />
          <h3 className={styles.title}>Educational Background</h3>
          <ul>
            <li>
              NYU Postdoctoral Program in Psychotherapy and
              Psychoanalysis-Candidate
            </li>
            <li>
              Ferkauf Graduate School of Psychology Psy.D. in Clinical
              Psychology
            </li>
            <li>
              Teachers College, Columbia University Ed.M in School Psychology
            </li>
            <li>
              Bogazici University B.A. Double Major in Psychology and
              Guidance-Counseling, Istanbul, Turkey
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default MyEducation;
