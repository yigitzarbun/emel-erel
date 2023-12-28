import Hero from "../../components/home/hero/Hero";
import styles from "./styles.module.scss";

const Home = () => {
  return (
    <div className={styles["home-container"]}>
      <Hero />
    </div>
  );
};

export default Home;
