import React, { Component } from 'react';

export class ContactListEl extends Component {
  render() {
    const { contact } = this.props;
    const { id, name, number } = contact;
    return (
      <li key={id}>
        <p>
          {name}: {number}
        </p>
      </li>
    );
  }
}
