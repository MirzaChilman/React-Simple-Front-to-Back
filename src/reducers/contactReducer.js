import { GET_CONTACTS } from '../actions/types';

const initialState = {
  contacts: [
    {
      id: 1,
      name: 'Mirza',
      email: 'mirzachilman@gmail.com',
      phone: '1231231'
    },
    {
      id: 2,
      name: 'Karena',
      email: 'karena@gmail.com',
      phone: '1231231'
    },
    {
      id: 3,
      name: 'Difa',
      email: 'difa@gmail.com',
      phone: '1231231'
    }
  ]
};
export default function(state = initialState, action) {
  switch (action.typee) {
    case GET_CONTACTS:
      return {
        ...state
      };
    default:
      return state;
  }
}
