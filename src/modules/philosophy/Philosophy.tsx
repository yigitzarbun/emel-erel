import MyPhilosophy from "../../components/philosophy/MyPhilosophy";
import { Helmet } from "react-helmet";

const Philosophy = () => {
  return (
    <div>
      <Helmet>
        <title>My Philosophy</title>
        <meta
          name="description"
          content="The type of talk therapy that I provide aims to initially build a trusting relationship, a collaborative work with my patients to help them gain a better understanding of the impact of these early, formative experiences and examine how the past can still be alive in the present."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="[URL of the about page]" />
      </Helmet>
      <MyPhilosophy />
    </div>
  );
};

export default Philosophy;
