import MyEducation from "../../components/education/MyEducation";
import { Helmet } from "react-helmet";

const Education = () => {
  return (
    <div>
      <Helmet>
        <title>
          Educational Background | NYU |Yeshica University |Columbia University
          |Bogazici University
        </title>
        <meta
          name="description"
          content="NYU Postdoctoral Program in Psychotherapy and Psychoanalysis-Candidate | Ferkauf Graduate School of Psychology Psy.D. in Clinical Psychology | Teachers College, Columbia University Ed.M in School Psychology | Bogazici University B.A. Double Major in Psychology and Guidance-Counseling, Istanbul, Turkey"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="[URL of the about page]" />
      </Helmet>
      <MyEducation />
    </div>
  );
};

export default Education;
