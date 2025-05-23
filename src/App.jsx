import React from "react";
import { Route, Routes } from "react-router-dom";
import GlobalLayout from "./layout/GlobalLayout";
import Index from "./pages";
import Movie from "./components/Movie";
import Detail from "./pages/Detail";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<GlobalLayout />}>
        <Route index element={<Index />} />
        <Route path="movie" element={<Movie />} />
        <Route path="movie/:id" element={<Detail />} />
      </Route>
    </Routes>
  );
};

export default App;
