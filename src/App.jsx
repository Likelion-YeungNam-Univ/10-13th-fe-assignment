import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Daegu1 from "./pages/Daegu1";
import Layout from "./Layout";
import DaeguList from "./pages/DaeguList";
import Daegu2 from "./pages/Daegu2";
import Daegu3 from "./pages/Daegu3";
import Daegu4 from "./pages/Daegu4";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="daegu1" element={<Daegu1 />} />
          <Route path="daegu2" element={<Daegu2/>}/>
          <Route path="daegu3" element={<Daegu3/>}/>
          <Route path="daegu4" element={<Daegu4/>}/>
          <Route path="daeguList" element={<DaeguList/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
};

export default App;
