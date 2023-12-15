import { MdPhone, MdOutlineEmail } from "react-icons/md";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
import axios from "axios";
import { useState, useEffect } from "react";

import emailjs from "@emailjs/browser";

import styles from "./styles.module.scss";

type FormValues = {
  fname: string;
  lname: string;
  email: string;
  message: string;
};

const ContactMe = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (formData: FormValues) => {
    const templateParams = {
      from_name: formData.fname + " " + formData.lname + " " + formData.email,
      message: formData.message,
      to_email: "emelerel@gmail.com",
    };
    try {
      emailjs
        .send(
          "service_gugc9om",
          "template_mn0e4ld",
          templateParams,
          "vR-TZXFb4CC3SnQKa"
        )
        .then(
          () => {
            toast.success("Form submitted");
          },
          () => {
            toast.error("Form submission failed");
          }
        );
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  const [title, setTitle] = useState("");
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");

  useEffect(() => {
    const fetchTitle = async () => {
      try {
        const response = await axios.get(
          `https://cdn.contentful.com/spaces/tqqtse60ni6t/entries?content_type=hero&access_token=mSdeKn1HOhTazeXKcTMSnBtkQ5cttKCuDYRq28CkiSk`
        );
        for (let i = 0; i < response.data.items.length; i++) {
          if (response.data.items[i].sys.id === "1KKIexbi6NrrDfmgKtFq2S") {
            setTitle(response.data.items[i].fields.title);
          } else if (
            response.data.items[i].sys.id === "3cmYOsNdZam4BOPPjiVSlX"
          ) {
            setText1(response.data.items[i].fields.title);
          } else if (
            response.data.items[i].sys.id === "6urRY5zUud6iVrMjbRi0LZ"
          ) {
            setText2(response.data.items[i].fields.title);
          } else if (
            response.data.items[i].sys.id === "1MBGunnQTjzOJ2JjdHUROS"
          ) {
            setContactEmail(response.data.items[i].fields.title);
          } else if (
            response.data.items[i].sys.id === "1D069TJl77vWKSkxHT1Owc"
          ) {
            setContactPhone(response.data.items[i].fields.title);
          }
        }
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      }
    };
    fetchTitle();
  }, []);
  return (
    <div className={styles["home-contact-container"]}>
      <div className={styles["text-outer-container"]}>
        <div className={styles["text-inner-container"]}>
          <h3 className={styles.title}>{title}</h3>
          <p>
            {text1} {text2}
          </p>
          <div className={styles["contact-container"]}>
            <div className={styles.contact}>
              <MdOutlineEmail />
              <a href="mailto: emelerel@gmail.com">{contactEmail}</a>
            </div>
            <div className={styles.contact}>
              <MdPhone />
              <a href="tel:+4733378901">{contactPhone}</a>
            </div>
          </div>
        </div>
        <div className={styles["text-inner-container"]}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={styles["form-container"]}
          >
            <h2>Contact Form</h2>
            <div className={styles["input-container"]}>
              <label>First Name</label>
              <input {...register("fname", { required: true })} type="text" />
              {errors.fname && (
                <span className={styles["error-field"]}>
                  First Name is required
                </span>
              )}
            </div>
            <div className={styles["input-container"]}>
              <label>Last Name</label>
              <input {...register("lname", { required: true })} type="text" />
              {errors.lname && (
                <span className={styles["error-field"]}>
                  Last name is required
                </span>
              )}
            </div>
            <div className={styles["input-container"]}>
              <label>Email</label>
              <input {...register("email", { required: true })} type="email" />
              {errors.email && (
                <span className={styles["error-field"]}>Email is required</span>
              )}
            </div>
            <div className={styles["message-container"]}>
              <label>Leave your message..</label>
              <textarea {...register("message", { required: true })} />
              {errors.message && (
                <span className={styles["error-field"]}>
                  Message is required
                </span>
              )}
            </div>
            <button type="submit" className={styles.button}>
              Submit
            </button>
          </form>
        </div>
      </div>
      <img
        src="/images/therapy_room_2.jpeg"
        alt="emel-erel-profile-picutre"
        className={styles["profile-picture"]}
      />
    </div>
  );
};

export default ContactMe;
