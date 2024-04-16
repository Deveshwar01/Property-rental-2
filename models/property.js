import mongoose from "mongoose";

const schema = new mongoose.Schema({
    Id: {
        type: Number,
    },
    description: {
        type: String,
        trim: true,
    },
    image: {
        type: String,
        trim: true,
    },
    owner: {
        type: String,
        trim: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        index: true, // Index the createdAt field
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});
export const Propertys = mongoose.model('Propertys', schema);