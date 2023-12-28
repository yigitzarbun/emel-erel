import styles from "./styles.module.scss";

const MyEducation = () => {
  return (
    <div className={styles["services-container"]}>
      <div className={styles["texts-container"]}>
        <div className={styles["text-inner-container"]}>
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
      <img src="/images/therapy_room_2.jpeg" />
    </div>
  );
};
export default MyEducation;
