import mongoose from "mongoose"
import dbProfile from "../connections"


const {Schema, Types} = mongoose

const ProfileSchema= new Schema({
    name: {type: String},
    docNumber : {type: String},
    social: {
        twtter: {type: String},
        facebook: {type: String}
    }
})

const ProfileModel = dbProfile.model('profile', ProfileSchema)

export default ProfileModel