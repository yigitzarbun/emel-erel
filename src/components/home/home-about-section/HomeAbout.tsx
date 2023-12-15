import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import styles from "./styles.module.scss";
import Paths from "../../../routing/Paths";

const HomeAbout = () => {
  const [title, setTitle] = useState("");
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [text3, setText3] = useState("");
  const [buttonText, setButtonText] = useState("");
  useEffect(() => {
    const fetchTitle = async () => {
      try {
        const response = await axios.get(
          `https://cdn.contentful.com/spaces/tqqtse60ni6t/entries?content_type=hero&access_token=mSdeKn1HOhTazeXKcTMSnBtkQ5cttKCuDYRq28CkiSk`
        );
        for (let i = 0; i < response.data.items.length; i++) {
          if (response.data.items[i].sys.id === "1vUGgeTg8xcgQLMZkSLy3s") {
            setTitle(response.data.items[i].fields.title);
          } else if (
            response.data.items[i].sys.id === "70RcTWnL6GnZLt9r79O0Y1"
          ) {
            setText1(response.data.items[i].fields.title);
          } else if (
            response.data.items[i].sys.id === "5XoT9xNxNQEO31fy9hF3hp"
          ) {
            setText2(response.data.items[i].fields.title);
          } else if (
            response.data.items[i].sys.id === "1uuS8YwqFbqQSLB4sR1DEZ"
          ) {
            setText3(response.data.items[i].fields.title);
          } else if (
            response.data.items[i].sys.id === "UThP5yhKwG1GiUMqXr7L1"
          ) {
            setButtonText(response.data.items[i].fields.title);
          }
        }
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      }
    };
    fetchTitle();
  }, []);
  return (
    <div className={styles["home-about-container"]}>
      <div className={styles["text-outer-container"]}>
        <div className={styles["text-inner-container"]}>
          <h3 className={styles.title}>{title}</h3>
          <p>{text1}</p>
          <p>{text2}</p>
          <p>{text3}</p>
          <Link to={Paths.CONTACT} className={styles["cta-button"]}>
            {buttonText}
          </Link>
        </div>
      </div>
      <img
        src="/images/emel_erel_profile.jpeg"
        alt="emel-erel-profile-picutre"
        className={styles["profile-picture"]}
      />
    </div>
  );
};

export default HomeAbout;
