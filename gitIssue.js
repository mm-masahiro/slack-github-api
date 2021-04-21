import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

const port = process.env.PORT || 3050;

// app.post('/api/v1/',function(req,res){
//   res.json({
//       message:"Hello,world"
//   });
// });

app.post('api.github.com/repos/mm-masahiro/profile-portfolio/issues/135')

app.listen(port);
console.log('listen on port ' + port);