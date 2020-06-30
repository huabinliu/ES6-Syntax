const inject = (items, sections) => {
  let result = [...items];
  sections.forEach((e, i) => result.splice(e.index + i, 0, e.content));
  return result;
};
export { inject };
