const model = require('./models.js');
const router = {};

router.auth = (req, res) => {
  model.getDetails(req.query.id)
  .then(data => {
    res.send(data);
  })
};

module.exports = router;

