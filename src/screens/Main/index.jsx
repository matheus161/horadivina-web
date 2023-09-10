import React from "react";
import MainHeader from "../../components/MainHeader";
import { Routes, Route } from "react-router-dom";
import InstitutionCreate from "../InstitutionCreate";
import InstitutionsList from "../../components/InstitutionsList";

function Main() {
  return (
    <section className="container">
      <MainHeader />
      <Routes>
        <Route path="/" element={<InstitutionsList />} />
        <Route path="/criar" element={<InstitutionCreate />} />
      </Routes>
    </section>
  );
}

export default Main;
