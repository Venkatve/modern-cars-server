const mongoose = require("mongoose");

function connectDB() {

    mongoose.connect('mongodb+srv://Venkat:Guvi123@cluster0.u3q6d.mongodb.net/equipmenthiring?retryWrites=true&w=majority', { useUnifiedTopology: true, useNewUrlParser: true })

    const connection = mongoose.connection

    connection.on('connected', () => {
        console.log('Mongo DB Connection Successfull')
    })

    connection.on('error', () => {
        console.log('Mongo DB Connection Error')
    })


}

connectDB()

module.exports = mongoose