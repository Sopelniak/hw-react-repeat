import { Component } from "react";
import { FormAddContact } from "./FormAddContact/FormAddContact";

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

  addContact = (newContact) => {
    this.setState((prevState) => {
      return {
        contacts: [...prevState.contacts, newContact],
      };
    });
  };

  onFilter = (e) => {
    this.setState({ filter: e.target.value });
  };

  filterContacts = () =>
    this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );

  render() {
    const { filter } = this.state;
    const contacts = this.filterContacts();
    return (
      <>
        <h1>Книга контактів</h1>
        <FormAddContact addContact={this.addContact} />
        <h2>Contacts</h2>
        <label>
          Filter contacts by name
          <input
            onChange={this.onFilter}
            value={filter}
            name="filter"
            type="text"
          />
        </label>

        <ol>
          {contacts.map((contact) => {
            return (
              <li key={contact.id}>
                <span>{contact.name}</span>
                <span> - {contact.number}</span>
              </li>
            );
          })}
        </ol>
      </>
    );
  }
}
