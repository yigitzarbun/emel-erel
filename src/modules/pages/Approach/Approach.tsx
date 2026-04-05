import React from "react";
import SEO from "../../SEO/SEO";
import styles from "./styles.module.scss";

const Approach: React.FC = () => {
  return (
    <div className={styles.page}>
      <SEO title="Approach" />

      {/* HERO / INTRO */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.image}>
            <img src="/images/therapy_room_3.jpeg" alt="Dr. Emel Erel" />
          </div>
          <div className={styles.text}>
            <h1>My Style & Psychoanalytic Approach</h1>
            <p>
              We all have life stories...Our early interactions with our
              caregivers, siblings, peers, the home environments, the larger
              cultures we grow up in all play crucial roles in shaping our
              personalities. However, sometimes these early life experiences can
              be difficult, stressful or simply not optimal and impact us
              adversely. Most of the time, the impact of these types of
              experiences manifest themselves in the form of anxiety,
              depression, low self-esteem, relationship difficulties (to name a
              few) later in life. However, ways we devised, learned to cope with
              these difficult moments as children have to be amended or replaced
              with more age appropriate and effective strategies as we grow up.
              This is when a person can benefit from talking to a trained
              clinician to understand the causes of their difficulties,
              reexamine the patterns they repeat, understand their coping styles
              and start taking steps towards making changes, and building a more
              satisfactory and fulfilling lives.
            </p>
          </div>
        </div>
      </section>

      {/* APPROACH / PHILOSOPHY */}
      <section className={styles.approach}>
        <p>
          Based on this understanding, the type of talk therapy that I provide
          aims to initially build a trusting relationship, a collaborative work
          with my patients to help them gain a better understanding of the
          impact of these early, formative experiences and examine how the past
          can still be alive in the present. Together, we bring these deeply
          buried memories, thoughts, feelings, wishes, and yearnings to the
          surface and understand their impact on our current behaviors.
        </p>
        <p>
          To summarize, my approach to therapy aims for deeper, structural
          change not only symptom reduction.
        </p>
      </section>

      {/* EDUCATION & CREDENTIALS */}
      <section className={styles.education}>
        <h2>What it aims for:</h2>
        <div className={styles.grid}>
          <div className={styles.card}>Greater self-awareness</div>
          <div className={styles.card}>
            More flexible ways of relating to others{" "}
          </div>
          <div className={styles.card}>
            Reduction of repetitive, self-defeating patterns{" "}
          </div>
          <div className={styles.card}>
            Increased capacity to tolerate emotions
          </div>
        </div>
      </section>

      <section className={styles.education}>
        <h2>What it feels like in practice:</h2>
        <div className={styles.grid}>
          <div className={styles.card}>Open-ended and exploratory</div>
          <div className={styles.card}>Often longer-term</div>
          <div className={styles.card}>
            Focuses as much on how you relate (including to the therapist) as on
            what you talk about
          </div>
        </div>
      </section>
    </div>
  );
};

export default Approach;
