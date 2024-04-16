import mongoose from "mongoose"

export const connectDB = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        dbName: "RentalProperty2",
    })
        .then((c) => console.log(`Data base connected`))
        .catch((e) => console.log(e))
}