const inject = (items, sections) => {
	sections.forEach((e, i) => items.splice(e.index+i, 0, e.content));
	return items;
};
export { inject };
