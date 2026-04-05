import { Helmet } from "react-helmet-async";

type Props = {
  title: string;
  description?: string;
};

const SEO: React.FC<Props> = ({ title, description }) => {
  const fullTitle = `${title} | Emel L. Erel, Psy.D.`;

  return (
    <Helmet>
      <title>{fullTitle}</title>

      <meta
        name="description"
        content={
          description ||
          "Psychotherapy services for adults, adolescents, and couples in New York and New Jersey."
        }
      />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || ""} />

      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Helmet>
  );
};

export default SEO;
