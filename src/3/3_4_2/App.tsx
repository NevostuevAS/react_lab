// 3_4_2 Swap two form fields
/*
  Эта форма позволяет вводить имя и фамилию. В ней также есть флажок, контролирующий, какое поле будет первым. Если установить флажок, поле "Фамилия" появится перед полем "Имя".

  Это почти работает, но есть ошибка. Если вы заполните поле "Имя" и установите флажок, текст останется в первом поле (теперь это "Фамилия"). Исправьте это так, чтобы при изменении порядка ввода текст также перемещался.
*/

import { useState } from 'react';

export default function App() {
  const [reverse, setReverse] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  let checkbox = (
    <label>
      <input
        type="checkbox"
        checked={reverse}
        onChange={e => setReverse(e.target.checked)}
      />
      Reverse order
    </label>
  );

  if (reverse) {
    return (
      <>
        <Field label="Last name" value={lastName} onChange={e => setLastName(e.target.value)} />
        <Field label="First name" value={firstName} onChange={e => setFirstName(e.target.value)} />
        {checkbox}
      </>
    );
  } else {
    return (
      <>
        <Field label="First name" value={firstName} onChange={e => setFirstName(e.target.value)} />
        <Field label="Last name" value={lastName} onChange={e => setLastName(e.target.value)} />
        {checkbox}
      </>
    );
  }
}

function Field({ label, value, onChange }: { label: string; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) {
  return (
    <label>
      {label}:{' '}
      <input
        type="text"
        value={value}
        placeholder={label}
        onChange={onChange}
      />
    </label>
  );
}


