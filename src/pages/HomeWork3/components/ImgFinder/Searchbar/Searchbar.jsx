import React from "react";
import css from "./Searchbar.module.css";
import { SearchForm } from "./SearchForm/SearchForm";

export function Searchbar() {
  return (
    <div class={css.searchbar}>
      <SearchForm />
    </div>
  );
}
