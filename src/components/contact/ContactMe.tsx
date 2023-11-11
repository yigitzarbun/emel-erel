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

  const onSubmit: SubmitHandler<FormValues> = (formData: FormValues) => {
    const templateParams = {
      from_name: formData.fname + " " + formData.lname + " " + formData.email,
      message: formData.message,
      to_email: "yzarbun@gmail.com",
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

  return (
    <div className={styles["home-contact-container"]}>
      <div className={styles["text-outer-container"]}>
        <div className={styles["text-inner-container"]}>
          <h3 className={styles.title}>Contact Me</h3>
          <p>
            I believe choosing a skilled and an experienced psychotherapist is a
            crucial initial step prior to starting one’s journey towards
            improving the quality of their emotional well-being. So, please take
            the time to explore my website and feel free to contact me with any
            questions.
          </p>
          <div className={styles["contact-container"]}>
            <div className={styles.contact}>
              <MdOutlineEmail />
              <a href="mailto: emelerel@gmail.com">emelerel@gmail.com</a>
            </div>
            <div className={styles.contact}>
              <MdPhone />
              <a href="tel:+4733378901">(201) 581-3395</a>
            </div>
          </div>

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
              <label>Leave your a message..</label>
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
