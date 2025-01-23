export const getLocalStorageWithFallback = (
  key: string,
  fallback: string
): string => {
  if (typeof window !== "undefined") {
    const value = localStorage.getItem(key);
    return value !== null ? value : fallback;
  }
  return fallback;
};
