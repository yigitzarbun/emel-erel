import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import styles from "./styles.module.scss";
import Paths from "../../../routing/Paths";

export const Hero = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [buttonText, setButtonText] = useState("");
  useEffect(() => {
    const fetchTitle = async () => {
      try {
        const response = await axios.get(
          `https://cdn.contentful.com/spaces/tqqtse60ni6t/entries?content_type=hero&access_token=mSdeKn1HOhTazeXKcTMSnBtkQ5cttKCuDYRq28CkiSk
`
        );
        for (let i = 0; i < response.data.items.length; i++) {
          if (response.data.items[i].sys.id === "2nQ1Ms6DL4HJRyDjFgliCM") {
            setTitle(response.data.items[i].fields.title);
          } else if (
            response.data.items[i].sys.id === "1DDjqJBArKO4PnDr6NojTF"
          ) {
            setText(response.data.items[i].fields.title);
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
    <div className={styles["hero-container"]}>
      <div className={styles["texts-outer-container"]}>
        <div className={styles["texts-inner-container"]}>
          <h1 className={styles.title}>{title}</h1>
          <h3 className={styles["sub-title"]}>{text}</h3>
          <Link to={Paths.CONTACT} className={styles["cta-button"]}>
            {buttonText}
          </Link>
        </div>
      </div>
      <img src="/images/therapy_room_3.jpeg" alt="therapy-room" />
    </div>
  );
};

export default Hero;
