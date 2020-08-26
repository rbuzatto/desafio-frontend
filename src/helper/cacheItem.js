export const getCachedValue = key => JSON.parse(localStorage.getItem(key))
export const setCachedValue = (key, value) => localStorage.setItem(key, JSON.stringify(value))
