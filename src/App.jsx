import { BrowserRouter, Route, Routes } from "react-router-dom";
import Pokedex from "./pages/Pokedex";
import Search from "./pages/Search";
import Random from "./pages/Random";
import LayOut from "./LayOut";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route path="" element={<Home />} />

          <Route path="/home" element={<Home />} />
          <Route path="search" element={<Search />} />
          <Route path="random" element={<Random />} />
          <Route path="pokedex" element={<Pokedex />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
