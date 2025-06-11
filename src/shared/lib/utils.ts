export async function fetchUniqueItem<T>(
  fetchFn: () => Promise<T>,
  isUnique: (item: T) => boolean,
  maxAttempts = 10,
): Promise<T> {
  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    const item = await fetchFn();
    if (isUnique(item)) {
      return item;
    }
  }
  throw new Error('Unable to get unique item in time.');
}
