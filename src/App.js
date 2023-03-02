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
import React, { useContext } from "react";

import "@/styles/style.scss";

const Layout = () => {
  const { themeMode } = useContext(ThemeContext);

  console.log(themeMode);

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

const ProtectedRoute = ({ children, currentUser }) => {
  if (!currentUser) {
    return <Navigate to="/login" />;
  }
  return children;
};

function App() {
  const currentUser = true;

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute currentUser={currentUser}>
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
