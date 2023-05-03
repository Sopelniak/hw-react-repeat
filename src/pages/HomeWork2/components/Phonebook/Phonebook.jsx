import { Component } from "react";
import { FormAddContact } from "./FormAddContact/FormAddContact";
import { ContactsList } from "./ContactsList/ContactsList";
import { Filter } from "./Filter/Filter";
import { Section } from "./Section/Section";

export class Phonebook extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  componentDidMount() {
    const contactsInLS = JSON.parse(localStorage.getItem("contacts"));
    if (contactsInLS.length !== 0) {
      this.setState({ contacts: contactsInLS });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  addContact = (newContact) => {
    const { contacts } = this.state;
    if (
      contacts.find(
        (contact) =>
          contact.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      alert(`${newContact.name} is already in the contacts`);
    } else {
      this.setState((prevState) => {
        return {
          contacts: [...prevState.contacts, newContact],
        };
      });
    }
  };

  filterHandler = (e) => {
    this.setState({ filter: e.target.value });
  };

  filterContacts = () =>
    this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );

  deleteContact = (id) => {
    this.setState((prevState) => {
      const contactsUpdate = prevState.contacts.filter(
        (contact) => contact.id !== id
      );
      return { contacts: contactsUpdate };
    });
  };

  render() {
    const contacts = this.filterContacts();
    return (
      <>
        <h1>Книга контактів</h1>
        <Section title="">
          <FormAddContact addContact={this.addContact} />
        </Section>

        <Section>
          <h2>Contacts</h2>
          {this.state.contacts.length > 0 ? (
            <Filter onFilter={this.filterHandler} filter={this.state.filter} />
          ) : (
            <p>There is no contacts</p>
          )}
          <ContactsList
            contacts={contacts}
            deleteContact={this.deleteContact}
          />
        </Section>
      </>
    );
  }
}
