import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

import { toast } from "react-hot-toast";

import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Event(props) {
    const { event } = props;
    const router = useRouter();

    async function eventRegistration(event) {
        event.preventDefault();
        const form = event.target;

        const email = form.email.value;
        const eventId = router?.query.event;

        if (!email) {
            toast.error("Email is Required", {
                position: "top-right",
            });
            return;
        }

        const validRegex =
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if (!email.match(validRegex)) {
            toast.error("Please Enter a Valid Email Address", {
                position: "top-right",
            });
            return;
        }

        const requestOptions = {
            method: "POST",
            headers: {
                accept: "application/json",
                "content-type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                eventId: eventId,
            }),
        };

        try {
            const response = await fetch(
                "/api/event-registration",
                requestOptions
            );
            const data = await response.json();
            console.log(data);

            if (data.success) {
                toast.success(data.message, {
                    position: "top-right",
                });
                form.reset();
            } else {
                throw new Error(response.statusText);
            }
        } catch (error) {
            console.error("Registration error: ", error);
            toast.error("Something went wrong! Check back later.");
        }
    }

    return (
        <>
            <Head>
                <title>{event.title} | Events Application</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <div className="event">
                <main className="main">
                    <h1 className="title">{event.title}</h1>
                    <span className="image">
                        <Image
                            src={event.image}
                            alt={event.id}
                            width={1440}
                            height={768}
                        />
                    </span>
                    <p className="description">{event.description}</p>
                </main>
                <form
                    className="event-registration"
                    onSubmit={(event) => eventRegistration(event)}
                >
                    <label htmlFor="email" className="label">
                        Get Registered for this event!
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Please enter your email here"
                        className="input"
                    />
                    <button type="submit" className="submit-btn">
                        Submit
                    </button>
                </form>
            </div>
            <Footer />
        </>
    );
}

export async function getStaticPaths() {
    const { allEvents } = await import("/data/data.json");
    const allPaths = allEvents.map(function (event) {
        return {
            params: {
                city: event.city,
                event: event.id.toString(),
            },
        };
    });

    return {
        paths: allPaths,
        fallback: false,
    };
}

export async function getStaticProps(context) {
    const { allEvents } = await import("/data/data.json");
    const event = allEvents.find((event) => event.id === context.params.event);

    return {
        props: {
            event: event,
        },
    };
}
