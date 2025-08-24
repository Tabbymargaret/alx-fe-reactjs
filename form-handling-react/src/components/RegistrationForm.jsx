// import React from "react";
// import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";
// import { useState } from "react";
// import "./RegistrationForm.css";
// import * as Yup from "yup";

// function handleSubmit(e) {
//   e.preventDefault();
//   // Handle form submission logic here
// }

// function RegistrationForm() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });
//     const errorMessages = document.querySelectorAll(".error-message");
//   function validation() {
//     console.log("Validation function called");
//     console.log(formData);
//     // Perform validation logic here
//     if (
//       !formData.name ||
//       !formData.email ||
//       !formData.password ||
//       !formData.confirmPassword
//     ) {
//       alert("Please fill in all fields.");
//       return false;
//     }
//     if (formData.password !== formData.confirmPassword) {
//       errorMessages[3].style.display = "block";
//       return false;
//     }
//     return true;
//   }

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   return (
//     <div>
//       <form action="#" onSubmit={handleSubmit}>
//         <div className="input-group">
//           <label htmlFor="name">Name:</label>
//           <input
//             type="text"
//             placeholder="Enter your name"
//             name="name"
//             pattern="[A-Za-z\s]+"
//             required
//             value={formData.name}
//             onChange={handleChange}
//           />
//           <span>Name is required</span>
//         </div>
//         <label htmlFor="email">Email:</label>
//         <div className="input-group">
//           <input
//             type="email"
//             placeholder="Enter your email"
//             name="email"
//             required
//             value={formData.email}
//             onChange={handleChange}
//           />
//           <span>Email is required</span>
//         </div>
//         <div className="input-group">
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             placeholder="Enter your password"
//             name="password"
//             pattern=".{6,}"
//             required
//             value={formData.password}
//             onChange={handleChange}
//           />
//           <span>Password is required</span>
//         </div>
//         <div className="input-group">
//           <label htmlFor="confirmPassword">Confirm Password:</label>
//           <input
//             type="password"
//             placeholder="Enter your password"
//             name="confirmPassword"
//             pattern={formData.password}
//             required
//             value={formData.confirmPassword}
//             onChange={handleChange}
//           />
//           <span>Passwords do not match</span>
//         </div>
//         <button type="submit" onClick={validation}>
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }

// const validate = (values) => {
//   const errors = {};

//   if (!values.firstName) {
//     errors.firstName = "Required";
//   } else if (values.firstName.length > 15) {
//     errors.firstName = "Must be 15 characters or less";
//   }

//   if (!values.lastName) {
//     errors.lastName = "Required";
//   } else if (values.lastName.length > 20 || values.lastName.length < 3) {
//     errors.lastName = "Must be between 3 and 20 characters";
//   }

//   if (!values.email) {
//     errors.email = "Required";
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//     errors.email = "Invalid email address";
//   }
//   if (!values.password) {
//     errors.password = "Required";
//   } else if (values.password.length < 6) {
//     errors.password = "Must be at least 6 characters";
//   }
//   if (!values.confirmPassword) {
//     errors.confirmPassword = "Required";
//   } else if (values.confirmPassword !== values.password) {
//     errors.confirmPassword = "Passwords must match";
//   }

//   return errors;
// };

// const RegistrationForm = () => {
//   const formik = useFormik({
//     initialValues: {
//       firstName: "",
//       lastName: "",
//       email: "",
//       password: "",
//       confirmPassword: "",
//     },
//     validate,
//     onSubmit: (values) => {
//       alert(JSON.stringify(values, null, 2));
//     },
//   });
//   return (
//     <form action="#" onSubmit={formik.handleSubmit}>
//       <div className="input-group">
//         <label htmlFor="firstName">First Name</label>
//         <input
//           type="text"
//           id="firstName"
//           name="firstName"
//           placeholder="Enter your first name"
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           value={formik.values.firstName}
//         />
//         {formik.errors.firstName && (
//           <span className="error-message">{formik.errors.firstName}</span>
//         )}
//       </div>
//       <div className="input-group">
//         <label htmlFor="lastName">Last Name</label>
//         <input
//           type="text"
//           id="lastName"
//           name="lastName"
//           placeholder="Enter your last name"
//           onBlur={formik.handleBlur}
//           onChange={formik.handleChange}
//           value={formik.values.lastName}
//         />
//         {formik.touched.lastName && <div>{formik.errors.lastName}</div>}
//       </div>
//       <div className="input-group">
//         <label htmlFor="email">Email</label>
//         <input
//           type="email"
//           id="email"
//           name="email"
//           placeholder="Enter your email"
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           value={formik.values.email}
//         />
//         {formik.touched.email && <div>{formik.errors.email}</div>}
//       </div>
//       <div className="input-group">
//         <label htmlFor="password"> Password</label>
//         <input
//           type="password"
//           id="password"
//           name="password"
//           placeholder="Enter your password"
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           value={formik.values.password}
//         />
//         {formik.touched.password && <div>{formik.errors.password}</div>}
//       </div>
//       <div className="input-group">
//         <label htmlFor="confirmPassword">Confirm Password</label>
//         <input
//           type="password"
//           id="confirmPassword"
//           name="confirmPassword"
//           placeholder="Confirm your password"
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           value={formik.values.confirmPassword}
//         />
//         {formik.touched.confirmPassword && (
//           <div>{formik.errors.confirmPassword}</div>
//         )}
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// const validationSchema = Yup.object({
//   firstName: Yup.string()
//     .required("Required")
//     .min(3, "Must be at least 3 characters")
//     .max(15, "Must be 15 characters or less"),

