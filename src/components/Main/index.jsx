import React from "react";
import "./styles.module.css";
import MainHeader from "../MainHeader";
import { Routes, Route } from "react-router-dom";
import InstitutionCreate from "../../screens/InstitutionCreate";

function Main() {
  return (
    <section className="container">
      <MainHeader />
      <Routes>
        <Route path="/criar" element={<InstitutionCreate />} />
      </Routes>
    </section>
  );
}

export default Main;
