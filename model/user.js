import mongoose from "mongoose"
const Schema = mongoose.Schema
const userSchema = new Schema({
    quote:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    // location:{
    //     type:String,
    //     required:true
    // }
})

export const Quote = mongoose.model("Quote", userSchema)