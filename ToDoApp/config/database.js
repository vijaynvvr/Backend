const mongoose = require('mongoose');
require('dotenv').config();

const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("Successfully connected DB"))
    .catch((error) => {
        console.log("Failed to connect");
        console.log(error.message);
        process.exit(1);
    });
}

module.exports = dbConnect;