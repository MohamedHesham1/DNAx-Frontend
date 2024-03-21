export const defineEnum = (options) =>
  new Proxy(options, {
    get(target, prop) {
      if (!target[prop]) {
        const selected = target.find((item) => item.key === prop);

        if (selected) {
          return selected.value;
        }
      }
      return target[prop];
    },
  });
