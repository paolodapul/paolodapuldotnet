export const sortByDate = (a, b) => {
  return new Date(b.frontMatter.date) - new Date(a.frontMatter.date);
};

export const getPostKey = (title) => {
  return title.replace(' ', '-');
};
