import styles from "./styles.module.scss";

export const MyServices = () => {
  return (
    <div className={styles["services-container"]}>
      <div className={styles["texts-container"]}>
        <div className={styles["text-inner-container"]}>
          <img src="/images/therapy_room.jpeg" alt="therapy-room-picture" />
          <h3 className={styles.title}>Services Provided</h3>
          <ul>
            <li>Individual Therapy for Adolescents and Adults</li>
            <li>
              Individual Therapy for Perinatal Mood Disorders, Loss and Grief
            </li>
            <li>Couples Therapy</li>
            <li>Family Therapy</li>
          </ul>
        </div>
        <div className={styles["text-inner-container"]}>
          <h3 className={styles.title}>
            My Clinical Interests and Experience Areas
          </h3>
          <ul>
            <li>Anxiety (Generalized Anxiety, Separation Anxiety)</li>
            <li>Depression (Chronic, Bipolar and Post-Partum)</li>
            <li>Self-esteem issues</li>
            <li>Mood Regulation Difficulties</li>
            <li>Stress Management</li>
            <li>
              Interpersonal difficulties (peers, co-workers, family members)
            </li>
            <li>Couples/Marital Therapy</li>
            <li>Family Therapy, Parenting Styles</li>
            <li>
              Perinatal Mood Disorders (Post-Partum Depression, Anxiety, Loss
              and Grief)
            </li>
            <li>Infertility Counseling</li>
            <li>
              Trauma (adult survivors of sexual abuse, early childhood
              relational and social trauma)
            </li>
            <li>
              Psychosomatic disorders (emotional difficulties triggered by
              physical symptoms)
            </li>
            <li>Psychosis (schizophrenia, bipolar disorder)</li>
            <li>
              Bicultural/minority individuals (psychological impact of
              immigration)
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
