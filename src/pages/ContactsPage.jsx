import React from 'react';
import { Navigate } from 'react-router-dom';
import Filter from 'сomponents/Filter';
import ContactList from 'сomponents/ContactList';
import ContactForm from 'сomponents/ContactForm';
import { Heading } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { getLoggedin } from 'redux/AuthSlise';
import { Box } from '@chakra-ui/react';

function ContactsView() {
  const isLogdedin = useSelector(getLoggedin);
  return (
    <Box w="400px" mx="auto" my="6">
      {!isLogdedin && <Navigate to="/" replace={true} />}
      <Heading mb={5}>Phonebook</Heading>
      <ContactForm />
      <Heading mb={5}>Contacts</Heading>
      <Filter />
      <ContactList />
    </Box>
  );
}

export default ContactsView;
