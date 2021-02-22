const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('OK');
});

require('./controllers/authController')(app);
require('./controllers/assetController')(app);
require('./controllers/enterpriseController')(app);
require('./controllers/unityController')(app);
require('./controllers/userController')(app);

app.listen(3030);