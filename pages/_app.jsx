import "@/styles/globals.sass";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }) {
    return (
        <>
            <Component {...pageProps} />
            <Toaster
                toastOptions={{
                    style: {
                        fontSize: "14px",
                        fontWeight: "600",
                        color: "hsl(0, 0%, 30%)",
                    },
                }}
            />
        </>
    );
}
