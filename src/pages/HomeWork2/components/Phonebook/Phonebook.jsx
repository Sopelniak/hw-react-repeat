import { nanoid } from "nanoid";
import { Component } from "react";

export class Phonebook extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    name: "",
    number: "",
    filter: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newContact = {
      name: this.state.name,
      number: this.state.number,
      id: nanoid(),
    };
    this.setState((prevState) => {
      return {
        contacts: [...prevState.contacts, newContact],
      };
    });
    this.reset();
  };

  onFilter = (e) => {
    this.setState({ filter: e.target.value });
  };

  filterContacts = () =>
    this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );

  reset = () => {
    this.setState({ name: "", number: "" });
  };

  render() {
    const { name, number, filter } = this.state;
    const contacts = this.filterContacts();
    return (
      <>
        <h1>Книга контактів</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              onChange={this.handleChange}
              value={name}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label>
            Number
            <input
              onChange={this.handleChange}
              value={number}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <button>Add contact</button>
        </form>
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
