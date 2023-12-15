import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import styles from "./styles.module.scss";
import Paths from "../../routing/Paths";

const AboutMe = () => {
  const [readMore, setReadMore] = useState(false);

  const handleReadMore = () => {
    readMore === true ? setReadMore(false) : setReadMore(true);
  };

  const [title1, setTitle1] = useState("");
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [text3, setText3] = useState("");
  const [text4, setText4] = useState("");

  const [listItem1, setListItem1] = useState("");
  const [listItem2, setListItem2] = useState("");
  const [listItem3, setListItem3] = useState("");
  const [listItem4, setListItem4] = useState("");
  const [listItem5, setListItem5] = useState("");
  const [listItem6, setListItem6] = useState("");

  const [text5, setText5] = useState("");
  const [text6, setText6] = useState("");
  const [text7, setText7] = useState("");
  const [text8, setText8] = useState("");

  const [buttonText, setButtonText] = useState("");

  const [title2, setTitle2] = useState("");

  const [education1, setEducation1] = useState("");
  const [education2, setEducation2] = useState("");
  const [education3, setEducation3] = useState("");

  useEffect(() => {
    const fetchTitle = async () => {
      try {
        const response = await axios.get(
          `https://cdn.contentful.com/spaces/tqqtse60ni6t/entries?content_type=hero&access_token=mSdeKn1HOhTazeXKcTMSnBtkQ5cttKCuDYRq28CkiSk`
        );
        for (let i = 0; i < response.data.items.length; i++) {
          if (response.data.items[i].sys.id === "SIZ43js1r70J3HU0qTfmJ") {
            setTitle1(response.data.items[i].fields.title);
          } else if (
            response.data.items[i].sys.id === "4PAfNEqsF0DLA8tNDdQ4bO"
          ) {
            setText1(response.data.items[i].fields.title);
          } else if (
            response.data.items[i].sys.id === "3m72m79xITgXs4swWuiu3h"
          ) {
            setText2(response.data.items[i].fields.title);
          } else if (
            response.data.items[i].sys.id === "1NxerCHfIfmGBcBMIw67Ol"
          ) {
            setText3(response.data.items[i].fields.title);
          } else if (
            response.data.items[i].sys.id === "Q7kU8bGu1vSi5HY8qZccU"
          ) {
            setText4(response.data.items[i].fields.title);
            //
          } else if (
            response.data.items[i].sys.id === "1puUBLiJY5EUGmESHnpyUn"
          ) {
            setListItem1(response.data.items[i].fields.title);
          } else if (
            response.data.items[i].sys.id === "185V2ltWjQbyTwfXkYogBu"
          ) {
            setListItem2(response.data.items[i].fields.title);
          } else if (
            response.data.items[i].sys.id === "6WkFJKamMz5ZPXNwgIiPhO"
          ) {
            setListItem3(response.data.items[i].fields.title);
          } else if (
            response.data.items[i].sys.id === "33ISiEtBoSXaYLn2NX209x"
          ) {
            setListItem4(response.data.items[i].fields.title);
          } else if (
            response.data.items[i].sys.id === "6zGAh3cAZt61Pt7A3DCjdu"
          ) {
            setListItem5(response.data.items[i].fields.title);
          } else if (
            response.data.items[i].sys.id === "Up7eLvCqcSWEigYx8wB1n"
          ) {
            setListItem6(response.data.items[i].fields.title);
          }
          //
          else if (response.data.items[i].sys.id === "2buw4og9Hvg9lm6P9HTWbG") {
            setText5(response.data.items[i].fields.title);
          } else if (
            response.data.items[i].sys.id === "5L7NZshERplcnjAs8tUAXE"
          ) {
            setText6(response.data.items[i].fields.title);
          } else if (
            response.data.items[i].sys.id === "5MkTysH12kdMbIKGjBDCzL"
          ) {
            setText7(response.data.items[i].fields.title);
          } else if (
            response.data.items[i].sys.id === "udWwia15v9oy4tUNcrlRN"
          ) {
            setText8(response.data.items[i].fields.title);
          }
          //
          else if (response.data.items[i].sys.id === "UThP5yhKwG1GiUMqXr7L1") {
            setButtonText(response.data.items[i].fields.title);
          }
          //
          else if (response.data.items[i].sys.id === "2bglWj34MNTPdaOo1BLHWq") {
            setTitle2(response.data.items[i].fields.title);
          }
          //
          else if (response.data.items[i].sys.id === "1BpT6OGyBUbM18MWvs5jwo") {
            setEducation1(response.data.items[i].fields.title);
          } else if (
            response.data.items[i].sys.id === "1kTgaja4wFsHmCqLIvbmAt"
          ) {
            setEducation2(response.data.items[i].fields.title);
          } else if (
            response.data.items[i].sys.id === "48d0c96eJCXnqRWIyjHIXl"
          ) {
            setEducation3(response.data.items[i].fields.title);
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
          <h3 className={styles.title}>{title1}</h3>
          <p>{text1}</p>
          <p>
            {text2} {text3}
          </p>
          {readMore && (
            <>
              <p>
                {text4}
                <ul>
                  <li>{listItem1}</li>
                  <li>{listItem2}</li>
                  <li>{listItem3}</li>
                  <li>{listItem4}</li>
                  <li>{listItem5}</li>
                  <li>{listItem6}</li>
                </ul>
                {text5} {text6}
              </p>
              <p>{text7}</p>
              <p>{text8}</p>
            </>
          )}
          <button
            onClick={handleReadMore}
            className={styles["read-more-button"]}
          >
            {readMore === true ? "Read Less" : "Read More"}
          </button>
          <Link to={Paths.CONTACT} className={styles["cta-button"]}>
            {buttonText}
          </Link>
        </div>
        <div className={styles["text-inner-container"]}>
          <h3 className={styles.title}>{title2}</h3>
          <ul>
            <li>{education1}</li>
            <li>{education2}</li>
            <li>{education3}</li>
          </ul>
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

export default AboutMe;
