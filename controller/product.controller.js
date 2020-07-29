const db = require('../db');

module.exports.index = (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const perPage = 9;

  // const start = (page -1) * perPage;
  // const end = page * perPage;
  const drop = (page - 1) * perPage;
  const numPage = Math.floor(db.get('products').size().value() / perPage)
                    + ((db.get('products').size().value() % perPage === 0) ? 0 : 1);

  res.render('product/index', {
    // products: db.get('products').value().slice(start, end)
    products: db.get('products').drop(drop).take(perPage).value(),
    numPage: numPage,
    page: page,
  });
};
