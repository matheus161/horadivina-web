import React from "react";
import "./styles.module.css";
import MainHeader from "../../components/MainHeader";
import { Routes, Route } from "react-router-dom";
import InstitutionCreate from "../InstitutionCreate";

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
