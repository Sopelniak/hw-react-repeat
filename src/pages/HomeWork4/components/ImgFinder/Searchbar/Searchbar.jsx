import React from "react";
import css from "./Searchbar.module.css";
import { SearchForm } from "./SearchForm/SearchForm";

export function Searchbar({ setQuery }) {
  return (
    <div className={css.searchbar}>
      <SearchForm setQuery={setQuery} />
    </div>
  );
}
