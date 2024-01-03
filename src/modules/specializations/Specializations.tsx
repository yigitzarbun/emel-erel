import MySpecializations from "../../components/specializations/MySpecializations";
import { Helmet } from "react-helmet";

const Specializations = () => {
  return (
    <div>
      <Helmet>
        <title>
          Specializations: Couples Therapy |Perinatal Mood and Anxiety (PMAD)
        </title>
        <meta
          name="description"
          content="Issues that I work with include: communication difficulties, disagreements, feeling “stuck” with patterns of behavior, infidelity, becoming parents, other major life events, sexual problems"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="[URL of the about page]" />
      </Helmet>
      <MySpecializations />
    </div>
  );
};

export default Specializations;
