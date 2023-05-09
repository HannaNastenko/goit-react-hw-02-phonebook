import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from '../components/ContactForm';
import { Filter } from '../components/Filter';
import { ContactList } from '../components/ContactList';


export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };


  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };


  addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };


  getVisibleContacts = () => {
    const { filter, contacts } = this.state;

    const normalizeFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );

  }

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();
    const addContact = this.addContact;
    const changeFilter = this.changeFilter;
    
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm addContact={addContact} />
        <h2>Contacts</h2>
        <Filter value={filter} onFilterChange={changeFilter} />
        <ContactList visibleContacts={visibleContacts} />
      </div>
    );
  }
}
