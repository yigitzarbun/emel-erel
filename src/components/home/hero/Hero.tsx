import { Link } from "react-router-dom";

import styles from "./styles.module.scss";
import Paths from "../../../routing/Paths";
import { useEffect, useState } from "react";
import axios from "axios";

export const Hero = () => {
  const [title, setTitle] = useState("");
  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await axios.get(
          `https://cdn.contentful.com/spaces/tqqtse60ni6t/entries/2nQ1Ms6DL4HJRyDjFgliCM?access_token=mSdeKn1HOhTazeXKcTMSnBtkQ5cttKCuDYRq28CkiSk`
        );
        console.log(response);
        setTitle(response.data.fields.title);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      }
    };

    fetchBlogPosts();
  }, []);

  return (
    <div className={styles["hero-container"]}>
      <div className={styles["texts-outer-container"]}>
        <div className={styles["texts-inner-container"]}>
          <h1 className={styles.title}>{title}</h1>
          <h3 className={styles["sub-title"]}>
            Choosing a skilled and experienced psychotherapist is a crucial
            initial step to starting one's journey towards improving the quality
            of their emotional well-being
          </h3>
          <Link to={Paths.CONTACT} className={styles["cta-button"]}>
            GET STARTED
          </Link>
        </div>
      </div>
      <img src="/images/therapy_room_3.jpeg" alt="therapy-room" />
    </div>
  );
};

export default Hero;
