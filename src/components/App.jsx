import React, { Component } from 'react';
// import { nanoid } from 'nanoid';
// import Contact from './Contact/Contact';
import ContactForm from './ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    // name: '',
    // number: '',
    filter: '',
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

  findContacts() {
    const searching = this.state.filter.toLowerCase();
    const findContact = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(searching)
    );
    return findContact;
  }

  formSubmitHandler = data => {
    console.log(data);
    this.setState({ contacts: data });
  };
  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />

        <h2>Contacts</h2>
        <Filter onChange={this.handleChange} value={this.state.filter} />
        <ContactList contacts={this.findContacts()} />
      </div>
    );
  }
}
