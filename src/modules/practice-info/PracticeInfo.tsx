import MyPracticeInfo from "../../components/practice-info/MyPracticeInfo";
import { Helmet } from "react-helmet";

const PracticeInfo = () => {
  return (
    <div>
      <Helmet>
        <title>Rates, Insurance and Cancellation Policy</title>
        <meta
          name="description"
          content="Individual Therapy $250 per 45-minute session |Couples Therapy $300 per 60-minute session. Services may be covered in full or in part by your health insurance or employee benefit plan. "
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="[URL of the about page]" />
      </Helmet>
      <MyPracticeInfo />
    </div>
  );
};

export default PracticeInfo;
