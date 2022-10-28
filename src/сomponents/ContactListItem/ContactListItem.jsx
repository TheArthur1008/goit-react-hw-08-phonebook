import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { Flex, Box, Button } from '@chakra-ui/react';
import { useDeleteContactsMutation } from 'redux/ContactsApi';

function ContactListItem({ name, number, id }) {
  const [deleteContacts, { isLoading: isDeleting, isSuccess, error }] =
    useDeleteContactsMutation();

  useEffect(() => {
    isSuccess && toast.info(` ${name} was removed from the phone book`);
    error && toast.error('oops something went wrong');
  }, [isSuccess, name, error]);

  return (
    <Box key={id} mb="5">
      <Flex alignItems="center" justifyContent="space-between" w="400px" mb="5">
        {name}: {number}
        <Button
          type="button"
          onClick={() => deleteContacts(id)}
          disabled={isDeleting}
        >
          {isDeleting ? 'Delete...' : 'Delete'}
        </Button>
      </Flex>
    </Box>
  );
}

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default ContactListItem;
