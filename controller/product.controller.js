var db = require("../db");

module.exports.index = (req, res) => {
    var page = parseInt(req.query.page) || 1;
    var perPage = 9;

    var start = (page -1) * perPage;
    var end = page * perPage;
    var drop = (page -1) * perPage;
    var numPage = Math.floor(db.get('products').size().value()/perPage)  + ((db.get('products').size().value()%perPage == 0) ? 0:1);
      
    res.render('product/index', {
        //products: db.get('products').value().slice(start, end)
        products: db.get('products').drop(drop).take(perPage).value(),
        numPage: numPage,
        page: page
    });
};