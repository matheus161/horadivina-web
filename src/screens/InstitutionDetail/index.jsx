import React from "react";
import { useParams } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import InstitutionDetailHeader from "../../components/InstitutionDetailHeader";
import InstitutionField from "../../components/InstitutionFields";
import NewsList from "../../components/NewsList";
import EventsList from "../../components/EventsList";

function InstitutionDetail({ institution }) {
  const { id } = useParams();
  return (
    <section className="container">
      <InstitutionDetailHeader />
      <Routes>
        <Route path={`/institution`} element={<InstitutionField />} />
        <Route path="/news" element={<NewsList />} />
        <Route path="/events" element={<EventsList />} />
      </Routes>
    </section>
  );
}

export default InstitutionDetail;
