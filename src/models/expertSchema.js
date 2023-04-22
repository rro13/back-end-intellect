const mongoose = require ("mongoose")
const {Schema} = mongoose;

const expertSchema = new Schema({
    id:mongoose.Schema.Types.ObjectId,
    avatar:{
        type: String,
        required: true
    },
    name: {
        type:String,
        required: true,
    },
    specialty: {
        type:String,
        required: true,
    },
})

module.export = mongoose.model("expert",expertSchema)