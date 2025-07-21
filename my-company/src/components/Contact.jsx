// import React from 'react'
// import Navbar from "./Navbar.jsx";
// import { useState } from 'react';
// import "./Contact.css";
// function Contact() {
//     const [name, setName] = useState("");
//     const [password, setPassword] = useState("");
//     const [email, setEmail] = useState("");
//   return (
//     <div>
//       <h2>Contact Page</h2>
//       <form action="">
//         <label htmlFor="name">Name</label>
//         <input
//           type="text"
//                   placeholder="Enter your name"
//                   value={name}
//           required
//           onChange={(e) => setName(e.target.value)}
//         />
//         <label htmlFor="password">Password</label>
//         <input
//           type="password"
//           placeholder="Enter your password"
//                   name="password"
//                   value={password}
//           required
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <label htmlFor="email">Email</label>
//         <input
//           type="email"
//           placeholder="Enter your email"
//           onChange={(e) => setEmail(e.target.value)}
//                   required
//                   value={email}
//         />
//         <button type="submit">Submit</button>
//           </form>
//           <p>Name:{name} password: {password} Email:{ email}</p>
//     </div>
//   );
// }

// export default Contact


import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          style={{ display: "block", margin: "10px 0" }}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          style={{ display: "block", margin: "10px 0" }}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          style={{ display: "block", margin: "10px 0" }}
        />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;