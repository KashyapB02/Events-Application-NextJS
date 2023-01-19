import EventsCategory from "@/models/EventsCategory";
import connectDB from "@/utils/db";

async function EventsCategoryHandler(req, res) {
    const { method } = req;

    if (method.toLowerCase() === "post") {
        if (
            req.body.id === "" ||
            req.body.title === "" ||
            req.body.description === "" ||
            req.body.image === ""
        ) {
            res.status(400).json({
                success: false,
                message: "Id, Title, Description & Image are required",
            });

            return;
        }

        const category = await EventsCategory.find({
            id: req.body.id,
        });

        if (category && category.length > 0) {
            res.status(409).json({
                success: false,
                message: "Category already exists",
            });

            return;
        }

        const newCategory = await EventsCategory.create(req.body);
        return res.status(201).json({
            success: true,
            newCategory,
            message: "Category added successfully",
        });
    } else if (method.toLowerCase() === "get") {
        const allCategories = await EventsCategory.find({});

        if (!allCategories || allCategories.length === 0) {
            return res.status(404).json({
                success: false,
                message: "No data available",
            });
        }

        return res.status(200).json({
            success: true,
            message: "Success",
            eventCategories: allCategories,
        });
    } else {
        res.status(400).json({
            success: false,
            message: "Bad Request",
        });
    }
}

export default connectDB(EventsCategoryHandler);
