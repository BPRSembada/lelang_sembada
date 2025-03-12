import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
// import page
import NaviBar from "./component/navbar";
import HomePage from "./page/home_page";
import DetailPage from "./page/detail_page";
import Footer from "./component/footer";
import Contact from "./page/contact";
import TopScroll from "./topScroll";

// testing
import PageDetail from "./page/Page_detail";

function App() {
  return (
    <>
      <div>
        <NaviBar />
        <TopScroll />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/DetailPage" element={<DetailPage />} />
          <Route path="/Page_Detail" element={<PageDetail />} />
          <Route path="/HubungiKami" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
