import { useState, useEffect } from "react";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import axios from "axios";

import styles from "./styles.module.scss";

export const MyServices = () => {
  const [page, setPage] = useState(1);

  const handleNextPage = () => {
    setPage((p) => (p % 3) + 1);
  };

  const handlePrevPage = () => {
    setPage((p) => ((p + 1) % 3) + 1);
  };

  const [title1, setTitle1] = useState("");
  const [listItem1, setListItem1] = useState("");
  const [listItem2, setListItem2] = useState("");
  const [listItem3, setListItem3] = useState("");
  const [listItem4, setListItem4] = useState("");
  //
  const [title2, setTitle2] = useState("");
  const [listItem5, setListItem5] = useState("");
  const [listItem6, setListItem6] = useState("");
  const [listItem7, setListItem7] = useState("");
  const [listItem8, setListItem8] = useState("");
  const [listItem9, setListItem9] = useState("");
  const [listItem10, setListItem10] = useState("");
  const [listItem11, setListItem11] = useState("");
  const [listItem12, setListItem12] = useState("");
  const [listItem13, setListItem13] = useState("");
  const [listItem14, setListItem14] = useState("");
  const [listItem15, setListItem15] = useState("");
  const [listItem16, setListItem16] = useState("");
  const [listItem17, setListItem17] = useState("");

  //
  useEffect(() => {
    const fetchTitle = async () => {
      try {
        const response = await axios.get(
          `https://cdn.contentful.com/spaces/tqqtse60ni6t/entries?content_type=hero&access_token=mSdeKn1HOhTazeXKcTMSnBtkQ5cttKCuDYRq28CkiSk`
        );
        for (let i = 0; i < response.data.items.length; i++) {
          if (response.data.items[i].sys.id === "2hT2R48HhQ66ngIX81tbIV") {
            setTitle1(response.data.items[i].fields.title);
          } else if (
            response.data.items[i].sys.id === "51WvL9NdSyMmx7FIeQQ4cu"
          ) {
            setListItem1(response.data.items[i].fields.title);
          } else if (
            response.data.items[i].sys.id === "1GnxUkyo0SSU18DLc1FFnx"
          ) {
            setListItem2(response.data.items[i].fields.title);
          } else if (
            response.data.items[i].sys.id === "31Kuk2V4IWAY1ZXi3wuiwL"
          ) {
            setListItem3(response.data.items[i].fields.title);
          } else if (
            response.data.items[i].sys.id === "4NTJHbBElkL4dhDquczppG"
          ) {
            setListItem4(response.data.items[i].fields.title);
          }
          //
          else if (response.data.items[i].sys.id === "5BoOPbeeFBXNMhDZ1tnoIp") {
            setTitle2(response.data.items[i].fields.title);
          } else if (
            response.data.items[i].sys.id === "5qBkLNTcs2LC4X5IP3SLOw"
          ) {
            setListItem5(response.data.items[i].fields.title);
          } else if (
            response.data.items[i].sys.id === "55KIL3cXqw2Jw0UydpDpBZ"
          ) {
            setListItem6(response.data.items[i].fields.title);
          } else if (
            response.data.items[i].sys.id === "23aNSfK7CfO9CGqlQ23IBz"
          ) {
            setListItem7(response.data.items[i].fields.title);
          } else if (
            response.data.items[i].sys.id === "3bZycgMmtzDQNPShVeg1sR"
          ) {
            setListItem8(response.data.items[i].fields.title);
          } else if (
            response.data.items[i].sys.id === "4lrGOqSoONjFwZ4MWDWYHg"
          ) {
            setListItem9(response.data.items[i].fields.title);
          } else if (
            response.data.items[i].sys.id === "6IR9EqdnGUy78si4x8jo5z"
          ) {
            setListItem10(response.data.items[i].fields.title);
          } else if (
            response.data.items[i].sys.id === "6gZsRMgrTdtjTiU0uI2eGq"
          ) {
            setListItem11(response.data.items[i].fields.title);
          } else if (
            response.data.items[i].sys.id === "64cBp0j3HBVwUmOoqlbzxE"
          ) {
            setListItem12(response.data.items[i].fields.title);
          } else if (
            response.data.items[i].sys.id === "4Ua62d9RWCkm2d1fZOEtEF"
          ) {
            setListItem13(response.data.items[i].fields.title);
          } else if (
            response.data.items[i].sys.id === "436nRvxm3OPHHGYol5pKMF"
          ) {
            setListItem14(response.data.items[i].fields.title);
          } else if (
            response.data.items[i].sys.id === "4aJqivIoD0ndNbkbR5LSAM"
          ) {
            setListItem15(response.data.items[i].fields.title);
          } else if (
            response.data.items[i].sys.id === "6XEv9qcCBUpPyBUvxHGtyD"
          ) {
            setListItem16(response.data.items[i].fields.title);
          } else if (
            response.data.items[i].sys.id === "6D4P3wIhYx8VIWPPLDMN4u"
          ) {
            setListItem17(response.data.items[i].fields.title);
          }
        }
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      }
    };
    fetchTitle();
  }, []);
  return (
    <div className={styles["services-container"]}>
      <div className={styles["texts-container"]}>
        <div className={styles["text-inner-container"]}>
          <h3 className={styles.title}>{title1}</h3>
          <ul>
            <li>{listItem1}</li>
            <li>{listItem2}</li>
            <li>{listItem3}</li>
            <li>{listItem4}</li>
          </ul>
        </div>

        <div className={styles["text-inner-container"]}>
          <h3 className={styles.title}>{title2}</h3>
          <ul>
            {page === 1 ? (
              <>
                <li>{listItem5}</li>
                <li>{listItem6}</li>
                <li> {listItem7}</li>
                <li> {listItem8}</li>
                <li>{listItem9}</li>
              </>
            ) : page === 2 ? (
              <>
                <li>{listItem10}</li>
                <li>{listItem11}</li>
                <li>{listItem12}</li>
                <li>{listItem13}</li>
              </>
            ) : (
              <>
                <li>{listItem14}</li>
                <li>{listItem15}</li>
                <li>{listItem16}</li>
                <li>{listItem17}</li>
              </>
            )}
          </ul>
          <div className={styles["nav-container"]}>
            <MdNavigateBefore
              className={styles["arrow"]}
              onClick={handlePrevPage}
            />
            <MdNavigateNext
              className={styles["arrow"]}
              onClick={handleNextPage}
            />
          </div>
          <p>Showing page {page} of 3</p>
        </div>
      </div>
      <img src="/images/therapy_room.jpeg" />
    </div>
  );
};
