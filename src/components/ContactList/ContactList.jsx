import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Button from 'components/Button/Button';
import styles from './ContactList.module.css';
import { deleteContact } from 'redux/thunk';

export const ContactsList = ({ contacts }) => {
  const dispatch = useDispatch();
  return (
    <ul className={styles.item}>
      {contacts.map(i => {
        return (
          <li key={i.id} className={styles.list}>
            {i.name}: {i.phone}{' '}
            <Button handleDeleteCard={() => dispatch(deleteContact(i.id))} />
          </li>
        );
      })}
    </ul>
  );
};

ContactsList.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
};
