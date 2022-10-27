import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/thunk';
import styles from './ContactForm.module.css';

export const ContactForm = () => {
  const contactList = useSelector(selectContacts);
  const dispatch = useDispatch();

  const hendleSubmitForm = event => {
    event.preventDefault();
    const form = event.target;

    const name = event.target.elements.name.value;
    const number = event.target.elements.number.value;

    if (contactList.some(contact => contact.name === name)) {
      alert(`${name} is already in contacts!`);
      return form.reset();
    }

    dispatch(addContact({ name, number }));
    form.reset();
  };

  return (
    <form className={styles.form} onSubmit={hendleSubmitForm}>
      <label className={styles.label}>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          className={styles.input}
        />
      </label>
      <label className={styles.label}>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          className={styles.input}
        />
      </label>

      <button type="submit" className={styles.button}>
        Add contacts
      </button>
    </form>
  );
};
