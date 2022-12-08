import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detailtodo from "../redux/modules/Detailtodo";
import Main from "../page/Main";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:id" element={<Detailtodo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
