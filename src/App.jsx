import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import TestPage from "./pages/TestPage";
import ResultPage from "./pages/ResultPage";
import TypesPage from "./pages/TypesPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/result/:typeKey" element={<ResultPage />} />
        <Route path="/types" element={<TypesPage />} />
      </Routes>
    </BrowserRouter>
  );
}