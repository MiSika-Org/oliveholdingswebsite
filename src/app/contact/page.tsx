"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React, { useState } from "react";

interface ContactUsProps {}

const INITIAL_STATE = {
  firstname: "",
  lastname: "",
  email: "",
  phone: "",
  message: "",
};

const ContactUs: React.FC<ContactUsProps> = ({}) => {
  const [state, setState] = useState(INITIAL_STATE);
  const [loading, setLoading] = useState(false);

  function onChange(e) {
    const oldState = { ...state };
    oldState[e.target.name] = e.target.value;
    setState(oldState);
  }

  async function onSumbit() {
    setLoading(true);
    // await sendEmail(state);
    //     // TODO: implement
    //     console.log(values);

    await fetch("/api/send", {
      method: "POST",
      body: JSON.stringify(state),
    });
    setState(INITIAL_STATE);
    setLoading(false);
  }

  return (
    <div>
      <Header />
      <div className="h-screen flex flex-col contact">
        <div className="flex flex-1 brand-deep-bg contact-us justify-between">
          <div className="contact-us-left">
            <div className="contact-us-title">Contact us</div>
            <div className="contact-us-text contact-us-cta">
              Email, call, or complete the form to learn how Olive Holdings can
              help you
            </div>
            <div className="contact-us-text">info@oliveholdings.io</div>
            <div className="contact-us-text contact-us-phone">321-123-2331</div>
            <div className="contact-us-text underline contact-us-customer">
              Customer Support
            </div>
            <div className="flex contact-us-list">
              <div className="contact-us-list-item">
                <div className="contact-us-text font-semibold">
                  Customer Support
                </div>
                <div className="contact-us-text">
                  Lorem ipsum something something something dolor si avec
                </div>
              </div>
              <div className="contact-us-list-item">
                <div className="contact-us-text font-semibold">
                  Feedback & Suggestions
                </div>
                <div className="contact-us-text">
                  Lorem ipsum something something something dolor si avec
                </div>
              </div>
              <div className="contact-us-list-item">
                <div className="contact-us-text font-semibold">
                  Media Inquiries
                </div>
                <div className="contact-us-text">
                  Lorem ipsum something something something dolor si avec
                </div>
              </div>
            </div>
          </div>
          <form className="contact-us-form">
            <div className="contact-us-form-title">Get in Touch</div>
            <div className="contact-us-text font-normal">
              You can reach us anytime
            </div>
            <div className="contact-us-inputs">
              <div className="flex gap-5">
                <input
                  type="text"
                  id="firstname"
                  name="firstname"
                  onChange={onChange}
                  placeholder="First Name"
                  value={state.firstname}
                />
                <input
                  type="text"
                  id="lastname"
                  name="lastname"
                  onChange={onChange}
                  placeholder="Last Name"
                  value={state.lastname}
                />
              </div>
              <input
                type="text"
                id="email"
                name="email"
                onChange={onChange}
                placeholder="Your email"
                value={state.email}
              />

              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder=""
                onChange={onChange}
                value={state.phone}
              />
              <textarea
                id="message"
                name="message"
                placeholder="How can we help?"
                onChange={onChange}
                value={state.message}
              ></textarea>
            </div>
            <button
              onClick={onSumbit}
              disabled={loading}
              style={{
                opacity: loading ? 0.5 : 1,
              }}
            >
              Submit
            </button>
            <div className="contact-us-bottom-text">
              By contacting us, you agree to our Terms of service and Privacy
              Policy
            </div>
          </form>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default ContactUs;
