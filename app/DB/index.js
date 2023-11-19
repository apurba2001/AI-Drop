import mongoose from "mongoose"
import dotenv from 'dotenv'

dotenv.config()

mongoose.set('strictQuery', true)

const connection = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL)
        console.log('Connected with database')
    } catch (e) {
        console.log(e.message)
    }
}
export default connection