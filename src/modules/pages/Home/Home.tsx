import React from "react";
import SEO from "../../SEO/SEO";
import styles from "./styles.module.scss";

const Home: React.FC = () => {
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
            <h1>Welcome!</h1>

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
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
