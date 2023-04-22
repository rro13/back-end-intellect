const mongoose = require('mongoose')

const MONGODB_URI = process.env.MONGODB_URI

const connect = async () => {
    try {
        mongoose.set("strictQuery",true)
        mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("Conectado ao MongoDB")
    } catch (error) {
        console.error("Erro: ", error.message)
    }
}

module.exports = {
    connect
}


//duvida, e o await?