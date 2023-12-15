import { useEffect, useState } from "react";
import axios from "axios";

import styles from "./styles.module.scss";

const MyBackground = () => {
  const [title, setTitle] = useState("");
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [text3, setText3] = useState("");
  const [text4, setText4] = useState("");
  const [text5, setText5] = useState("");
  //
  const [listItem1, setListItem1] = useState("");
  const [listItem2, setListItem2] = useState("");
  const [listItem3, setListItem3] = useState("");
  //
  const [text6, setText6] = useState("");
  const [text7, setText7] = useState("");

  //
  useEffect(() => {
    const fetchTitle = async () => {
      try {
        const response = await axios.get(
          `https://cdn.contentful.com/spaces/tqqtse60ni6t/entries?content_type=hero&access_token=mSdeKn1HOhTazeXKcTMSnBtkQ5cttKCuDYRq28CkiSk`
        );
        for (let i = 0; i < response.data.items.length; i++) {
          if (response.data.items[i].sys.id === "5dMLRiPGT9ta7URzh1GnUU") {
            setTitle(response.data.items[i].fields.title);
          } else if (
            response.data.items[i].sys.id === "2Aik5pe1DRGbythsNIMC33"
          ) {
            setText1(response.data.items[i].fields.title);
          } else if (
            response.data.items[i].sys.id === "4mUJEiQrj6jRLDkYG0Ezwn"
          ) {
            setText2(response.data.items[i].fields.title);
          } else if (
            response.data.items[i].sys.id === "2PbStipcyYyKioCgkl0AFj"
          ) {
            setText3(response.data.items[i].fields.title);
          } else if (
            response.data.items[i].sys.id === "2nPD5vstr4FPDx4CQQH7na"
          ) {
            setText4(response.data.items[i].fields.title);
          } else if (
            response.data.items[i].sys.id === "2sUTUlua5ZhX2MsG4ANjIg"
          ) {
            setText5(response.data.items[i].fields.title);
          }
          //
          else if (response.data.items[i].sys.id === "008cnGO6TipFaNMMwh3H2") {
            setListItem1(response.data.items[i].fields.title);
          } else if (
            response.data.items[i].sys.id === "55afhv7rN4e3FVt4fCFjxD"
          ) {
            setListItem2(response.data.items[i].fields.title);
          } else if (
            response.data.items[i].sys.id === "qkpmNxmBEhxrJBZ7ULZhz"
          ) {
            setListItem3(response.data.items[i].fields.title);
          }
          //
          else if (response.data.items[i].sys.id === "3hN9yiNf7qmVXGWDsXl4o6") {
            setText6(response.data.items[i].fields.title);
          } else if (
            response.data.items[i].sys.id === "6vfF4ofiTqY28luWvS47xX"
          ) {
            setText7(response.data.items[i].fields.title);
          }
        }
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      }
    };
    fetchTitle();
  }, []);

  return (
    <div className={styles["background-container"]}>
      <div className={styles["text-outer-container"]}>
        <div className={styles["text-inner-container"]}>
          <h3 className={styles.title}>{title}</h3>
          <p>
            {text1}
            {text2}
            {text3}
            {text4}
          </p>
          <span>{text5}</span>
          <ul>
            <li>{listItem1}</li>
            <li>{listItem2}</li>
            <li>{listItem3}</li>
          </ul>
          <p>
            {text6} {text7}
          </p>
        </div>
      </div>
      <img
        src="/images/therapy_room_3.jpeg"
        alt="therapy-room-image"
        className={styles["profile-picture"]}
      />
    </div>
  );
};

export default MyBackground;
