import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Home from "./components/Home";
import { UserStorage } from "../userContext";
import Main from "./screens/Main";
import ProtectedRoute from "./components/Helper/ProtectedRoute/ProtectedRoute";
import InstitutionDetail from "./screens/InstitutionDetail";
import News from "./screens/News";
import Events from "./screens/Events";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login/*" element={<Login />} />
            <Route
              path="main/*"
              element={
                <ProtectedRoute>
                  <Main />
                </ProtectedRoute>
              }
            />
            <Route
              path="institution/*"
              element={
                <ProtectedRoute>
                  <InstitutionDetail />
                </ProtectedRoute>
              }
            />
            <Route
              path="news/*"
              element={
                <ProtectedRoute>
                  <News />
                </ProtectedRoute>
              }
            />
            <Route
              path="events/*"
              element={
                <ProtectedRoute>
                  <Events />
                </ProtectedRoute>
              }
            />
          </Routes>
        </UserStorage>
      </BrowserRouter>
    </div>
  );
};

export default App;
