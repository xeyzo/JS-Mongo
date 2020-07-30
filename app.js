const mongoose = require('mongoose');
const Schema =
 mongoose.Schema;
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});

const testConection = () =>{
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function() {
  console.log('connected')
});
};

const Data = mongoose.model('Data', Schema({
    id:Number,
    kegiatan:String,
    status:String    
  }))
 
  const showData = () =>{
    const all = await Data.find();
  }

  mongoose.disconnect();

