const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const postRoute = require("./routes/posts");
const authRoute = require("./routes/auth");
const catRoute = require("./routes/categories");
const userRoute = require("./routes/users");
const app = express();
const multer = require('multer');
const path = require('path');

dotenv.config();
app.use(express.json());  // https://www.geeksforgeeks.org/express-js-express-json-function/

app.use("/images", express.static(path.join(__dirname,"/images")))

// app.post('/', (req,res) => {
//     const kitty = new Cat({ name: 'zuza'});
//     kitty.save().then(() => console.log('meow'));
//     console.log(kitty);
// })


// Cors error 431
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


//Connect to DataBase (mongodb installed)
mongoose.connect(process.env.MONGO_URL2, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.connection
    .once('open', () => console.log('connected'))
    .on('error', (error) => {
        console.log("the error:", error);
    });

const storage = multer.diskStorage({
    destination:(req, file, callback) => {
        callback(null, "images");
    }, 
    filename:(req, file, callback) => {
        callback(null, req.body.name);
    }
})

const upload = multer({storage: storage});
app.post("/upload", upload.single("file"),(req,res) => {
    res.status(200).json("File has been uploaded.");
})

app.use('/api/posts', postRoute);
app.use('/api/auth', authRoute);
app.use('/api/categories', catRoute);
app.use('/api/users', userRoute);


// Start by listening to the server
app.listen(8000, () => {
    console.log('server started');
});

