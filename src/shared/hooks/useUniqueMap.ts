import { useState, useCallback } from 'react';

import type { StringOrNumber } from '../types';

export function useUniqueMap<T extends { id: StringOrNumber }>(initial: T[] = []) {
  const [map, setMap] = useState(() => {
    const m = new Map<T['id'], T>();
    initial.forEach((item) => m.set(item.id, item));
    return m;
  });

  const add = useCallback((item: T) => {
    setMap((prev) => {
      if (prev.has(item.id)) return prev;
      const next = new Map(prev);
      next.set(item.id, item);
      return next;
    });
  }, []);

  const remove = useCallback((id: T['id']) => {
    setMap((prev) => {
      if (!prev.has(id)) return prev;
      const next = new Map(prev);
      next.delete(id);
      return next;
    });
  }, []);

  const replace = useCallback((oldId: T['id'], newItem: T) => {
    setMap((prev) => {
      if (!prev.has(oldId)) return prev;
      const next = new Map(prev);
      next.delete(oldId);
      next.set(newItem.id, newItem);
      return next;
    });
  }, []);

  return { map, add, remove, replace };
}
