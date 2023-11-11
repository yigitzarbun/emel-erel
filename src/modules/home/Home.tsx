import Hero from "../../components/home/hero/Hero";
import HomeAbout from "../../components/home/home-about-section/HomeAbout";
import styles from "./styles.module.scss";

const Home = () => {
  return (
    <div className={styles["home-container"]}>
      <Hero />
      <HomeAbout />
    </div>
  );
};

export default Home;
