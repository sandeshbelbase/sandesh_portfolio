import { send } from "emailjs-com";
import React from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
  const defaultValues = {
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  };
  const { register, handleSubmit } = useForm({ defaultValues });

  const onSubmit = (data) => {
    console.log("aayo ki", data);
    send("service_e167r0p", "template_4za5ru7", data, "VuA4nK-BWmNvjMBRA")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };
  return (
    <div className="portfolio">
      <div className="text">
        <h2 style={{ borderBottom: "2px solid black" }}>Con</h2>
        <h2 style={{ borderBottom: "2px solid #FFB330" }}> tact</h2>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="formField">
          <div className="field">
            <input
              type="text"
              name="name"
              placeholder="full name"
              {...register("name")}
            />
          </div>
          <div className="field">
            <input
              type="email"
              name="email"
              placeholder="example@gmail.com"
              {...register("email")}
            />
          </div>
        </div>
        <div className="formField">
          <div className="field">
            {" "}
            <input
              type="text"
              name="phone"
              placeholder="+97798*******"
              {...register("phone")}
            />
          </div>
          <div className="field">
            <select name="suject" {...register("subject")}>
              <option value="project">I'd like to start a project.</option>
              <option value="question">I'd like to ask a question.</option>
              <option value="proposal">I'd like to make proposal.</option>
            </select>
          </div>
        </div>
        <div className="formField">
          <textarea
            type="text"
            name="message"
            placeholder="message here"
            cols="100"
            rows="3"
            {...register("message")}
          />
        </div>
        <div className="btn">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
