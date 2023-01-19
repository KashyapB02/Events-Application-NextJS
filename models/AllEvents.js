import { Schema, model, models } from "mongoose";

const allEventsSchema = new Schema({
    id: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    emails_registered: [{ type: String }],
});

const AllEvents = models.AllEvents || model("AllEvents", allEventsSchema);
export default AllEvents;
