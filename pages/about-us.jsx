import Head from "next/head";

import Header from "@/components/header";
import Footer from "@/components/footer";

export default function AboutUs() {
    return (
        <>
            <Head>
                <title>About Us | Events Application</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <div className="about-us">
                <h1 className="heading">About Us Page</h1>
                <main className="main">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quod, voluptatibus rem quos consequuntur, quibusdam, ut id
                    tempore asperiores reprehenderit nam repellendus ex quam
                    sequi consequatur? Molestiae culpa, asperiores neque fugit
                    blanditiis ipsam eos iste! Eligendi repudiandae enim,
                    laboriosam sint eaque, reiciendis magnam vel maxime ad
                    possimus molestias sunt voluptate neque rem impedit
                    molestiae natus? Illum incidunt voluptatem magnam itaque
                    perferendis perspiciatis officia veritatis iste! Eligendi
                    velit eum fugiat reprehenderit, sed aliquam modi? Dolore ex
                    tempore ipsam dolorem sunt et, molestias accusantium,
                    commodi ullam dolor soluta cupiditate hic iure fuga magni
                    illo incidunt omnis? Non quo accusantium vero earum officiis
                    voluptatibus hic incidunt ratione dolore libero aut beatae
                    atque dolorem eum veniam numquam, ullam doloremque, omnis
                    dolores magni natus illum velit? Totam, aliquid laudantium
                    blanditiis unde quia porro nostrum laboriosam expedita magni
                    voluptate incidunt dolorem a suscipit tenetur deleniti
                    delectus minima minus itaque culpa ipsum eos amet. Atque,
                    voluptates eligendi. Dolore.
                </main>
                <h2 className="subheading">Dlor In Reprehenderit</h2>
                <p className="subheading-content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                </p>
                <ul className="about-us-list">
                    <li className="about-us-list-item">
                        <h3 className="about-us-list-item-heading">
                            Dlor In Reprehenderit
                        </h3>
                        <p className="about-us-list-item-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in
                        </p>
                    </li>
                    <li className="about-us-list-item">
                        <h3 className="about-us-list-item-heading">
                            Dlor In Reprehenderit
                        </h3>
                        <p className="about-us-list-item-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in
                        </p>
                    </li>
                    <li className="about-us-list-item">
                        <h3 className="about-us-list-item-heading">
                            Dlor In Reprehenderit
                        </h3>
                        <p className="about-us-list-item-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in
                        </p>
                    </li>
                </ul>
            </div>
            <Footer />
        </>
    );
}
