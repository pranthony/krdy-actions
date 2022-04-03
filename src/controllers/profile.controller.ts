import mongoose from "mongoose"
import ProfileModel from "../datalayer/dbs/mongo/models/profiles.models"


const { Types } = mongoose
const { ObjectId } = Types

class PROFILE{
    
    async createProfile(profile){
        
        await ProfileModel.insertMany(profile)
        
        const newProfile = new ProfileModel({...profile})
        await newProfile.save()
        
        await ProfileModel.create({...profile})
    }

    async update(args: any, idetifier){
        let queryUpdate = {
            $push:{
                social:{
                    facebook: "antony palomino"
                }
            }
        }
        const options = {
            new : true
        }
        const user = await ProfileModel.findByIdAndUpdate(idetifier, queryUpdate, options)

        return user
    }
    async getProfile(){
        try{
            const getAnyProfile = await ProfileModel.findOne({}).lean()
            return getAnyProfile
        }catch(error){
            throw error
        }
    }
    
    async getProfileById(indentifier: string){
        const getProfiles = await ProfileModel.find({
            _id: new ObjectId(indentifier)
        }).lean()

        const [ elementProfile ] = getProfiles

        return elementProfile
    }
}