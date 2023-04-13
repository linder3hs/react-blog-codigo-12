import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { HomeView, SignInView } from "../pages";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignInView />} />
        <Route element={<MainLayout />}>
          <Route path="/home" element={<HomeView />} />
          <Route path="/about" element={<HomeView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
