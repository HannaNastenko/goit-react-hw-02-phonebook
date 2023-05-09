import React, { Component } from 'react';
import { ContactListEl } from '../ContactListEl';

export class ContactList extends Component {
  render() {
    const { visibleContacts } = this.props;
    return (
      <ul>
        {visibleContacts.map(visibleContact => (
          <ContactListEl contact={visibleContact} />
        ))}
      </ul>
    );
  }
}
