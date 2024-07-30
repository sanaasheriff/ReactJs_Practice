// // actions/userActions.ts
// import { ThunkAction } from 'redux-thunk';
// import { RootState } from '../reducers';
// import { AnyAction } from 'redux';

// export const addUser = (user: { email: string; password: string }) => ({
//   type: 'ADD_USER',
//   payload: user,
// });

// export const setUsers = (users: { email: string; password: string }[]) => ({
//   type: 'SET_USERS',
//   payload: users,
// });

// export const loadUsersFromStorage = (): ThunkAction<void, RootState, unknown, AnyAction> => (dispatch) => {
//   const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
//   dispatch(setUsers(storedUsers));
// };
