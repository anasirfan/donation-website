import { Fragment } from "react";
import Head from "next/head";
import { Work_Sans } from "@next/font/google";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import 'swiper/swiper-bundle.min.css';
import "../assets/scss/styles.scss";

const workSans = Work_Sans({
  weight: ["300", "400", "500", "600", "700"],
  style: ['normal'],
  subsets: ['latin'],
  display: "swap",
});

const MyApp = ({ Component, pageProps }) => {
  return (
    <Fragment>
      <Head>
        <title>Donation Website</title>
        <link rel="icon" href={process.env.PUBLIC_URL + "/favicon.ico"} />
      </Head>
      <style jsx global>{`
        :root {
          --ff-body: ${workSans.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </Fragment>
  );
};

export default MyApp;
