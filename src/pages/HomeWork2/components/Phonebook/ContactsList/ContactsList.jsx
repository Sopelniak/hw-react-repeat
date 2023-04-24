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
