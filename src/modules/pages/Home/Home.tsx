import React from "react";
import SEO from "../../SEO/SEO";
import styles from "./styles.module.scss";
import Paths from "../../../routing/Paths";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const handleNavigateToContact = () => {
    navigate(Paths.CONTACT);
  };
  return (
    <div className={styles.page}>
      <SEO title="Home" />

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.image}>
            <img src="/images/lotus.jpg" alt="Dr. Emel Erel" />
          </div>

          <div className={styles.text}>
            <h1>A Space to Understand Yourself</h1>

            <p>
              Thank you for taking the time to visit my website. Here, you will
              find some information about my practice, qualifications, clinical
              experience and areas of specialization.
            </p>

            <p>
              I believe choosing a skilled and an experienced psychotherapist is
              a crucial initial step prior to starting one’s journey towards
              improving the quality of their emotional well-being. So, please
              take the time to explore my website and feel free to contact me
              with any questions.
            </p>

            <button
              onClick={handleNavigateToContact}
              className={styles.primaryButton}
            >
              Book Consultation
            </button>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className={styles.context}>
        <div className={styles.inner}>
          <p>
            I work with adolescents, adults, and couples navigating emotional
            difficulties, relationships, and life transitions. Therapy offers a
            space to better understand yourself, your patterns, and your
            relationships.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <h2>Begin the Process</h2>
        <p>
          If you are considering therapy, you are welcome to reach out for an
          initial consultation.
        </p>
        <button
          onClick={handleNavigateToContact}
          className={styles.primaryButton}
        >
          Contact
        </button>
      </section>
    </div>
  );
};

export default Home;
