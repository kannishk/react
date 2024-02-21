import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Paige } from "./Pages/Paige";
import { Cache } from "./Pages/Cache";
import { Drag } from "./Pages/Drag";
import { Files } from "./Pages/Files";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/paige" element={<Paige />} />
          <Route path="/cache" element={<Cache />} />
          <Route path="/drag" element={<Drag />} />
          <Route path="/files" element={<Files />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
