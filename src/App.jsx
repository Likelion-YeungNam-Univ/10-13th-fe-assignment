import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Player from "./pages/Player";
import Team from "./pages/Team";
import NotFound from "./pages/NotFound";
import Layout from "./Layout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="player" element={<Player />} />
          <Route path="team" element={<Team />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
