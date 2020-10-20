const Pet = require('../models/pet');

module.exports = (app) => {

  /* GET home page. */
  app.get('/', (req, res) => {
    const page = req.query.page || 1

    Pet.paginate({}, {page: page}).then((results) => {
      res.render('pets-index', { pets: results.docs, pagesCount: results.pages, currentPage: page });    
    });
  });
}

// result.docs // the array of records on the current page
// result.total // the total number of records
// result.limit // the limit
// result.page // the current page
// result.pages // the total number of pages