//   lastName: Yup.string()
//     .required("Required")
//     .min(3, "Must be at least 3 characters")
//     .max(20, "Must be 20 characters or less"),

//   email: Yup.string().required("Required").email("Invalid email address"),

//   password: Yup.string()
//     .required("Required")
//     .min(6, "Must be at least 6 characters"),

//   confirmPassword: Yup.string()
//     .required("Required")
//     .oneOf([Yup.ref("password"), null], "Passwords must match"),
// });

// const RegistrationForm = () => {
//   return (
//     <Formik
//       initialValues={{
//         firstName: "",
//         lastName: "",
//         email: "",
//         password: "",
//         confirmPassword: "",
//       }}
//       validationSchema={validationSchema}
//       onSubmit={(values) => {
//         alert(JSON.stringify(values, null, 2));
//       }}
//     >
//       <Form>
//         <div className="input-group">
//           <label htmlFor="firstName">First Name</label>
//           <Field
//             type="text"
//             id="firstName"
//             name="firstName"
//             placeholder="Enter your first name"
//           />
//           <ErrorMessage name="firstName" component="div" />
//         </div>

//         <div className="input-group">
//           <label htmlFor="lastName">Last Name</label>
//           <Field
//             type="text"
//             id="lastName"
//             name="lastName"
//             placeholder="Enter your last name"
//           />
//           <ErrorMessage name="lastName" component="div" />
//         </div>

//         <div className="input-group">
//           <label htmlFor="email">Email</label>
//           <Field
//             type="email"
//             id="email"
//             name="email"
//             placeholder="Enter your email"
//           />
//           <ErrorMessage name="email" component="div" />
//         </div>

//         <div className="input-group">
//           <label htmlFor="password">Password</label>
//           <Field
//             type="password"
//             id="password"
//             name="password"
//             placeholder="Enter your password"
//           />
//           <ErrorMessage name="password" component="div" />
//         </div>

//         <div className="input-group">
//           <label htmlFor="confirmPassword">Confirm Password</label>
//           <Field
//             type="password"
//             id="confirmPassword"
//             name="confirmPassword"
//             placeholder="Confirm your password"
//           />
//           <ErrorMessage name="confirmPassword" component="div" />
//         </div>

//         <button type="submit">Submit</button>
//       </Form>
//     </Formik>
//   );
// };

// export default RegistrationForm;


import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./RegistrationForm.css";

const validationSchema = Yup.object({
  firstName: Yup.string()
    .required("Required")
    .min(3, "Must be at least 3 characters")
    .max(15, "Must be 15 characters or less"),

  lastName: Yup.string()
    .required("Required")
    .min(3, "Must be at least 3 characters")
    .max(20, "Must be 20 characters or less"),

  email: Yup.string().required("Required").email("Invalid email address"),

  password: Yup.string()
    .required("Required")
    .min(6, "Must be at least 6 characters"),

  confirmPassword: Yup.string()
    .required("Required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

const RegistrationForm = () => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        alert(JSON.stringify(values, null, 2));
      }}
    >
      <Form>
        <div className="input-group">
          <label htmlFor="firstName">First Name</label>
          <Field
            type="text"
            id="firstName"
            name="firstName"
            placeholder="Enter your first name"
          />
          <ErrorMessage
            name="firstName"
            component="div"
            className="error-message"
          />
        </div>

        <div className="input-group">
          <label htmlFor="lastName">Last Name</label>
          <Field
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Enter your last name"
          />
          <ErrorMessage
            name="lastName"
            component="div"
            className="error-message"
          />
        </div>

        <div className="input-group">
          <label htmlFor="email">Email</label>
          <Field
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
          />
          <ErrorMessage
            name="email"
            component="div"
            className="error-message"
          />
        </div>

        <div className="input-group">
          <label htmlFor="password">Password</label>
          <Field
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
          />
          <ErrorMessage
            name="password"
            component="div"
            className="error-message"
          />
        </div>

        <div className="input-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <Field
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm your password"
          />
          <ErrorMessage
            name="confirmPassword"
            component="div"
            className="error-message"
          />
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;