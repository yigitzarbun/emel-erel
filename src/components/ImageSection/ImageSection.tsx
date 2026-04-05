// src/components/ImageSection/ImageSection.tsx

import styles from "./styles.module.scss";

type Props = {
  title?: string;
  children: React.ReactNode;
  image: string;
  reverse?: boolean;
};

const ImageSection: React.FC<Props> = ({
  title,
  children,
  image,
  reverse = false,
}) => {
  return (
    <section className={`${styles.section} ${reverse ? styles.reverse : ""}`}>
      <div className={styles.text}>
        {title && <h2>{title}</h2>}
        <div className={styles.content}>{children}</div>
      </div>

      <div className={styles.imageWrapper}>
        <img src={image} alt="" />
      </div>
    </section>
  );
};

export default ImageSection;
