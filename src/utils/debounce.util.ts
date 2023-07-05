const debounce = <T>(fn: (...arg: T[]) => void, delay: number) => {
  let timeoutId: NodeJS.Timeout;
  return (...args: T[]) => {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
};
export default debounce;
