import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Home(props) {
    const { data } = props;
    return (
        <>
            <Head>
                <title>Events Application</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main className="home">
                {data &&
                    data.map(function (categories, id) {
                        return (
                            <Link key={id} href={`/events/${categories.id}`}>
                                <div className="event-categories">
                                    <span className="categories-image">
                                        <Image
                                            src={categories.image}
                                            alt={categories.title}
                                            width={600}
                                            height={320}
                                        />
                                    </span>
                                    <div className="categories-details">
                                        <h2 className="title">
                                            {categories.title}
                                        </h2>
                                        <p className="description">
                                            {categories.description}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                <Link href="/events">
                    <button className="more-events-btn">More Events</button>
                </Link>
            </main>
            <Footer />
        </>
    );
}

export async function getServerSideProps(context) {
    const { events_categories } = await import("/data/data.json");

    return {
        props: {
            data: events_categories,
        },
    };
}
