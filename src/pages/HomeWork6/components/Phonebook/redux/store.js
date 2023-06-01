import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

export const actionAddContact = createAction("contacts/addContact");
export const actionDeleteContact = createAction("contacts/deleteContact");
export const actionUpdateContacts = createAction("contacts/updateContacts");

const contactsReducer = createReducer([], {
  [actionAddContact]: (state, action) => {
    state.push(action.payload);
  },
  [actionDeleteContact]: (state, action) =>
    state.filter((contact) => contact.id !== action.payload),
  [actionUpdateContacts]: (state, action) => [...action.payload],
});

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});
