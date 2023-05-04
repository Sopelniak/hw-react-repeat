import React, { Component } from "react";

export class SearchForm extends Component {
  state = {};
  render() {
    return (
      <form class="form">
        <button type="submit" class="button">
          <span class="button-label">Search</span>
        </button>

        <input
          class="input"
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
        />
      </form>
    );
  }
}
