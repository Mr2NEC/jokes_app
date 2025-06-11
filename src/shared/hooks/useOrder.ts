import { useState, useCallback } from 'react';

export function useOrder<T extends string | number>(initial: T[] = []) {
  const [order, setOrder] = useState<T[]>(initial);

  const add = useCallback((id: T) => {
    setOrder((prev) => (prev.includes(id) ? prev : [...prev, id]));
  }, []);

  const remove = useCallback((id: T) => {
    setOrder((prev) => prev.filter((i) => i !== id));
  }, []);

  const replace = useCallback((oldId: T, newId: T) => {
    setOrder((prev) => {
      const index = prev.indexOf(oldId);
      if (index === -1) return prev;
      const copy = [...prev];
      copy.splice(index, 1, newId);
      return copy;
    });
  }, []);

  const move = useCallback((id: T, toIndex: number) => {
    setOrder((prev) => {
      const fromIndex = prev.indexOf(id);
      if (fromIndex === -1 || fromIndex === toIndex) return prev;
      const updated = [...prev];
      updated.splice(fromIndex, 1);
      updated.splice(toIndex, 0, id);
      return updated;
    });
  }, []);

  return { order, add, remove, replace, move };
}
