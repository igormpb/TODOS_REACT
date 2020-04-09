const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/todo', { useNewUrlParser: true,useUnifiedTopology: true })
.then(()=>{
    console.log('Mongo Open')
})
.catch((err)=>{
    console.log(err)
});

module.exports = mongoose;