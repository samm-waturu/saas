import { FontFetchHeebo, FontFetchSans } from "@/app/fonts/fonts";

const Contact = () => {
  return (
    <div className={FontFetchHeebo.className}>
      <div className="style_fn_pagetitle">
        <h2 className="title">Contact Us</h2>
      </div>
      <div className="contactpage">
        <div className="container small" style={{ lineHeight: 1.8 }}>
          <p>
            We value your feedback, inquiries, and suggestions. Please
            feel free to reach out to us using the contact form below.
            Our dedicated team is ready to assist you with any
            questions or concerns you may have.
          </p>
          <p style={{ paddingBottom: 25 }}>
            Please fill out the form with your contact information and
            a detailed message, and we will get back to you as soon as
            possible. Your privacy is important to us, and we will
            never share your information with third parties.
          </p>

          <div className="fn_contact_form">
            <form
              className="contact_form"
              id="contact_form"
              autoComplete="off">
              <div className="input_list">
                <ul>
                  <li>
                    <input
                      id="name"
                      type="text"
                      placeholder="Full Name *"
                    />
                  </li>
                  <li>
                    <input
                      id="email"
                      type="text"
                      placeholder="Email *"
                    />
                  </li>
                  <li>
                    <input id="tel" type="text" placeholder="Phone" />
                  </li>
                  <li>
                    <textarea
                      id="message"
                      placeholder="Your Message *"></textarea>
                  </li>
                  <li>
                    <div>
                      <a
                        id="send_message"
                        href="contact.html#"
                        className="style_fn_button">
                        <span>Send Message</span>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
              <div
                className="returnmessage"
                data-success="Your message has been received, We will contact you soon."></div>
              <div className="empty_notice">
                <span>! Please Fill Required Fields !</span>
              </div>
            </form>
          </div>
          <div className="fn__space__30"></div>

          <hr data-h="2" />
          <div className="fn__space__10"></div>
          <p>
            In case you prefer to contact us through other means, you
            can also find our phone number and mailing address listed
            below. We strive to provide exceptional customer service
            and ensure that your experience with us is seamless.
          </p>
          <p>
            Thank you for choosing us as your trusted resource. We
            look forward to hearing from you!
          </p>
          <p>
            Contact Information:
            <br />
            Phone:{" "}
            <span className="heading_color">[Insert Phone Number]</span>
            <br />
            Address:{" "}
            <span className="heading_color">
              [Insert Mailing Address]
            </span>
          </p>
          <p>
            Please note that our office hours are [Insert Office
            Hours]. While we endeavor to respond to all inquiries
            promptly, there may be slight delays during weekends and
            holidays.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
