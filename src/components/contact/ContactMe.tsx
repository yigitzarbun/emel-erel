import { useEffect, useState } from "react";
import { MdPhone, MdOutlineEmail } from "react-icons/md";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
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
  const recaptchaKey = import.meta.env.VITE_REACT_APP_RECAPTCHA_KEY;

  const onSubmit: SubmitHandler<FormValues> = async (formData: FormValues) => {
    try {
      const token = await new Promise<string>((resolve, reject) => {
        if (window.grecaptcha) {
          window.grecaptcha.ready(() => {
            window.grecaptcha
              .execute(recaptchaKey, { action: "submit" })
              .then((token: string) => resolve(token))
              .catch((err: Error) => reject(err));
          });
        } else {
          reject(new Error("reCAPTCHA not loaded"));
        }
      });

      const templateParams = {
        from_name: `${formData.fname} ${formData.lname} ${formData.email}`,
        message: formData.message,
        to_email: "emelerel@gmail.com",
        "g-recaptcha-response": token,
      };

      await emailjs.send(
        import.meta.env.VITE_REACT_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_REACT_APP_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_REACT_APP_EMAILJS_API_KEY
      );

      toast.success("Form submitted");
      reset();
    } catch (error) {
      toast.error("Form submission failed");
      console.error("Error submitting form:", error);
    }
  };

  useEffect(() => {
    const loadRecaptchaScript = () => {
      const script = document.createElement("script");
      script.src = `https://www.google.com/recaptcha/api.js?render=${recaptchaKey}`;
      script.async = true;
      script.defer = true;
      script.onload = () => console.log("reCAPTCHA script loaded");
      document.head.appendChild(script);
    };

    loadRecaptchaScript();
  }, [recaptchaKey]);

  return (
    <div className={styles["home-contact-container"]}>
      <div className={styles["text-outer-container"]}>
        <div className={styles["text-inner-container"]}>
          <img
            src="/images/therapy_room_2.jpeg"
            alt="emel-erel-therapy-room-picutre"
            className={styles["profile-picture"]}
          />
          <h3 className={styles.title}>Contact Info</h3>
          <p>
            To schedule an appointment or to obtain additional information
            please call or email me:
          </p>
          <div className={styles["contact-container"]}>
            <div className={styles.contact}>
              <MdOutlineEmail />
              <a href="mailto:emelerel@gmail.com">emelerel@gmail.com</a>
            </div>
            <div className={styles.contact}>
              <MdPhone />
              <a href="tel:646-326-6814">646-326-6814</a>
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
        <div className={styles["form-container"]}>
          <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
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
    </div>
  );
};

export default ContactMe;
