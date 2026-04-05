// Section.tsx
import styles from "./styles.module.scss";

type Props = {
  title?: string;
  children: React.ReactNode;
  center?: boolean;
};

const Section: React.FC<Props> = ({ title, children, center }) => {
  return (
    <section className={`${styles.section} ${center ? styles.center : ""}`}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <div className={styles.content}>{children}</div>
    </section>
  );
};

export default Section;
