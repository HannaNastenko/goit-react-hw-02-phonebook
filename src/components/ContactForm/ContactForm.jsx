import React, { Component } from 'react';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  

  handleInputNameChange = e => {
    this.setState({
      name: e.currentTarget.value,
    });
  };

  handleInputNumberChange = e => {
    this.setState({
      number: e.currentTarget.value,
    });
  };


  handleSubmit = e => {
    const { addContact } = this.props;

    e.preventDefault();

    const { name, number } = this.state;
    addContact({ name, number });

    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleInputNameChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <label>
            Number
            <input
              type="tel"
              name="number"
              value={number}
              onChange={this.handleInputNumberChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
