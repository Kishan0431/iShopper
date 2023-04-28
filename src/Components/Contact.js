import React from "react";
import Navbar from "./Navbar";

const Contact = () => {
  return (
    <>
      <Navbar />

      <div className="container-fluid">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.9047072819676!2d73.1676581!3d22.319443399999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc7484564e399%3A0x8eda072ed53719e5!2sMarsBazaar!5e0!3m2!1sen!2sin!4v1682659749281!5m2!1sen!2sin"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <h1 className="my-4 m-4 p2 text-center">Contact Us</h1>
      <div className="container w-50">
        <form action="https://formspree.io/f/xeqwvyzr" method="POST">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Full Name
            </label>
            <input
              type="text"
              name="username"
              autoComplete="off"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Write your name"
              required
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Email address
            </label>
            <input
              name="Email"
              type="email"
              class="form-control"
              autoComplete="off"
              required
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">
              Elaborate Your concern
            </label>
            <textarea
              name="message"
              autoComplete="off"
              required
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-warning my-4" value="send">
              Submit
            </button>
          </div>
        </form>
        <footer class="container">
          <p class="float-end">
            <a href="#">Back to top</a>
          </p>
          <p>
            © 2022–2023 iShopper, Inc. · <a href="#">Privacy</a> ·{" "}
            <a href="#">Terms</a>
          </p>
        </footer>
      </div>
    </>
  );
};

export default Contact;
