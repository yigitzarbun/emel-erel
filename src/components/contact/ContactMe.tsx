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
  const contentfulToken = import.meta.env.VITE_REACT_APP_CONTENTFUL_TOKEN;
  const viteEmailId = import.meta.env.VITE_REACT_APP_EMAILJS_SERVICE_ID;
  const viteTemplateId = import.meta.env.VITE_REACT_APP_EMAILJS_TEMPLATE_ID;
  const viteApiKey = import.meta.env.VITE_REACT_APP_EMAILJS_API_KEY;
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");
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
      to_email: contactEmail,
    };
    try {
      emailjs
        .send(viteEmailId, viteTemplateId, templateParams, viteApiKey)
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

  useEffect(() => {
    const fetchTitle = async () => {
      try {
        const response = await axios.get(
          `https://cdn.contentful.com/spaces/tqqtse60ni6t/entries?content_type=hero&access_token=${contentfulToken}`
        );
        for (let i = 0; i < response.data.items.length; i++) {
          if (response.data.items[i].sys.id === "1MBGunnQTjzOJ2JjdHUROS") {
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
          <h3 className={styles.title}>Contact Info</h3>
          <p>
            To schedule an appointment or to obtain additional information
            please call or email me:
          </p>
          <div className={styles["contact-container"]}>
            <div className={styles.contact}>
              <MdOutlineEmail />
              <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
            </div>
            <div className={styles.contact}>
              <MdPhone />
              <a href={`tel:${contactPhone}`}>{contactPhone}</a>
            </div>
          </div>
          <div className={styles.office}>
            <h3>Office Address:</h3>
            <address>
              306 Washington Street, Suite 1207 Hoboken, NJ 07030
            </address>
          </div>
          <h5>
            **Please DO NOT include confidential or private information
            regarding your health condition in your messages.
          </h5>
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
