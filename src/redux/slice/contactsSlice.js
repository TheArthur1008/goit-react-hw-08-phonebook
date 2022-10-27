import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from 'redux/thunk';

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
const handleFulfilled = state => {
  state.isLoading = false;
  state.error = null;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.pending](state) {
      handlePending(state);
    },
    [fetchContacts.fulfilled](state, action) {
      handleFulfilled(state);
      state.items = action.payload;
    },
    [fetchContacts.rejected](state, action) {
      handleRejected(state, action);
    },
    [addContact.pending](state) {
      handlePending(state);
    },
    [addContact.fulfilled](state, action) {
      handleFulfilled(state);
      state.items = [...state.items, action.payload];
    },
    [addContact.rejected](state, action) {
      handleRejected(state, action);
    },
    [deleteContact.pending](state) {
      handlePending(state);
    },
    [deleteContact.fulfilled](state, action) {
      handleFulfilled(state);
      state.items = state.items.filter(
        contact => contact.id !== action.payload.id
      );
    },
    [deleteContact.rejected](state, action) {
      handleRejected(state, action);
    },
  },
});

export default contactsSlice.reducer;
