import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectAddedJokes } from '../model/jokes.selector';
import { addJoke, deleteJoke } from '../model/jokes.slice';
import type { IJoke } from '../model/jokes.types';

export function useJokesStorage() {
  const dispatch = useDispatch();
  const jokes = useSelector(selectAddedJokes);

  const isAdded = useCallback((id: IJoke['id']) => jokes.some((joke) => joke.id === id), [jokes]);

  const add = useCallback(
    (joke: IJoke) => {
      if (!isAdded(joke.id)) {
        dispatch(addJoke(joke));
      }
    },
    [dispatch, isAdded],
  );

  const remove = useCallback(
    (id: IJoke['id']) => {
      dispatch(deleteJoke(id));
    },
    [dispatch],
  );

  return {
    jokes,
    isAdded,
    add,
    remove,
  };
}
