import { createSelector } from '@reduxjs/toolkit';

export const getContacts = ({ contacts: { items } }) => items;
export const getFilter = ({ filter }) => filter;
export const getIsLoading = ({ contacts: { isLoading } }) => isLoading;
export const getError = ({ contacts: { error } }) => error;

export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectUser = state => state.auth.user;
export const selectIsRefreshing = state => state.auth.isRefreshing;

export const getVisibleContacts = createSelector(
  [getContacts, getFilter],
  (items, filter) => {
    if (!filter) {
      return items;
    }

    return items.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
