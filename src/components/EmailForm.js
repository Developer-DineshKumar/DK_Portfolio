import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./EmailStyles.css";

const EmailForm = (props) => {
  const { togglemode } = props;
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ofmuxrn",
        "template_ckxnyqk",
        form.current,
        "BQmkuDejIO1zRbcRt"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className={togglemode}>
      <div className="emailContainer">
        <h2>CONTACT US</h2>
        <form ref={form} onSubmit={sendEmail} className="form-container">
          <input
            placeholder="Full Name"
            name="user_name"
            type="text"
            required
          />
          <input placeholder="Email" name="user_email" type="email" required />
          <input
            placeholder="Subject"
            name="user_subject"
            type="text"
            required
          />
          <textarea
            name="message"
            cols={30}
            rows={10}
            type="text"
            placeholder="Message"
          ></textarea>
          <button type="submit" className="btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default EmailForm;
