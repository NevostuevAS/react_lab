import { Action } from './messengerReducer';
import { Contact } from './App';

export default function Chat(
    {
        contact, message, dispatch
    }:
    {
        contact: Contact,
        message: string,
        dispatch: (action: Action) => void
    }
) {
  const handleSend = () => {
    alert(`Sending to ${contact.email}: ${message}`);
    dispatch({
      type: 'edited_message',
      message: ''
    });
  };

  return (
    <section className="chat">
      <textarea
        value={message}
        placeholder={'Chat to ' + contact.name}
        onChange={(e) => {
            dispatch({
                type: 'edited_message',
                message: e.target.value,
              });
        }}
      />
      <br />
      <button onClick={handleSend}>
        Send to {contact.email}
      </button>
    </section>
  );
}
