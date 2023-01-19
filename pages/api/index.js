import connectDB from "@/utils/db";

function handler(req, res) {
    res.status(200).json({ name: "Kashyap" });
}

export default connectDB(handler);
