import React from "react";
import { Routes, Route } from "react-router-dom";
import EventsCreate from "../../components/EventsCreate";

function News() {
  return (
    <section className="container">
      <Routes>
        <Route path="/add" element={<EventsCreate />} />
      </Routes>
    </section>
  );
}

export default News;
