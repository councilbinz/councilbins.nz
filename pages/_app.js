import "../styles/index.css";
import React from "react";
import Link from "next/link";
import Script from "next/script";
import Head from "next/head";
import A from "../components/a";
import { useRouter } from "next/router";
import "fontsource-rubik";

export default function Govbins({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title key="title">Council Bins NZ</title>
        <meta property="twitter:title" content="#councilbinz" key="tw_title" />
        <meta property="og:title" content="#councilbinz" key="og_title" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://councilbins.nz" />

        <meta property="og:description" content="Cataloguing Aotearoa New Zealand's council wheelie bins" />
        <meta
          property="og:image"
          content="https://councilbins.nz/images/wellington.jpg"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://councilbins.nz/" />

        <meta
          property="twitter:description"
          content="Cataloguing Aotearoa New Zealand's council wheelie bins"
        />
        <meta
          property="twitter:image"
          content="https://councilbins.nz/images/wellington.jpg"
        />

        <link
          href="https://fonts.googleapis.com/css?family=Rubik"
          rel="stylesheet"
        />
      </Head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-NEELH1V37M"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'GA_MEASUREMENT_ID');
        `}
      </Script>
      <style jsx global>
        {`
          body {
            background-color: #f8f8f8;
          }
        `}
      </style>
      <div className="font-rubik text-gray-800">
        <header
          className={`w-screen pr-5 pl-5 pt-4 pb-10 md:flex sm:justify-between ${
            router.pathname === "/" ? "" : "border-b-2 border-gray-800"
          }`}
        >
          <h1 className="text-4xl w-full md:w-1/2 pt-2">
            <Link href="/">
              <a>#councilbinz</a>
            </Link>
          </h1>
          <nav className="w-full md:w-1/2 text-xl sm:mt-5">
            <ul className="flex flex-row md:justify-end space-x-2 md:space-x-4">
              <li>
                <A href="/submit-photos">
                  Submit <span className="hidden md:inline">photos</span>
                </A>
              </li>
              <li>
                <A href="/about">About</A>
              </li>
              <li>
                <A href="/search">Search</A>
              </li>
            </ul>
          </nav>
        </header>
        <main className="">
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
}
