import {
  createBrowserRouter,
  Outlet,
  redirect,
  RouterProvider,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createRoot } from "react-dom/client";
// import "./index.css";

import Wellcome from "./pages/Wellcome";

import Login from "./pages/Login";

import Navbar from "./components/NavbarPublic";
import NavbarLogin from "./components/NavbarLogin";
import NavbarPublik from "./components/NavbarPublic";
import NavbarMember from "./components/NavbarMember";

import HomePublic from "./pages/HomePublic";
import DetailPublic from "./pages/DetailPublic";
import HomePrivate from "./pages/HomePrivate";

const isNotLogin = async () => {
  const access_token = localStorage.getItem("access_token");
  if (!access_token) {
    throw redirect("/login");
  } else {
    return null;
  }
};

const isLogin = async () => {
  const access_token = localStorage.getItem("access_token");
  if (access_token) {
    throw redirect("/user/get/private/home");
  } else {
    return null;
  }
};

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <NavbarLogin />
        <Wellcome />
      </>
    ),
  },
  {
    path: "/login",
    element: <Login />,
    loader: isLogin,
  },
  {
    element: (
      <>
        <NavbarMember />,
        <Outlet />
      </>
    ),
    loader: isNotLogin,
    children: [
      {
        path: "/user/get/private/home",
        element: (
          <>
            <HomePrivate />,
          </>
        ),
      },
      {
        path: "/register",
        element: <></>,
      },
      {
        path: "/user/post/private/arts",
        element: <></>,
      },
      {
        path: "/user/get/private/arts/:id",
        element: <></>,
      },
      {
        path: "/user/update/private/arts/:id",
        element: <></>,
      },
      {
        path: "/user/delete/private/arts/:id",
        element: <></>,
      },
      {
        path: "/user/patch/private/arts/:id/image-url",
        element: <></>,
      },
      {
        path: "/user/get/private/origins",
        element: <></>,
      },
      {
        path: "/user/post/private/by/origins",
        element: <></>,
      },
      {
        path: "/user/put/private/origins/by/:id",
        element: <></>,
      },
    ],
  },
  {
    path: "/home",
    element: (
      <>
        <NavbarMember />,
        <HomePublic />,
      </>
    ),
  },
  {
    path: "/public/allArts/:id",
    element: (
      <>
        <NavbarMember />,
        <DetailPublic />,
      </>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <>
    <ToastContainer />
    <RouterProvider router={router} />
  </>
);
