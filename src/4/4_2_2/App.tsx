// 4_2_2 Focus the search field
/*
  Сделайте так, чтобы нажатие на кнопку "Поиск" наводило фокус на поле.
*/

import { useRef } from 'react';

export default function Page() {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleFocus() {
    if (inputRef.current) {
      inputRef.current.focus(); 
    }
  }

  return (
    <>
      <nav>
        <button onClick={handleFocus}>Search</button>
      </nav>
      <input
        placeholder="Looking for something?"
        ref={inputRef}
      />
    </>
  );
}

