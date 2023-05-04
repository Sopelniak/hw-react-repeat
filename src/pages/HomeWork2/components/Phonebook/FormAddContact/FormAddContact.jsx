import { nanoid } from "nanoid";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { schema } from "./ValidationSchema";
import css from "./FormAddContact.module.css";

// export class FormAddContact extends Component {
//   static propTypes = {
//     addContact: PropTypes.func.isRequired,
//   };

//   state = { name: "", number: "" };

//   handleChange = (e) => {
//     this.setState({ [e.target.name]: e.target.value });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();
//     const newContact = {
//       name: this.state.name,
//       number: this.state.number,
//       id: nanoid(),
//     };
//     this.props.addContact(newContact);
//     this.reset();
//   };

//   reset = () => {
//     this.setState({ name: "", number: "" });
//   };

//   render() {
//     const { name, number } = this.state;

//     return (
//       // <form onSubmit={this.handleSubmit}>
//       <Box
//         component="form"
//         sx={{
//           "& .MuiTextField-root": { m: 1, width: "25ch" },
//         }}
//         onSubmit={this.handleSubmit}
//       >
//         <label>
//           Name
//           <input
//             onChange={this.handleChange}
//             value={name}
//             type="text"
//             name="name"
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//           />
//         </label>

//         <label>
//           Number
//           <input
//             onChange={this.handleChange}
//             value={number}
//             type="tel"
//             name="number"
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//           />
//         </label>

//         <Button type="submit" variant="contained" endIcon={<SendIcon />}>
//           Add contact
//         </Button>
//       </Box>

//       // </form>
//     );
//   }
// }

const INITIAL_VALUES = { name: "", number: "" };

export function FormAddContact({ addContact }) {
  const onSubmit = (values, actions) => {
    const newContact = {
      ...values,
      id: nanoid(),
    };
    addContact(newContact);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      onSubmit={onSubmit}
      validationSchema={schema}
    >
      <Form className={css.form}>
        <label>
          Name
          <Field type="text" name="name" />
          <ErrorMessage component="span" name="name" />
        </label>

        <label>
          Number
          <Field type="tel" name="number" />
          <ErrorMessage component="span" name="number" />
        </label>

        <Button type="submit" variant="contained" endIcon={<SendIcon />}>
          Add contact
        </Button>
      </Form>
    </Formik>
  );
}

FormAddContact.propTypes = {
  addContact: PropTypes.func.isRequired,
};
