import { Routes, Route } from "react-router-dom";
import { UseEffectAPI } from "../components/UseEffectAPI";
import { AnimalDetails } from "../components/AnimalDetails";
import { NotFound } from "../components/NotFound";
import { NavBar } from "../components/NavBar";

export const AllRoutes = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<UseEffectAPI />} />
        <Route exact path="/AnimalDetails/:id" element={<AnimalDetails />} />
        <Route exact path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
