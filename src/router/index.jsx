import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import {
  HomeView,
  DetailView,
  PostsView,
  ProfileView,
  SignInView,
  SignUpView,
} from "../pages";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/home" element={<HomeView />} />
          <Route path="/posts" element={<PostsView />} />
          <Route path="/detail/:id" element={<DetailView />} />
          <Route path="/profile" element={<ProfileView />} />
        </Route>
        <Route path="/signup" element={<SignUpView />} />
        <Route path="/" element={<SignInView />} />
      </Routes>
    </BrowserRouter>
  );
}
