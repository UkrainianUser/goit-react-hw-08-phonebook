import ContactForm from 'components/contactForm/ContactForm';
import css from './Phonebook.module.css';
import Filter from 'components/filter/Filter';
import ContactList from 'components/contactList/ContactList';
import Loader from 'components/loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { getError, getIsLoading } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';

const Phonebook = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.phonebook}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {error && <p>{error}</p>}
      <ContactList />
      {isLoading && <Loader />}
    </div>
  );
};

export default Phonebook;
