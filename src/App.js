import Login from "@/pages/login/Login";
import Register from "@/pages/register/Register";
import Home from "@/pages/home/Home";
import Profile from "@/pages/profile/Profile";

import Navbar from "@/components/navbar/Navbar";
import Leftbar from "@/components/leftbar/Leftbar";
import Rightbar from "@/components/rightbar/Rightbar";

import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";

import { ThemeContext } from "@/context/themeContext";
import { AuthContext } from "@/context/authContext";

import React, { useContext } from "react";

const Layout = () => {
  const { themeMode } = useContext(ThemeContext);

  return (
    <div className={`theme-${themeMode}`}>
      <Navbar />
      <div style={{ display: "flex" }}>
        <Leftbar />
        <div style={{ flex: 6 }}>
          <Outlet />
        </div>
        <Rightbar />
      </div>
    </div>
  );
};

const ProtectedRoute = ({ children, isLogged }) => {
  if (!isLogged) {
    return <Navigate to="/login" />;
  }
  return children;
};

function App() {
  const { isLogged } = useContext(AuthContext);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute isLogged={isLogged}>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
