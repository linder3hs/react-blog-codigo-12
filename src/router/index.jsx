import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomeView, SignInView } from "../pages";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignInView />} />
        <Route path="/home" element={<HomeView />} />
      </Routes>
    </BrowserRouter>
  );
}
