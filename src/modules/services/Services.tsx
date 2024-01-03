import { MyServices } from "../../components/services/MyServices";
import { Helmet } from "react-helmet";

const Services = () => {
  return (
    <div>
      <Helmet>
        <title>My Services, Clinical Interests and Experience Areas</title>
        <meta
          name="description"
          content="My services include Individual Therapy for Adolescents and Adults, Individual Therapy for Perinatal Mood Disorders, Loss and Grief, Couples Therapy, Family Therapy"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="[URL of the about page]" />
      </Helmet>
      <MyServices />
    </div>
  );
};

export default Services;
