import { GET_CONTACTS, DELETE_CONTACT, ADD_CONTACT } from '../actions/types';

const initialState = {
  contacts: [
    {
      id: 1,
      name: 'Mirza',
      email: 'mirzachilman@gmail.com',
      phone: '1231231',
    },
    {
      id: 2,
      name: 'Karena',
      email: 'karena@gmail.com',
      phone: '1231231',
    },
    {
      id: 3,
      name: 'Difa',
      email: 'difa@gmail.com',
      phone: '1231231',
    },
  ],
};
export default function(state = initialState, action) {
  switch (action.typee) {
    case GET_CONTACTS:
      return {
        ...state,
      };
    case DELETE_CONTACT:
      console.log(action.payload);
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        ),
      };
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [action.payload, ...state.contacts],
      };
    default:
      return state;
  }
}
