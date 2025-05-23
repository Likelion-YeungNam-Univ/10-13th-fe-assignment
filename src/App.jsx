import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Action from "./pages/Action";
import Comedy from "./pages/Comedy";
import Horror from "./pages/Horror";
import Romance from "./pages/Romance";
import Animation from "./pages/Animation";
import ActionDetail from "./pages/ActionDetail";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<Home />} />
          <Route path="action" element={<Action />} />
          <Route path="action/:id" element={<ActionDetail />} />
          <Route path="comedy" element={<Comedy />} />
          <Route path="horror" element={<Horror />} />
          <Route path="romance" element={<Romance />} />
          <Route path="animation" element={<Animation />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
