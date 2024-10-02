import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createRoot } from "react-dom/client";
import "./index.css";

import Login from "./pages/Login";
import Navbar from "./components/Navbar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/login",
    element: 
    <>
    <Navbar />,
    <Login />,
    </>
  },
]);

createRoot(document.getElementById("root")).render(
  <>
  <ToastContainer />
  <RouterProvider router={router} />
  </>
);
