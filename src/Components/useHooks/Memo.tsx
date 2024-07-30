import { useMemo, useState } from 'react';

import { initialItems } from './utils';

function Memo() {
  const [count, setCount] = useState(0);
  const [items] = useState(initialItems);

  const selectedItem = useMemo(
    () => items.find((item) => item.isSelected),
    [ items],
  );

//   const selectedItem = items.find((item) => item.isSelected)

  return (
    <div>
      <h1>Count: {count}</h1>
      <h1>Final Item: {selectedItem?.id}</h1>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

export default Memo;