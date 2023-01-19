import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import Header from "@/components/header";
import Footer from "@/components/footer";

export default function EventCity(props) {
    const { data, city } = props;

    return (
        <>
            <Head>
                <title>
                    Events in {city[0].toUpperCase() + city.slice(1)} | Events
                    Application
                </title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <div className="events-cities">
                <h1 className="heading">Events in {city}</h1>
                {data.length === 0 ? (
                    <h2>No data available</h2>
                ) : (
                    <main className="main">
                        {data &&
                            data.map(function (event, id) {
                                return (
                                    <Link
                                        key={id}
                                        href={`/events/${event.city}/${event.id}`}
                                    >
                                        <div className="event-image-container">
                                            <span className="event-image">
                                                <Image
                                                    src={event.image}
                                                    alt={event.id}
                                                    width={600}
                                                    height={600}
                                                />
                                            </span>
                                        </div>
                                        <div className="event-details">
                                            <h2 className="title">
                                                {event.title}
                                            </h2>
                                            <p className="description">
                                                {event.description}
                                            </p>
                                        </div>
                                    </Link>
                                );
                            })}
                    </main>
                )}
            </div>
            <Footer />
        </>
    );
}

export async function getStaticPaths() {
    const response = await fetch(process.env.API_HOST + "event-category", {
        method: "GET",
        headers: {
            accept: "application/json",
        },
    });
    const data = await response.json();

    let allPaths = [];
    if (data.success) {
        allPaths = data.eventCategories.map(function (categories) {
            return {
                params: {
                    city: categories.id.toString(),
                },
            };
        });
    }

    return {
        paths: allPaths,
        fallback: false,
    };
}

export async function getStaticProps(context) {
    const response = await fetch(process.env.API_HOST + "all-events", {
        method: "GET",
        headers: {
            accept: "application/json",
        },
    });
    const data = await response.json();

    let events = [];
    if (data.success) {
        events = data.allEvents.filter(
            (event) => event.city === context.params.city
        );
    }

    return {
        props: {
            data: events,
            city: context.params.city,
        },
    };
}
