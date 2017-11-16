const model = require('./models.js');
const router = {};

router.auth = (req, res) => {
  model.getDetails(req.query.id)
  .then(data => {
    res.send(data);
  })
};

router.default = (req, res) => {
  res.send({
    status: 404,
    err: {
      msg: 'Route not found'
    }
  });
};

module.exports = router;

