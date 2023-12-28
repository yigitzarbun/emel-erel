import styles from "./styles.module.scss";

const MyPracticeInfo = () => {
  return (
    <div className={styles["services-container"]}>
      <div className={styles["texts-container"]}>
        <div className={styles["text-inner-container"]}>
          <h3 className={styles.title}>Rates & Insurance</h3>
          <ul>
            <li>Individual Therapy $250 per 45-minute session</li>
            <li>Couples Therapy $300 per 60-minute session</li>
          </ul>
          <h3>Therapy Insurance Information</h3>
          <p>
            Services may be covered in full or in part by your health insurance
            or employee benefit plan. Please check your coverage carefully by
            asking the following questions:
          </p>
          <ul>
            <li>Do I have mental health insurance benefits?</li>
            <li>
              How many psychotherapy sessions are included in my insurance
              benefits?
            </li>
            <li>What is my deductible and has it been met?</li>
            <li>What is my co-pay/co-insurance amount per session?</li>
            <li>Is pre-certification required by your insurance company?</li>
            <li>Is approval required from my primary care physician?</li>
          </ul>
          <h3>Reduced Fee Therapy Services</h3>
          <p>
            Reduced fee services are available on a limited basis. Currently, I
            accept AETNA insurance and all out of network insurances.
          </p>
          <h3>Payment</h3>
          <p>Cash, checks, Venmo and Zelle are accepted forms of payment.</p>
        </div>

        <div className={styles["text-inner-container"]}>
          <h3 className={styles.title}>Cancellation Policy</h3>
          <p>
            If you know more than 48 hours in advance that you cannot keep an
            appointment, please let me know and I will try to reschedule it to
            another time in the week. If you do not show up for your scheduled
            therapy appointment you will be required to pay the full cost of the
            session.
          </p>
        </div>
      </div>
      <img src="/images/therapy_room_2.jpeg" />
    </div>
  );
};
export default MyPracticeInfo;
