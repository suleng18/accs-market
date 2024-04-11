// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function cleanObject<T extends Record<string, any>>(obj: T): Partial<T> {
  const newObj = { ...obj };
  Object.keys(newObj).forEach((key) => {
    if (newObj[key] === null || newObj[key] === undefined) {
      delete newObj[key];
    }
  });
  return newObj;
}
