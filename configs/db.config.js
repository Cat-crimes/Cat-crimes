const mongoose = require('mongoose');

mongoose
  .connect(`mongodb+srv://${process.env.USUARIO}:${process.env.PASSWORD}@cluster0.8oeac.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then((x) => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
  .catch((err) => console.error('Error connecting to mongo', err));

mongoose.set('useCreateIndex', true);

module.exports = mongoose;
