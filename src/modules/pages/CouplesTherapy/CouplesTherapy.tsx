import React from "react";
import SEO from "../../SEO/SEO";
import styles from "./styles.module.scss";

const CouplesTherapy: React.FC = () => {
  return (
    <div className={styles.page}>
      <SEO title="CouplesTherapy" />

      {/* HERO / INTRO */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.image}>
            <img src="/images/img4.jpg" alt="Dr. Emel Erel" />
          </div>
          <div className={styles.text}>
            <h1>Couples Therapy</h1>
            <p>
              When working with couples, I am continually struck by the ways in
              which people come to choose particular partners. What draws two
              individuals together to form a couple? Why this person rather than
              someone else? What emotional needs, longings, and conflicts find
              expression within the relationship? And why do so many couples
              find themselves caught in painful, repetitive patterns?
            </p>
            <p>
              From a psychoanalytic perspective, such patterns are rarely
              accidental. Partners may unconsciously recreate familiar
              relational dynamics, often rooted in early developmental
              experiences. In this way, longstanding emotional conflicts and
              unmet needs can be re-enacted within the relationship, even when
              these patterns lead to dissatisfaction or distress.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.context}>
        <div className={styles.inner}>
          <p>
            Psychoanalytically informed couples therapy can offer a space to
            reflect more deeply on these dynamics. It invites partners to
            examine how each person contributes—often outside of awareness—to
            the patterns that shape their interactions. By bringing these
            processes into focus, couples can begin to understand not only what
            is happening between them, but why.
          </p>
          <p>
            This growing awareness can open the possibility for new ways of
            relating—ways that are less constrained by past experiences and more
            responsive to the realities of the present relationship.
          </p>
        </div>
      </section>

      {/* EDUCATION & CREDENTIALS */}
      <section className={styles.education}>
        <h2>Issues that I work with include:</h2>
        <div className={styles.grid}>
          <div className={styles.card}>
            Communication difficulties, disagreements
          </div>
          <div className={styles.card}>
            Feeling “stuck” with patterns of behavior
          </div>
          <div className={styles.card}>
            Other major life events (marriage/divorce, having a baby,
            starting/losing a job)
          </div>
          <div className={styles.card}>Infidelity</div>
          <div className={styles.card}>Sexual problems</div>
        </div>
      </section>
    </div>
  );
};

export default CouplesTherapy;
