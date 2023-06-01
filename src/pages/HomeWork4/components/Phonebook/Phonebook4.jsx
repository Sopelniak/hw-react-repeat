import { useEffect, useState } from "react";
import { FormAddContact } from "./FormAddContact/FormAddContact";
import { ContactsList } from "./ContactsList/ContactsList";
import { Filter } from "./Filter/Filter";
import { Section } from "./Section/Section";

export const Phonebook4 = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const contactsInLS = localStorage.getItem("contacts");
    if (!!contactsInLS) {
      setContacts(JSON.parse(contactsInLS));
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      localStorage.setItem("contacts", JSON.stringify(contacts));
    }, 500);
  }, [contacts]);

  const addContact = (newContact) => {
    if (
      contacts.find(
        (contact) =>
          contact.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      alert(`${newContact.name} is already in the contacts`);
    } else {
      setContacts((prevContacts) => [...prevContacts, newContact]);
    }
  };

  const filterHandler = (e) => {
    setFilter(e.target.value);
  };

  const filterContacts = () =>
    contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

  const deleteContact = (id) => {
    setContacts((prevContacts) => {
      const contactsUpdate = prevContacts.filter(
        (contact) => contact.id !== id
      );
      return contactsUpdate;
    });
  };

  const filteredContacts = filterContacts();
  return (
    <>
      <h1>Книга контактів</h1>
      <Section>
        <FormAddContact addContact={addContact} />
      </Section>

      <Section>
        <h2>Contacts</h2>
        {filteredContacts.length > 0 ? (
          <Filter onFilter={filterHandler} filter={filter} />
        ) : (
          <p>There is no contacts</p>
        )}
        <ContactsList
          contacts={filteredContacts}
          deleteContact={deleteContact}
        />
      </Section>
    </>
  );
};
