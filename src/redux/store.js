import { configureStore } from '@reduxjs/toolkit';
import contactsSlice from './slice/contactsSlice';
import filterSlice from './slice/filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsSlice,
    filter: filterSlice,
  },
});
