import { Contact } from "./Contact/Contact";

export const ContactsList = ({ contacts }) => (
  <ol>
    {contacts.map((contact) => (
      <Contact key={contact.id} contact={contact} />
    ))}
  </ol>
);
