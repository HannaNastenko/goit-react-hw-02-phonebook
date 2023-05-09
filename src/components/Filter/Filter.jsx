import React, { Component } from 'react';

export class Filter extends Component {
  render() {
    const { filter, onFilterChange } = this.props;
    return (
      <label>
        Find contacts by name
        <input
          type="text"
          value={filter}
          onChange={onFilterChange}
        />
      </label>
    );
  }
}
