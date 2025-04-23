"use client";
import styles from "./ContactForm.module.css";
import { RxAvatar } from "react-icons/rx";
import { IoCallOutline } from "react-icons/io5";
import { BiMessageDetail } from "react-icons/bi";
import { LuSend } from "react-icons/lu";
import { useState } from "react";

function ContactForm() {
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    setTimeout(() => {
      setIsSending(false);
    }, 800);
  };
  return (
    <div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1 className={styles.formHeading}>Contact Us</h1>
        <div>
          <div className={styles.detailsContainer}>
            <label className={styles.label}>
              <RxAvatar />
            </label>
            <input
              type="text"
              placeholder="John Smith"
              className={styles.input}
            />
          </div>
          <div className={styles.detailsContainer}>
            <label className={styles.label}>
              <IoCallOutline />
            </label>
            <input
              type="text"
              placeholder="0412 345 678"
              className={styles.input}
            />
          </div>
          <div className={styles.detailsContainer}>
            <label className={styles.label}>
              <BiMessageDetail />
            </label>
            <textarea
              placeholder="Enter your enquiry"
              className={styles.input}
              rows={10}
            />
          </div>
          <div className={styles.detailsContainer}>
            <button className={styles.button}>
              <LuSend
                className={`${styles.icon} ${isSending ? styles.sending : ""}`}
              />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
export default ContactForm;
