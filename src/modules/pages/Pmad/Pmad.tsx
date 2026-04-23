import React from "react";
import SEO from "../../SEO/SEO";
import styles from "./styles.module.scss";

const Pmad: React.FC = () => {
  return (
    <div className={styles.page}>
      <SEO title="Pmad" />

      {/* HERO / INTRO */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.image}>
            <img src="/images/img1.jpg" alt="Dr. Emel Erel" />
          </div>
          <div className={styles.text}>
            <h1>Perinatal Mood & Anxiety Disorders</h1>
            <p>
              Starting a family can be an exciting and celebratory time, yet it
              is also often accompanied by significant stress. During pregnancy,
              a woman undergoes profound physiological changes; however,
              pregnancy is not solely a biological process. It is equally a
              psychological and social experience.
            </p>
            <p>
              This period is often marked by a natural preoccupation with
              thoughts and feelings about the developing baby, the transition
              into a new social role, shifts in identity, changes in body image,
              and the meaning of pregnancy itself. In addition, one’s own early
              experiences with caregivers, along with broader societal and
              cultural expectations surrounding motherhood, can make this a
              particularly complex and emotionally charged time.
            </p>
            <p>
              Research suggests that approximately 20% of women and their
              families experience perinatal mood and anxiety disorders (PMADs).
              When unrecognized or untreated, these conditions can have
              significant and lasting effects on the mental, physical, and
              emotional well-being of the mother, child, and family as a whole.
            </p>
            <p>
              For this reason, I believe in the careful assessment and timely
              treatment of PMADs as essential in supporting healthy development
              and psychological functioning across the family system.
            </p>
          </div>
        </div>
      </section>

      {/* EDUCATION & CREDENTIALS */}
      <section className={styles.education}>
        <h2>What are PMADs?</h2>
        <div className={styles.grid}>
          <div className={styles.card}>Major Depressive Disorder</div>
          <div className={styles.card}>Post-Partum Depression</div>
          <div className={styles.card}>Generalized Anxiety Disorder</div>
          <div className={styles.card}>Obsessive-Compulsive Disorder</div>
          <div className={styles.card}>Panic Disorder</div>
          <div className={styles.card}>
            Post-Traumatic Stress Disorder (PTSD)
          </div>
          <div className={styles.card}>Post-Partum Psychosis</div>
        </div>
      </section>
    </div>
  );
};

export default Pmad;
