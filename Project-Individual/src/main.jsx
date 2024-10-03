import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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

const router = createBrowserRouter([
  {
    path: "/",
    element: 
    <>
    <NavbarLogin />
    <Wellcome />
    </>,
  },
  {
    path: "/login",
    element: 
    <>
    <NavbarLogin />,
    <Login />,
    </>
  },
  {
    path: "/home",
    element: 
    <>
    <NavbarPublik />,
    <HomePublic />,
    </>
  },
  {
    path: "/register",
    element: 
    <>
    <NavbarLogin />,
    
    </>
  },
  {
    path: "/public/allArts/:id",
    element: 
    <>
    <NavbarPublik />,
    <DetailPublic />,
    </>
  },
  {
    path: "/user/get/private/home",
    element: 
    <>
    <NavbarMember />,
    <HomePrivate />,
    
    </>
  },
  {
    path: "/user/post/private/arts",
    element: 
    <>
    <NavbarMember />,
    
    </>
  },
  {
    path: "/user/get/private/arts/:id",
    element: 
    <>
    <NavbarMember />,
    
    </>
  },
  {
    path: "/private/arts/:id",
    element: 
    <>
    <Navbar />,
    
    </>
  },
  {
    path: "/private/arts/:id",
    element: 
    <>
    <Navbar />,
    
    </>
  },
  {
    path: "/private/arts/:id/image-url",
    element: 
    <>
    <Navbar />,
    
    </>
  },
  {
    path: "/private/origins",
    element: 
    <>
    <Navbar />,
    
    </>
  },
  {
    path: "/private/origins",
    element: 
    <>
    <Navbar />,
    
    </>
  },
  {
    path: "/private/origins/:id",
    element: 
    <>
    <Navbar />,
    
    </>
  }
]);

createRoot(document.getElementById("root")).render(
  <>
  <ToastContainer />
  <RouterProvider router={router} />
  </>
);
