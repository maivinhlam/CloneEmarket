const shortid = require("shortid");
const mongoose = require("mongoose");
const Session = require("../models/sessions.model");

module.exports = async (req, res, next) => {
  if (!req.signedCookies.sessionId) {
    const sessionId = shortid.generate();
    res.cookie("sessionId", sessionId, {
      signed: true,
    });

    var datetime = new Date();
    const session = new Session({
      _id: mongoose.Types.ObjectId(),
      sessionId: sessionId,
      dateCreate: datetime,
      cart: [],
    });

    session
      .save()
      .then((result) => {
        console.log("result", result);
      })
      .catch((err) => {});

    next();
  } else {
    const sessionId = req.signedCookies.sessionId;
    let size = 0;
    
    let result = await Session.findOne({ sessionId: sessionId }).select('cart');
    if(result.cart) size = result.cart.length;   
    res.cookie("countProduct", size);
    next();
  }
};
