const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const postRoute = require("./routes/posts");
const app = express();
const multer = require('multer');
const axios = require('axios');

dotenv.config();
app.use(express.json());

// app.post('/', (req,res) => {
//     const kitty = new Cat({ name: 'zuza'});
//     kitty.save().then(() => console.log('meow'));
//     console.log(kitty);
// })


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });



//Connect to DataBase (mongodb installed)
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.connection
    .once('open', () => console.log('connected'))
    .on('error', (error) => {
        console.log("the error:", error);
    });

app.use('/posts', postRoute);


// Start by listening to the server
app.listen(8000, () => {
    console.log('server started');
});


// const fetchPost = async () => {
//     const res = await axios.get("mongodb://localhost:3000/posts");
//     console.log(res);
// }
// fetchPost();