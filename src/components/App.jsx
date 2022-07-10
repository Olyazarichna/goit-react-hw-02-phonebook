import React, { Component } from 'react';
// import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    // name: '',
    // number: '',
  };

  // handleChange = event => {
  //   const { name, number, value } = event.currentTarget;
  //   this.setState({ [name]: value, [number]: value });
  // };

  // handleSubmit = event => {
  //   event.preventDefault();

  //   const id = nanoid(5);

  //   const contact = {
  //     id,
  //     name: this.state.name,
  //     number: this.state.number,
  //   };
  //   this.setState(prev => ({
  //     contacts: [contact, ...prev.contacts],
  //   }));
  //   this.reset();
  // };

  // reset = () => {
  //   this.setState({ name: '', number: '' });
  // };

  handleSearch = event => {
    this.setState({ filter: event.currentTarget.value });
  };
  findContacts() {
    const searching = this.state.filter.toLowerCase();
    const findContact = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(searching)
    );
    console.log(findContact);
    return findContact;
  }
  handleFormSubmit = data => {
    console.log(data);
  };
  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.handleFormSubmit} />

        {/* <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Number
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={this.state.number}
              onChange={this.handleChange}
            />
          </label>

          <button type="submit">Add contact</button>
        </form> */}
        <h2>Contacts</h2>
        <label>
          Find contacts by name
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.filter}
          />
        </label>
        <ul>
          {this.state.contacts.map(({ id, name, number }) => {
            return (
              <li key={id}>
                {name}: {number}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
