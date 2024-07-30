import { createContext, useContext } from 'react';

import { User } from './index';

export const ViewPageContext = createContext<User | undefined>(undefined);

export function useUserContext() {
  const user = useContext(ViewPageContext);

  if (user === undefined) {
    throw new Error('useUserContext must be used with a ViewPageContext');
  }

  return user;
}