import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Home>
        {/* ROUTES */}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Home>
    </>
  );
}

export default App;
