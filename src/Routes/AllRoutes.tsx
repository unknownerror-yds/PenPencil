import CanvasPage from "@/Views/Canvas";
import LandingPage from "@/Views/LandingPage";
import { Routes, Route } from "react-router-dom";

export default function AllRoute() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="canvas/" element={<CanvasPage />} />
    </Routes>
  );
}
