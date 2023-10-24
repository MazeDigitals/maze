import Head from "next/head";
import React from "react";
import dynamic from "next/dynamic";
import { Inter } from "@next/font/google";
import { Col, Container, Row } from "reactstrap";
import styles from "@/styles/Product.module.scss";

const inter = Inter({ subsets: ["latin"] });

const DynamicHeader = dynamic(() => import("components/Header/Header"), {
  ssr: false,
});
const DynamicFooter = dynamic(() => import("components/Footer/Footer"), {
  ssr: false,
});

const landingPage = () => {
  return (
    <>
      <Head>
        <title>
          Leverage Your Business's Potential with Maze Digital Today!
        </title>
        <meta
          name="description"
          content="We deliver quality UI/UX designs, branding services, logo designing services, e-commerce, website, and web app development services, exclusively tailored for you."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main}`}>
        <DynamicHeader />

        <DynamicFooter />
      </main>
    </>
  );
};

export default landingPage;
