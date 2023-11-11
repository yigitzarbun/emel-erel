import styles from "./styles.module.scss";

const MyBackground = () => {
  return (
    <div className={styles["background-container"]}>
      <div className={styles["text-outer-container"]}>
        <div className={styles["text-inner-container"]}>
          <h3 className={styles.title}>Orientation</h3>
          <p>
            We all have life stories…Our early interactions with our caregivers,
            siblings, peers, the home environments, the larger cultures we grow
            up in all play crucial roles in shaping our personalities. However,
            sometimes these early life experiences can be difficult, stressful
            or simply not optimal and impact us adversely. Most of the time, the
            impact of these types of experiences manifest themselves in the form
            of anxiety, depression, low self-esteem, relationship difficulties
            (to name a few) later in life. Ways we devised, learned to cope as
            children have to be amended or replaced with more age appropriate
            and effective strategies as we grow up.
          </p>
          <p>
            This is when a person can benefit from talking to a trained
            clinician to understand the causes of their difficulties, reexamine
            the patterns they repeat, coping styles and start taking steps
            towards making changes, and building a more satisfactory and
            fulfilling lives. Based on this understanding, the type of talk
            therapy that I provide aims to initially build a trusting
            relationship, a collaborative work with my patients to help them
            gain a better understanding of the impact of these early, formative
            experiences and examine how the past can still be alive in the
            present. Together, we bring these deeply buried memories, thoughts,
            feelings, wishes, and yearnings to the surface and understand their
            impact on our current behaviors.
          </p>
        </div>
      </div>
      <img
        src="/images/therapy_room_3.jpeg"
        alt="therapy-room-image"
        className={styles["profile-picture"]}
      />
    </div>
  );
};

export default MyBackground;
