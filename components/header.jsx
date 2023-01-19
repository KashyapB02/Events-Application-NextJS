import Image from "next/image";
import Link from "next/link";
import logo from "/public/images/logo.png";

export default function Header() {
    return (
        <>
            <header className="header">
                <div className="topnav">
                    <Link href="/">
                        <span className="logo">
                            <Image
                                src={logo}
                                alt={"logo"}
                                width={50}
                                height={50}
                            />
                        </span>
                    </Link>
                    <nav className="navigation">
                        <ul className="navigation-list">
                            <li className="navigation-list-items">
                                <Link href="/">Home</Link>
                            </li>
                            <li className="navigation-list-items">
                                <Link href="/about-us">About</Link>
                            </li>
                            <li className="navigation-list-items">
                                <Link href="/events">Events</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="headings">
                    <h1 className="heading">Sed Ut Perspiciatis Unde Omnis</h1>
                    <p className="subheading">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Mollitia, nulla. At ex tenetur quis laudantium
                        dicta fugiat officiis exercitationem nisi in, sapiente
                        nesciunt, amet similique. Consectetur laboriosam
                        officiis expedita ipsam.
                    </p>
                </div>
            </header>
        </>
    );
}
