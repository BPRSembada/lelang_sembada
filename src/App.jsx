import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
// import page
import NaviBar from "./component/navbar";
import HomePage from "./page/home_page";
import DetailPage from "./page/detail_page";
import Footer from "./component/footer";
import Contact from "./page/contact";

function App() {
  return (
    <>
      <div>
        <NaviBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/DetailPage" element={<DetailPage />} />
          <Route path="/HubungiKami" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
