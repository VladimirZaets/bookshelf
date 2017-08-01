module.exports = function(req, res) {
  new ArticleModel().fetchAll()
    .then(function(articles) {
      res.send(articles.toJSON());
    }).catch(function(error) {
      console.log(error);
      res.send('An error occured');
    });
};