import { BrowserRouter, Routes, Route } from "react-router-dom";
import PokemonList from "./pages/PokemonList";
import Layout from "./Layout";
import Home from "./pages/Home";
import PokemonDetail from "./pages/PokemonDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="pokemon" element={<PokemonList />} />
          <Route path="pokemon/:id" element={<PokemonDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
