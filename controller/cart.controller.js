const db = require('../db');

module.exports.addToCart = (req, res) => {
  const productId = req.params.productId;
  const sessionId = req.signedCookies.sessionId;

  if (!sessionId) {
    res.redirect('/products');
    return;
  }

  db.get('sessions')
  .find({ id: sessionId})
  .set('cart.' + productId, 1)
  .write();

  res.redirect('/products');
}