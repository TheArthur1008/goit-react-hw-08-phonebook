import { useSelector } from 'react-redux';
import { useGetContactQuery } from 'redux/api/ContactsApi';
import ContactListItem from 'сomponents/ContactListItem';

import { Spinner } from '@chakra-ui/react';

const ContactList = () => {
  const { data, isFetching } = useGetContactQuery();
  const filter = useSelector(state => state.filter);

  const contacts =
    data && data.filter(contact => contact.name.toLowerCase().includes(filter));

  return (
    <>
      {data && data.length !== 0 && (
        <ul>
          {contacts.length !== 0 ? (
            contacts.map(contact => (
              <ContactListItem key={contact.id} {...contact} />
            ))
          ) : (
            <p>no search contacts: {filter}</p>
          )}
        </ul>
      )}
      {data && data.length === 0 && <p>'You have no contacts'</p>}
      {isFetching && (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      )}
    </>
  );
};

export default ContactList;
