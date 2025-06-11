export { JokeCard } from './ui/JokeCard';
export { type IJoke } from './model/jokes.types';
export { jokesApi, useGetRandomJokeQuery, useGetTenJokesQuery } from './api/jokes.endpoints';
export { default as jokesReducer, addJoke, deleteJoke } from './model/jokes.slice';
export { selectAddedJokes } from './model/jokes.selector';
export { useJokesStorage } from './hooks/useJokesStorage';
