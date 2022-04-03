import mongoose from "mongoose"

const {
    MONGO_HOST_DB_PROFILE
} = process.env

const dbProfile = mongoose.createConnection(MONGO_HOST_DB_PROFILE)


export default dbProfile