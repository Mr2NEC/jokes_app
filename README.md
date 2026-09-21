# Jokes App - Feature-Sliced Design in practice

A small React application for browsing and saving jokes, built as an exercise in clean frontend architecture: Feature-Sliced Design, RTK Query and composable generic hooks.

**Live demo:** https://jokes-app-five.vercel.app

## Features

- Browse jokes with automatic loading of more items as you go
- Save favourites; they persist across page reloads
- Replace any joke with a new random one that is guaranteed not to be on the list already

## Architecture

The code follows [Feature-Sliced Design](https://feature-sliced.design/), where each layer may only import from the layers below it:

```
src/
  app/        providers, store, theme
  pages/      page compositions
  widgets/    self-contained UI blocks (jokes list)
  entities/   business entities (jokes: api, model, ui, hooks)
  shared/     reusable hooks, ui, lib, types, api
```

The rule holds throughout: `widgets` import from `entities` and `shared`, while `shared` knows nothing about jokes. Every slice exposes a public API through its `index.ts`.

## Technical highlights

**Composable generic hooks.** Instead of one large hook, the list is built from small layers, each with a single responsibility and none of them aware of the jokes domain:

```
useUniqueMap<T>          identity storage in a Map, uniqueness by id
useOrder<T>              order of ids only
useOrderedUniqueList<T>  unique and ordered list, composed from the two above
usePaginatedList<T>      visible slice plus automatic loading of more items
useJokesList             domain logic on top
```

**Self-loading pagination with a safety limit.** `usePaginatedList` requests more data when there are not enough items to show, but caps the number of attempts. Without the cap it would loop forever once the API runs out of new items.

**Unique random replacement.** The API may return a joke that is already on the list, so a small retry helper keeps requesting until it gets one that is not, with a limit on attempts. Concurrent refreshes of the same card are blocked.

**RTK Query and persistence.** Endpoints are injected with cache tags and fetched lazily; saved jokes persist with `redux-persist`, with its internal actions excluded from the serializability check.

## Stack

React 19, TypeScript, Vite (SWC), Redux Toolkit, RTK Query, redux-persist, MUI, Emotion, ESLint, Prettier.

## Getting started

```bash
npm install
npm run dev
```

Other scripts: `npm run build`, `npm run lint`, `npm run format`.
