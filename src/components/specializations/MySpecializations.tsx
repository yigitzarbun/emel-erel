import styles from "./styles.module.scss";

const MySpecializations = () => {
  return (
    <div className={styles["services-container"]}>
      <div className={styles["texts-container"]}>
        <div className={styles["text-inner-container"]}>
          <img src="/images/img3.jpg" alt="abstract-picture" />
          <h3 className={styles.title}>Couples Therapy</h3>
          <p>
            When working with couples, I am always intrigued by the ways people
            make particular partner choices. What drew them together to form a
            couple? Why did he/ she choose this person rather than someone else
            as a partner? What kind of emotional needs, yearnings and/or
            conflicts are expressed in this relationship? Why are they stuck in
            an unhappy pattern? Are they unconsciously repeating core emotional
            problems, replaying early conflicts in their lives?
          </p>
          <p>
            Psychoanalytically informed couples therapy can offer a way of
            looking more critically at how you interact with your partner and
            how this affects both of you. It can help couples understand how and
            why each person plays a role in creating a specific pattern even
            though it makes them unhappy. As a result, couples therapy can open
            up new ways of thinking about each other and the relationship...
          </p>
          <h4 className={styles.subtitle}>Issues that I work with include:</h4>
          <ul>
            <li>communication difficulties, disagreements</li>
            <li>feeling “stuck” with patterns of behavior</li>
            <li>infidelity</li>
            <li>becoming parents</li>
            <li>other major life events</li>
            <li>sexual problems</li>
          </ul>
        </div>

        <div className={styles["text-inner-container"]}>
          <h3 className={styles.title}>Perinatal Mood and Anxiety (PMAD)</h3>
          <p>
            Starting a family can be an exciting, celebratory but at the same
            time a stressful time for many of us. During pregnancy, a woman
            undergoes many physiological changes. However, pregnancy is not only
            a biological event. It is also a psychological and social event. In
            other words, it is a period when a woman is naturally preoccupied by
            thoughts and feelings around having a baby, a new social role,
            identity change, reactions to body image, and pregnancy itself. Our
            parents’ experiences, societal, cultural messages/expectations about
            pregnancy make this crucial time in a woman's life a complex one.
          </p>
          <p>
            Research show that for approximately 20% of these women and their
            families can develop PMADs which, if unrecognized and unaddressed,
            can have profound adverse effects on the women, children, and their
            family’s mental, physical and emotional health. Therefore,
            assessment and treatment of PMADs is critical to optimal
            developmental and psychological functioning of the whole family.
          </p>
          <h4 className={styles.subtitle}>What are PMADs?</h4>
          <ul>
            <li>Major Depressive Disorder</li>
            <li>Post-Partum Depression</li>
            <li>Generalized Anxiety Disorder</li>
            <li>Obsessive-Compulsive Disorder</li>
            <li>Panic Disorder</li>
            <li>Post-Traumatic Stress Disorder (PTSD)</li>
            <li>Post-Partum Psychosis</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MySpecializations;
