module.exports = (source) => {
  return (req, res) => {
    const { query: { per_page = 6, page = 1 } } = req;
    const begin = (page - 1) * per_page;
    const end = page * per_page;
    const data = source.slice(begin, end);
    const rtn = {
      page,
      per_page,
      total: source.length,
      total_pages: Math.ceil(source.length / per_page),
      data,
    };

    res.send(rtn);
  };
};
