import React from "react";


function Contact() {
  return (
    <div className="container">
      <br/>
        <h1>Contact Us</h1>
        <p>Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within a matter of hours to help you.
        </p>
        <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Your Name</label>
          <input type="name" className="form-control" id="inputName" aria-describedby="emailHelp" placeholder="Your Name" />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
       
        <label htmlFor="message">Your message</label>
        <div className="md-form">
        <textarea type="text" id="message" name="message" rows={2} className="form-control md-textarea" defaultValue={""} />
      </div>
        <br/>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      <br/>

      <div className="contactMethods">
      <div className="col-md-3 text-center">
        <ul className="list-unstyled mb-0">
          <li><i className="fas fa-map-marker-alt fa-2x" />
            <p>Philadelphia, PA 19140, USA</p>
          </li>
          <li><i className="fas fa-phone mt-4 fa-2x" />
            <p>+ 01 234 567 89</p>
          </li>
          <li><i className="fas fa-envelope mt-4 fa-2x" />
            <p>contact@mdbootstrap.com</p>
          </li>
        </ul>
      </div>
      </div>
    </div>
  );
}

export default Contact;
