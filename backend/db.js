const mongoose = require('mongoose');

// const mongoURI = "mongodb://localhost:27017/"
const mongoURI = "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.10.1"

const connectToMongo=()=>{
    mongoose.connect(mongoURI);
    console.log("connected to mongo");
}

module.exports = connectToMongo;
