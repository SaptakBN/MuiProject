import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import Dashboard from "../Pages/Dashboard";
import AuthLayout from "../Layout/AuthLayout";
import MainLayout from "../Layout/MainLayout";

export default function RoutesComponent() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="auth" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
        <Route path="main" element={<MainLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
