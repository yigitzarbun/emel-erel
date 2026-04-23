import React from "react";
import SEO from "../../SEO/SEO";
import styles from "./styles.module.scss";

const Policy: React.FC = () => {
  return (
    <div className={styles.page}>
      <SEO title="Policy" />

      {/* HERO / INTRO */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.image}>
            <img src="/images/therapy_room.jpeg" alt="Dr. Emel Erel" />
          </div>
          <div className={styles.text}>
            <h1>My Policy</h1>
            <h3>Meetings:</h3>
            <p>
              My services are by appointment only. I normally conduct an
              evaluation that will last from 2 to 4 sessions. During this time,
              we can both decide if I am the best person to provide the services
              you need in order to meet your goals. I will usually schedule one
              45-minute session per week (for individual therapy) or one
              75-minute per week (for couples therapy) at a time we agree on,
              although sometimes sessions may be more frequent. Due to the
              nature of the structure of my practice, I must adhere firmly to
              time guidelines. As such, if you are late for a scheduled session,
              it will end at its regularly scheduled time. If I am late for a
              session, I will make up the lost time.
            </p>
            <h3>Cancellation</h3>
            <p>
              It is important for you to understand that your appointment time
              is reserved exclusively for you. As such, you are financially
              responsible for your appointment. Should you not be able to attend
              a session for any reason and notify me 24 hours in advance,
              another appointment may be scheduled as a makeup session,
              depending on our schedules. You will be charged for the makeup
              session and not for the original appointment. In some cases,
              should my schedule permit, a tele-health session may substitute
              for your original appointment. If for some reason, there is no
              available time, or if your schedule does not permit a makeup
              session, or if you do not notify me in advance, you will be
              charged for the original appointment.
            </p>
            <br />
            <br />
            <h3>Payments</h3>
            <p>Cash, checks, Venmo and Zelle are accepted forms of payment.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Policy;
