import AboutMe from "../../components/about/AboutMe";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <div>
      <Helmet>
        <title>About Emel L. Erel, Psy.D.</title>
        <meta
          name="description"
          content="Emel L. Erel is a bilingual in Turkish-English, NY and NJ licensed Clinical Psychologist for over 15 years of clinical experience in working with Adolescents (13+), Adults, and Couples struggling with various emotional difficulties."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="[URL of the about page]" />
      </Helmet>
      <AboutMe />
    </div>
  );
};

export default About;
