import { Schema, model, models } from "mongoose";

const eventsCategorySchema = new Schema({
    id: {
        type: String,
        required: true,
    },
    title: {
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
});

const EventsCategory =
    models.EventsCategory || model("EventsCategory", eventsCategorySchema);
export default EventsCategory;
