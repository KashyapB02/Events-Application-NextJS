import AllEvents from "@/models/AllEvents";
import connectDB from "@/utils/db";

async function eventRegistration(req, res) {
    const { method } = req;

    if (method.toLowerCase() === "post") {
        if (req.body.eventId === "" || req.body.email === "") {
            res.status(400).json({
                success: false,
                message: "Event Id & Email are required",
            });

            return;
        }

        const event = await AllEvents.find({
            id: req.body.eventId,
        });

        if (!event || event.length === 0) {
            res.status(404).send({
                success: false,
                message: "No Events Found",
            });

            return;
        }

        let eventData = event[0];
        const { email, eventId } = req.body;

        if (eventData.emails_registered.includes(email)) {
            res.status(409).json({
                success: true,
                message: "Email Already Registered for This Event",
            });

            return;
        }

        eventData.emails_registered = [...eventData.emails_registered, email];
        console.log(eventData);

        await AllEvents.updateOne({ id: eventId }, eventData);

        res.status(200).json({
            success: true,
            message: "Registration successful with the email: " + email,
        });
    }

    res.status(400).json({
        success: false,
        message: "Bad Request",
    });
}

export default connectDB(eventRegistration);
