const mongoose = require('mongoose');

require('dotenv').config();

const connectWithDb = () => {
    mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(console.log("DB connection established"))
    .catch( (error) => {
        console.log("Error connecting to database");
        console.error(error);
        process.exit(1);
    })
}

module.exports = connectWithDb;