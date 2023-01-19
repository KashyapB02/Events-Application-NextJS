import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Events(props) {
    const { data } = props;
    return (
        <>
            <Head>
                <title>Events | Events Application</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <div className="events">
                <h1 className="heading">Events Page</h1>
                {!data.success ? (
                    <h2>{data.message}</h2>
                ) : (
                    <main className="main">
                        {data.eventCategories.map(function (categories, id) {
                            return (
                                <Link
                                    key={id}
                                    href={`/events/${categories.id}`}
                                >
                                    <div className="categories">
                                        <span className="categories-image">
                                            <Image
                                                src={categories.image}
                                                alt={categories.title}
                                                width={600}
                                                height={600}
                                            />
                                        </span>
                                        <div className="categories-title">
                                            <h2>{categories.title}</h2>
                                        </div>
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

export async function getStaticProps() {
    const response = await fetch(process.env.API_HOST + "event-category", {
        method: "GET",
        headers: {
            accept: "application/json",
        },
    });
    const data = await response.json();

    return {
        props: {
            data: data,
        },
    };
}
