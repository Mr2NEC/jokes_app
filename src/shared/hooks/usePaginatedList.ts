import { useState, useEffect, useMemo, useCallback } from 'react';

type UsePaginatedListOptions<T> = {
  items: T[];
  loadMoreItems: () => Promise<void>;
  initialVisibleCount?: number;
  step?: number;
  maxLoadMoreRequests?: number;
};

export function usePaginatedList<T>({
  items,
  loadMoreItems,
  initialVisibleCount = 10,
  step = 10,
  maxLoadMoreRequests = 5,
}: UsePaginatedListOptions<T>) {
  const [visibleCount, setVisibleCount] = useState(initialVisibleCount);
  const [isLoading, setIsLoading] = useState(false);
  const [loadMoreRequestsCount, setLoadMoreRequestsCount] = useState(0);

  const visibleItems = useMemo(() => items.slice(0, visibleCount), [items, visibleCount]);

  const hasMore = loadMoreRequestsCount < maxLoadMoreRequests && visibleCount > items.length;

  useEffect(() => {
    if (items.length < visibleCount && !isLoading && loadMoreRequestsCount < maxLoadMoreRequests) {
      setIsLoading(true);
      loadMoreItems()
        .catch((error) => console.error(error))
        .finally(() => {
          setIsLoading(false);
          setLoadMoreRequestsCount((prev) => prev + 1);
        });
    }

    if (items.length >= visibleCount && !!loadMoreRequestsCount) {
      setLoadMoreRequestsCount(0);
    }
  }, [
    visibleCount,
    items.length,
    loadMoreItems,
    isLoading,
    loadMoreRequestsCount,
    maxLoadMoreRequests,
  ]);

  const loadMore = useCallback(() => {
    setVisibleCount((prev) => prev + step);
  }, [step]);

  const reset = useCallback(() => {
    setVisibleCount(initialVisibleCount);
    setLoadMoreRequestsCount(0);
  }, [initialVisibleCount]);

  return {
    visibleItems,
    visibleCount,
    loadMore,
    hasMore,
    reset,
    isLoading,
  };
}
