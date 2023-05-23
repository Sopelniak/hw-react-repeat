import { Field, Form, Formik } from "formik";
// import React, { Component } from "react";

const INITIAL_VALUES = { request: "" };

// export className SearchForm extends Component {
//   state = {};
//   render() {
//     return (
//       <form className="form">
//         <button type="submit" className="button">
//           <span className="button-label">Search</span>
//         </button>

//         <input
//           className="input"
//           type="text"
//           autocomplete="off"
//           autofocus
//           placeholder="Search images and photos"
//         />
//       </form>
//     );
//   }
// }

export function SearchForm({ setQuery }) {
  const onSubmit = (values, actions) => {
    setQuery(values.request);
  };
  return (
    <Formik initialValues={INITIAL_VALUES} onSubmit={onSubmit}>
      <Form className="form" autoComplete="off">
        <button type="submit" className="button">
          <span className="button-label">Search</span>
        </button>

        <Field
          name="request"
          type="text"
          autoFocus
          placeholder="Search images and photos"
        />
      </Form>
    </Formik>
  );
}
