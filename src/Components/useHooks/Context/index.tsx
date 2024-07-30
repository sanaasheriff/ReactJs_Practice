import { useState } from 'react';

import { ViewPageContext } from './context';
import ViewPage from './ViewPage';

export interface User {
  isPresent: boolean;
  name: string;
}

interface DemoProps {}

export default function ContextDemo({}: DemoProps) {
  const [user] = useState<User>({
    isPresent: true,
    name: 'Josh',
  });

  return (
    <div>
      <ViewPageContext.Provider value={user}>
        <ViewPage />
      </ViewPageContext.Provider>
    </div>
  );
}