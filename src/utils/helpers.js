export const groupParamsByKey = (params) =>
  [...params.entries()].reduce((acc, tuple) => {
    const [key, val] = tuple;
    // eslint-disable-next-line no-prototype-builtins
    if (acc.hasOwnProperty(key)) {
      if (Array.isArray(acc[key])) {
        acc[key] = [...acc[key], val];
      } else {
        acc[key] = [acc[key], val];
      }
    } else {
      acc[key] = val;
    }

    return acc;
  }, {});
