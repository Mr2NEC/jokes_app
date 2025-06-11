import { useMemo } from 'react';

import { useOrder } from './useOrder';
import { useUniqueMap } from './useUniqueMap';

export function useOrderedUniqueList<T extends { id: string | number }>(initial: T[] = []) {
  const unique = useUniqueMap(initial);
  const ordering = useOrder(initial.map((i) => i.id));

  const items = useMemo(() => {
    return ordering.order.map((id) => unique.map.get(id)!).filter(Boolean);
  }, [ordering.order, unique.map]);

  const add = (item: T) => {
    unique.add(item);
    ordering.add(item.id);
  };

  const remove = (id: T['id']) => {
    unique.remove(id);
    ordering.remove(id);
  };

  const replace = (oldId: T['id'], newItem: T) => {
    unique.replace(oldId, newItem);
    ordering.replace(oldId, newItem.id);
  };

  return { items, add, remove, replace };
}
