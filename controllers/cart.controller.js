const shortid = require("shortid");
const Session = require("../models/sessions.model");

module.exports.addToCart = async (req, res) => {
  const productId = req.params.productId;
  const sessionId = req.signedCookies.sessionId;
  
  if (!sessionId) {
    res.redirect("/products");
    return;
  }  

  let quantity = 0;
  Session.findOne({ sessionId: sessionId })                                
  .select({'cart': { $elemMatch: { productId: productId} }})
  .exec(function (err, person) {  
    if (err) return handleError(err);    
    quantity =  person.cart[0] ? person.cart[0].quantity : 0;    
    if(quantity == 0)
    {  
      quantity++;
      Session.updateOne({sessionId: sessionId}, 
                      {
                        $push: {cart: {productId: productId, quantity: quantity}}
                      })
          .exec(function (err, person) {  
            if (err) return handleError(err);;  
            res.redirect("/products");
          });
    }
    else{
      quantity++;
      console.log("module.exports.addToCart -> quantity", quantity)
      Session.updateOne(
              {
                sessionId: sessionId, 
                cart: {$elemMatch: {productId: productId}}
              }, 
              {$set: {'cart.$.quantity': quantity}})
      .exec(function (err, person) {  
        if (err) return handleError(err);  
        res.redirect("/products");
      }); 
    }    
  }); 
};

module.exports.index = (req, res) => {
  // const sessionId = req.signedCookies.sessionId;
  // let sql =
  //   "SELECT p.image_main, p.name, p.price, s.count FROM products p RIGHT JOIN sessions_order s ON s.product_id = p.product_id WHERE s.sessions_id = ?";

  // let values = [[sessionId]];
  // db.query(sql, [values], function (err, result) {
  //   if (err) throw err;
  //   let price = 0;

  //   for (var i = 0; i < result.length; i++) {
  //     price += result[i].price * result[i].count;
  //   }
  res.render("cart/index");
};
