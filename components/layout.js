import React, { Component } from "react";
import Header from "./header";
import Footer from "./footer";
import Head from "next/head";

export default class Layout extends Component {
  render() {
    const { children } = this.props;
    return (
      <>
        <Head>
          <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        </Head>
        <div class="flex flex-col h-screen justify-between bg-gray-50">
          <Header />
          <div class="h-full">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
              {children}
            </div>
          </div>
          <Footer />
        </div>
      </>
    );
  }
}
