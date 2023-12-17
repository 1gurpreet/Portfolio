function Contact({ email }) {
  console.log(email);
  return (
    <div
      className="container d-flex flex-column align-items-center justify-content-center scoll-appear-animation"
      id="contact"
    >
      <div className="row">
        <div className="col">
          <h2 className="text">
            {" "}
            Contact{" "}
          </h2>
        </div>
      </div>
      <div className="text">Feel free to reach out and say hi 👋:</div>
      <div>
        <a className="btn text btn-outline" href={`mailto:${email}`}>
          ✉️ Email Me
        </a>
      </div>
    </div>
  );
}

export default Contact;
