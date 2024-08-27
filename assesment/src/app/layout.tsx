"use client";
import React from "react";
import Header from "../components/HeaderFooter/Header";
import Footer from "../components/HeaderFooter/Footer";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Provider store={store}>
      <html>
        <body className="min-h-screen">
          <Header />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </Provider>
  );
};

export default Layout;
