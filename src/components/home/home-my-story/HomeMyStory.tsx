import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import Paths from "../../../routing/Paths";

const HomeMyStory = () => {
  return (
    <div className={styles["home-story-container"]}>
      <h2 className={styles.title}>Why I do what I do?</h2>
      <div className={styles["text-container"]}>
        <p>
          I believe I am effective in developing strong working alliances with
          my patients so that therapy experience can lead to emotional growth
          and change. In fact, the process of building a unique relationship and
          creating a new experience together with my patients, making a change
          in their lives is what makes this work rewarding for me.
        </p>
        <Link to={Paths.ABOUT} className={styles["cta-button"]}>
          LEARN MORE{" "}
        </Link>
      </div>
    </div>
  );
};

export default HomeMyStory;
