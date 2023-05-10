import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class ContactListEl extends Component {
  render() {
    const { contact, onRemove } = this.props;
    const {id, name, number } = contact;
    return (
      <li key={id}>
          {name}: {number}
        <button type="button" onClick={() => onRemove(id)}>
          Delete
        </button>
      </li>
    );
  }
}

ContactListEl.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,

  onRemove: PropTypes.func.isRequired,
};
