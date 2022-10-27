import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectError,
  selectFilter,
  selectIsLoading,
} from 'redux/selectors';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactsList } from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import styles from './App.module.css';
import { fetchContacts } from 'redux/thunk';

export const App = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const hendleAddContact = contact => {
    if (contacts.some(({ name }) => name === contact.name)) {
      alert(`${contact.name} is already in contacts!`);
      return;
    }
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.formWrapper}>
        <h1>Phonebook</h1>
        <ContactForm hendleAddContact={hendleAddContact} />

        {!!contacts.length && (
          <>
            <h2>Contacts</h2>
            <Filter />
            {isLoading && !error && <p>Loading contacts...</p>}
            {error && (
              <p className={styles.error}>
                Ooops, something went wrong! {error}
              </p>
            )}
            <ContactsList contacts={filteredContacts} />
          </>
        )}
      </div>
    </div>
  );
};
