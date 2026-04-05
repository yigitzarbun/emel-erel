// Hero.tsx
import styles from "./styles.module.scss";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <h1>Emel L. Erel, Psy.D.</h1>
      <p className={styles.subtitle}>
        Licensed Psychologist in New York & New Jersey
      </p>
      <p className={styles.tagline}>
        Psychotherapy for adults, adolescents and couples
      </p>
    </section>
  );
};

export default Hero;
