import { useCallback, useMemo, useState } from 'react';

import { jokesApi, useJokesStorage, type IJoke } from '@/entities/jokes';
import { useOrderedUniqueList, usePaginatedList } from '@/shared/hooks';
import { fetchUniqueItem } from '@/shared/lib';

export function useJokesList() {
  const {
    jokes: addedJokes,
    isAdded: isAddedJoke,
    add: addJoke,
    remove: removeJoke,
  } = useJokesStorage();

  const {
    items: orderedUniqueList,
    add: addToList,
    replace,
  } = useOrderedUniqueList<IJoke>(addedJokes);

  const [triggerGetTenJokes, { isLoading: isGetTenJokesLoading }] =
    jokesApi.useLazyGetTenJokesQuery();
  const [triggerGetRandomJoke, { isLoading: isGetRandomJokeLoading }] =
    jokesApi.useLazyGetRandomJokeQuery();

  const loadMoreItems = useCallback(async () => {
    const result = await triggerGetTenJokes().unwrap();
    result.map(addToList);
  }, [triggerGetTenJokes, addToList]);

  const {
    visibleItems: paginatedItems,
    loadMore,
    isLoading: isPaginatedItemsLoading,
    hasMore,
  } = usePaginatedList<IJoke>({
    items: orderedUniqueList,
    loadMoreItems,
  });

  const idsSet = useMemo(() => new Set(paginatedItems.map((j) => j.id)), [paginatedItems]);

  const [refreshingIds, setRefreshingIds] = useState<IJoke['id'][]>([]);

  const replaceWithRandom = useCallback(
    async (oldId: IJoke['id']) => {
      if (refreshingIds.includes(oldId)) return;

      setRefreshingIds((prev) => [...prev, oldId]);

      try {
        const uniqueJoke = await fetchUniqueItem(
          () => triggerGetRandomJoke().unwrap(),
          (joke: IJoke) => !idsSet.has(joke.id),
          10,
        );

        replace(oldId, uniqueJoke);
        removeJoke(oldId);
      } catch (error) {
        console.error(error);
      } finally {
        setRefreshingIds((prev) => prev.filter((id) => id !== oldId));
      }
    },
    [refreshingIds, replace, triggerGetRandomJoke, idsSet, removeJoke],
  );

  return {
    items: paginatedItems,
    loadMore,
    add: addJoke,
    remove: removeJoke,
    isAdded: isAddedJoke,
    replace: replaceWithRandom,
    isRefreshing: (id: IJoke['id']) => refreshingIds.includes(id),
    isLoading: isPaginatedItemsLoading || isGetTenJokesLoading || isGetRandomJokeLoading,
    hasMore,
  };
}
