import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Layout from "./Layout";
import UnivList from "./pages/All";
import Asia from "./pages/Asia";
import Eroup from "./pages/Eroup";
import NorthAmerica from "./pages/NorthAmerica";
import SouthAmerica from "./pages/SouthAmerica";
import Africa from "./pages/Africa";
import Oceania from "./pages/Oceania";
import All from "./pages/All";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="/asia" element={<Asia/>}/>
          <Route path="/europe" element={<Eroup/>}/>
          <Route path="/northAmerica" element={<NorthAmerica/>}/>
          <Route path="/southAmerica" element={<SouthAmerica/>}/>
          <Route path="/africa" element={<Africa/>}/>
          <Route path="/oceania" element={<Oceania/>}/>
          <Route path="/univlist" element={<UnivList/>}/>
          <Route path="/all" element={<All/>}/>
        </Route>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
