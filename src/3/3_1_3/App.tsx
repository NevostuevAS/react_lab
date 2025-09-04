// 3_1_3 Refactor the imperative solution without React
/*
    В проекте приведена форма, реализованная на чистом JavaScript.

    Эта форма переключается между двумя режимами: в режиме редактирования вы видите вводимые данные, а в режиме просмотра - только результат. Метка кнопки меняется между "Редактировать" и "Сохранить" в зависимости от того, в каком режиме вы находитесь. Когда вы изменяете вводимые данные, приветственное сообщение внизу обновляется в режиме реального времени.

    Представьте, что React не существует. Можете ли вы переделать код в index.js таким образом, чтобы сделать логику менее хрупкой и более похожей на версию React? Как бы это выглядело, если бы состояние было явным, как в React?
*/


import React, { useState } from 'react';

export default function EditProfile() {
  const [state, setState] = useState({
    firstName: 'Jane',
    lastName: 'Jacobs',
    isEditing: false,
  });

  function toggleEdit() {
    setState(prev => ({ ...prev, isEditing: !prev.isEditing }));
  }

  function updateField(field, value) {
    setState(prev => ({ ...prev, [field]: value }));
  }

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        toggleEdit();
      }}
    >
      <label>
        First name:{' '}
        {state.isEditing ? (
          <input
            value={state.firstName}
            onChange={e => updateField('firstName', e.target.value)}
          />
        ) : (
          <b>{state.firstName}</b>
        )}
      </label>
      <br />
      <label>
        Last name:{' '}
        {state.isEditing ? (
          <input
            value={state.lastName}
            onChange={e => updateField('lastName', e.target.value)}
          />
        ) : (
          <b>{state.lastName}</b>
        )}
      </label>
      <br />
      <button type="submit">{state.isEditing ? 'Save' : 'Edit Profile'}</button>
      <p>
        <i>
          Hello, {state.firstName} {state.lastName}!
        </i>
      </p>
    </form>
  );
}