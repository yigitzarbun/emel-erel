import React from "react";
import styles from "./styles.module.scss";

const Services: React.FC = () => {
  return (
    <div className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.image}>
            <img src="/images/therapy_room_2.jpeg" alt="Therapy session" />
          </div>

          <div className={styles.text}>
            <h1>Services & Specializations</h1>
            <h3>Services provided:</h3>
            <ul>
              <li>Individual Therapy for Adolescents and Adults</li>
              <li>
                Individual Therapy for Perinatal Mood Disorders, Loss and Grief
              </li>
              <li>Couples Therapy</li>
              <li>Family Therapy</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className={styles.approach}></section>

      {/* SPECIALIZATIONS */}
      <section className={styles.education}>
        <h2>My Clinical Interests and Experience Areas:</h2>

        <div className={styles.grid}>
          <div className={styles.card}>Anxiety</div>
          <div className={styles.card}>
            Depression (Chronic, Bipolar and Post-Partum)
          </div>
          <div className={styles.card}>Self-esteem issues</div>
          <div className={styles.card}>Mood Regulation Difficulties</div>
          <div className={styles.card}>Stress Management</div>
          <div className={styles.card}>Interpersonal difficulties</div>
          <div className={styles.card}>Couples / Marital Therapy</div>
          <div className={styles.card}>Family Therapy & Parenting Styles</div>
          <div className={styles.card}>Perinatal Mood Disorders</div>
          <div className={styles.card}>Infertility Counseling</div>
          <div className={styles.card}>Trauma</div>
          <div className={styles.card}>Psychosomatic Disorders</div>
          <div className={styles.card}>Psychosis</div>
          <div className={styles.card}>Bicultural / Minority Experience</div>
        </div>
      </section>
    </div>
  );
};

export default Services;
