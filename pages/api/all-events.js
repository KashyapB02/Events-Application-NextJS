import AllEvents from "@/models/AllEvents";
import connectDB from "@/utils/db";

async function AllEventsHandler(req, res) {
    const { method } = req;

    if (method.toLowerCase() === "post") {
        if (
            req.body.id === "" ||
            req.body.title === "" ||
            req.body.city === "" ||
            req.body.description === "" ||
            req.body.image === ""
        ) {
            res.status(400).json({
                success: false,
                message: "Id, Title, City, Description & Image are required",
            });

            return;
        }

        const event = await AllEvents.find({
            id: req.body.id,
        });

        if (event && event.length > 0) {
            res.status(409).json({
                success: false,
                message: "Event already listed",
            });

            return;
        }

        const newEvent = await AllEvents.create(req.body);
        return res.status(201).json({
            success: true,
            newEvent,
            message: "Category added successfully",
        });
    } else if (method.toLowerCase() === "get") {
        const allEvents = await AllEvents.find({});

        if (!allEvents || allEvents.length === 0) {
            return res.status(404).json({
                success: false,
                message: "No data available",
            });
        }

        return res.status(200).json({
            success: true,
            message: "Success",
            allEvents: allEvents,
        });
    } else {
        res.status(400).json({
            success: false,
            message: "Bad Request",
        });
    }
}

export default connectDB(AllEventsHandler);
