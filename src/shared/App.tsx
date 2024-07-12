import React, { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Catalog } from "./pages/Catalog";
import { Footer } from "./components/Footer";
import "./main.global.css";
import { Canopies } from "./pages/Canopies";
import { Route, Routes, useLocation } from "react-router-dom";
import { Gates } from "./pages/Gates";
import { Layout } from "./components/Layout";
import { Gratings } from "./pages/Gratings";
import { Railing } from "./pages/Railing";
import { Stairs } from "./pages/Stairs";
import { Fence } from "./pages/Fence";
import { Alcove } from "./pages/Alcove";
import { Benches } from "./pages/Benches";
import { Contacts } from "./pages/Contacts";
import { Payment } from "./pages/Payment";
import { Main } from "./pages/Main";
import { Helmet } from "react-helmet";
import { NotFound } from "./pages/NotFound";

function AppComponent() {
  const location = useLocation();
  useEffect(() => {
    console.log("location = ", location);
  }, [location]);
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <Header />
        <div
          style={{
            display: "flex",
            margin: "90px auto 0px",
          }}
        >
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/catalog" element={<Catalog />} />

            <Route path="/gates" element={<Gates />} />
            <Route path="/canopies" element={<Canopies />} />
            <Route path="/gratings" element={<Gratings />} />
            <Route path="/railing" element={<Railing />} />
            <Route path="/stairs" element={<Stairs />} />
            <Route path="/fence" element={<Fence />} />
            <Route path="/alcove" element={<Alcove />} />
            <Route path="/benches" element={<Benches />} />
            <Route path="/paymentanddelivery" element={<Payment />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}

const App = () => <AppComponent />;

export default App;
