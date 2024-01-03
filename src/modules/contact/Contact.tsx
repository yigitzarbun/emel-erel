import ContactMe from "../../components/contact/ContactMe";
import { Helmet } from "react-helmet";

const Contact = () => {
  return (
    <div>
      <Helmet>
        <title>Contact Information</title>
        <meta
          name="description"
          content="To schedule an appointment or to obtain additional information please call or email me: emelerel@gmail.com |646-326-6814"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="[URL of the about page]" />
      </Helmet>
      <ContactMe />
    </div>
  );
};

export default Contact;
