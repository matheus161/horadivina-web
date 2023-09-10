import React from "react";
import { Routes, Route } from "react-router-dom";
import NewsCreate from "../../components/NewsCreate";

function News() {
  return (
    <section className="container">
      <Routes>
        <Route path="/add" element={<NewsCreate />} />
      </Routes>
    </section>
  );
}

export default News;
