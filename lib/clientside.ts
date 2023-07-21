export const runInBrowser = (fn: Function) => {
  if (typeof window !== "undefined") {
    fn();
  }
};
