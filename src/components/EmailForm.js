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
          Full Name:
          <input
            placeholder="Full Name"
            name="user_name"
            type="text"
            required
          />
          E-mail:
          <input placeholder="Email" name="user_email" type="email" required />
          Subject:
          <input
            placeholder="Subject"
            name="user_subject"
            type="text"
            required
          />
          Message:
          <textarea
            name="message"
            cols={30}
            rows={10}
            type="text"
            placeholder="Type your message here..."
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
