import React from "react";
import SEO from "../../SEO/SEO";
import styles from "./styles.module.scss";

const About: React.FC = () => {
  return (
    <div className={styles.page}>
      <SEO title="About" />

      {/* HERO / INTRO */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.image}>
            <img src="/images/emel_erel_profile.jpeg" alt="Dr. Emel Erel" />
          </div>
          <div className={styles.text}>
            <h1>About Dr. Emel Erel</h1>
            <p>
              I am a bilingual in Turkish-English, NY and NJ licensed Clinical
              Psychologist for over 20 years of clinical experience in working
              with Adolescents (14+), Adults, and Couples struggling with
              various emotional difficulties. I am predominantly trained in
              psychodynamic/psychoanalytic frame work which determines the way I
              approach in understanding the psychological problems and the mind.
            </p>
            <p>
              I believe I am effective in developing strong working alliances
              with my patients so that therapy experience can lead to emotional
              growth and change. In fact, the process of building a unique
              relationship and creating a new experience together with my
              patients, making a change in their lives is what makes this work
              rewarding for me.
            </p>
          </div>
        </div>
      </section>

      {/* APPROACH / PHILOSOPHY */}
      <section className={styles.approach}>
        <h2>My Approach</h2>
        <p>
          Grounded in psychodynamic and psychoanalytic frameworks, I help
          patients explore patterns, emotions, and relationships to achieve
          meaningful emotional growth.
        </p>
        <p>
          Therapy is a collaborative process where each session fosters insight,
          understanding, and the ability to create lasting change.
        </p>
      </section>

      {/* EDUCATION & CREDENTIALS */}
      <section className={styles.education}>
        <h2>Education & Credentials</h2>
        <div className={styles.grid}>
          <div className={styles.card}>
            NYU Postdoctoral Program in Psychotherapy and
            Psychoanalysis-Candidate
          </div>
          <div className={styles.card}>
            Ferkauf Graduate School of Psychology Psy.D. in Clinical Psychology
          </div>
          <div className={styles.card}>
            Teachers College, Columbia University Ed.M in School Psychology
          </div>
          <div className={styles.card}>
            Bogazici University B.A. Double Major in Psychology and
            Guidance-Counseling, Istanbul, Turkey
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
