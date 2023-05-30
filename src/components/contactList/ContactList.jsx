import React from 'react';
import css from './ContactList.module.css';
import { getVisibleContacts } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';

const ContactList = () => {
  const visibleContacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  return (
    <ul className={css.contactsList}>
      {visibleContacts.map(contact => (
        <li className={css.contactsItem} key={contact.id}>
          <span>{contact.name}:</span> <span>{contact.number}</span>
          <button
            className={css.contactsBtn}
            type="button"
            onClick={() => dispatch(deleteContact(contact.id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
