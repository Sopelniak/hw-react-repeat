import PropTypes from "prop-types";
import { Contact } from "./Contact/Contact";

export const ContactsList = ({ contacts, deleteContact }) => (
  <ol>
    {contacts.map((contact) => (
      <Contact
        key={contact.id}
        contact={contact}
        deleteContact={deleteContact}
      />
    ))}
  </ol>
);

ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
