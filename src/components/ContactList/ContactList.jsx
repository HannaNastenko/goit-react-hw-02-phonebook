import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ContactListEl } from '../ContactListEl';

export class ContactList extends Component {
  render() {
    const { visibleContacts, onRemove } = this.props;
    console.log(visibleContacts)
    return (
      <ul>
        {visibleContacts.map(visibleContact => (
          <ContactListEl contact={visibleContact} onRemove={onRemove}/>
        ))}
      </ul>
    );
  }
}

ContactList.propTypes = {
  visibleContacts: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  onRemove: PropTypes.func.isRequired,
};
