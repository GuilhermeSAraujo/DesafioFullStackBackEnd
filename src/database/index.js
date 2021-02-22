const mongoose = require('mongoose');

const url = `mongodb+srv://guilhermeadmin:Guilherme2102@cluster0.voyjv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

mongoose.Promise = global.Promise;

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});


module.exports = mongoose;