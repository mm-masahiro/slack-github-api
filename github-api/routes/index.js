var express = require('express');
const axios = require('axios');
const { response } = require('express');
const app = express();
var router = express.Router();

app.use(express.static('views'));

/* GET home page. */
router.get('/', function(req, res, next) {
  const person = [
    { name: 'masahiro', age: 24 },
    { name: 'shonosule', age: 24 }
  ];
  res.json(person);
});

router.get('/github-issue', function(req, res, next) {
  axios.get('https://api.github.com/repos/mm-masahiro/profile-portfolio/issues/135').then(
    function(response) {
      // console.log(response.data)
      res.send(response.data)
    }
  )
})

module.exports = router;
