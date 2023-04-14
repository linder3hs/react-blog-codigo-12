import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { HomeView, SignInView, PostsView } from "../pages";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/home" element={<HomeView />} />
          <Route path="/posts" element={<PostsView />} />
        </Route>
        <Route path="/" element={<SignInView />} />
      </Routes>
    </BrowserRouter>
  );
}
