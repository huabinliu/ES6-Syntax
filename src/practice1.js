const parseData = (input) => {
  return input.data.map((e, i) =>
    e.reduce((a, v, i) => Object.assign(a, { [input.column[i].name]: v }), {})
  );
};
export { parseData };
