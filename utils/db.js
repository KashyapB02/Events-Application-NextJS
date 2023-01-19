import mongoose from "mongoose";

const connectDB = (handler) => async (req, res) => {
    if (mongoose.connections[0].readyState) {
        console.log("MongoDB is already connected");
        return handler(req, res);
    }
    mongoose
        .connect(process.env.MONGO_URL)
        .then(() => {
            console.log("MongoDB is connected");
            return handler(req, res);
        })
        .catch((error) => {
            console.log(error);
        });
};

export default connectDB;
