import styles from "./styles.module.scss";

const MyPhilosophy = () => {
  return (
    <div className={styles["home-about-container"]}>
      <div className={styles["text-outer-container"]}>
        <div className={styles["text-inner-container"]}>
          <h3 className={styles.title}>My Philosophy</h3>
          <p>
            We all have life stories...Our early interactions with our
            caregivers, siblings, peers, the home environments, the larger
            cultures we grow up in all play crucial roles in shaping our
            personalities. However, sometimes these early life experiences can
            be difficult, stressful or simply not optimal and impact us
            adversely. Most of the time, the impact of these types of
            experiences manifest themselves in the form of anxiety, depression,
            low self-esteem, relationship difficulties (to name a few) later in
            life. However, ways we devised, learned to cope with these difficult
            moments as children have to be amended or replaced with more age
            appropriate and effective strategies as we grow up. This is when a
            person can benefit from talking to a trained clinician to understand
            the causes of their difficulties, reexamine the patterns they
            repeat, understand their coping styles and start taking steps
            towards making changes, and building a more satisfactory and
            fulfilling lives.
          </p>
          <p>
            Based on this understanding, the type of talk therapy that I provide
            aims to initially build a trusting relationship, a collaborative
            work with my patients to help them gain a better understanding of
            the impact of these early, formative experiences and examine how the
            past can still be alive in the present. Together, we bring these
            deeply buried memories, thoughts, feelings, wishes, and yearnings to
            the surface and understand their impact on our current behaviors.
          </p>
        </div>
      </div>
      <img
        src="/images/img4.jpg"
        alt="abstract-picutre"
        className={styles["profile-picture"]}
      />
    </div>
  );
};
export default MyPhilosophy;
