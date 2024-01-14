import axios from "axios";
import { useState, useEffect } from "react";

import styles from "./styles.module.scss";

const MyPracticeInfo = () => {
  const contentfulToken = import.meta.env.VITE_REACT_APP_CONTENTFUL_TOKEN;
  const [rateIndividual, setRateIndividual] = useState("");
  const [rateCouple, setRateCouple] = useState("");
  const [rateReduced, setRateReduced] = useState("");
  const [paymentOptions, setPaymentOptions] = useState("");

  useEffect(() => {
    const fetchTitle = async () => {
      try {
        const response = await axios.get(
          `https://cdn.contentful.com/spaces/tqqtse60ni6t/entries?content_type=hero&access_token=${contentfulToken}`
        );
        for (let i = 0; i < response.data.items.length; i++) {
          if (response.data.items[i].sys.id === "1ZtHz5Ywk8X0dhQxbxFa7E") {
            setRateIndividual(response.data.items[i].fields.title);
          } else if (
            response.data.items[i].sys.id === "5juCSWsIgAEyP1BGRNjLkB"
          ) {
            setRateCouple(response.data.items[i].fields.title);
          } else if (
            response.data.items[i].sys.id === "PVHgWVZQjESET2OaVJXQd"
          ) {
            setRateReduced(response.data.items[i].fields.title);
          } else if (
            response.data.items[i].sys.id === "6F5xbuLH5cU3JvTTMKKaA"
          ) {
            setPaymentOptions(response.data.items[i].fields.title);
          }
        }
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      }
    };
    fetchTitle();
  }, []);

  return (
    <div className={styles["services-container"]}>
      <div className={styles["texts-container"]}>
        <div className={styles["text-inner-container"]}>
          <img src="/images/drop.jpg" alt="nature-picture" />
          <h3 className={styles.title}>Rates & Insurance</h3>
          <ul>
            <li>{rateIndividual}</li>
            <li>{rateCouple}</li>
          </ul>
          <h3 className={styles.subtitle}>Therapy Insurance Information</h3>
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
          <h3 className={styles.subtitle}>Reduced Fee Therapy Services</h3>
          <p>{rateReduced}</p>
          <h3 className={styles.subtitle}>Payment</h3>
          <p>{paymentOptions}</p>
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
    </div>
  );
};
export default MyPracticeInfo;
