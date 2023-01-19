import path from "path";
import fs from "fs";

export default function eventRegistration(req, res) {
    const { method } = req;
    const filePath = path.join(process.cwd(), "data", "data.json");
    const { events_categories, allEvents } = JSON.parse(
        fs.readFileSync(filePath)
    );

    if (method.toLowerCase() === "post") {
        if (!allEvents || !(allEvents.length > 0)) {
            res.status(404).send({
                success: false,
                message: "No Events Found",
            });
        }

        const { email, eventId } = req.body;
        const updatedAllEvents = allEvents.map(function (event) {
            if (event.id === eventId) {
                if (event.emails_registered.includes(email)) {
                    res.status(409).json({
                        success: true,
                        message: "Email Already Registered for This Event",
                    });

                    return event;
                }

                return {
                    ...event,
                    emails_registered: [...event.emails_registered, email],
                };
            }

            return event;
        });

        fs.writeFileSync(
            filePath,
            JSON.stringify({
                events_categories,
                allEvents: updatedAllEvents,
            })
        );

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
