import { useState } from 'react';

export function useReducer<State, Action>(
    reducer: (state: State, action: Action) => State,
    initialState: State
): [State, (action: Action) => void] {
  const [state, setState] = useState(initialState);

  function dispatch(action: Action) {
    const newState = reducer(state, action);
    setState(newState);
  }

  return [state, dispatch];
}