import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./component/About";
import Contact from "./component/Contact";
import Error from "./component/Error";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      {/* Outlet renders will fill the children routes */}
      <Outlet />
      {/* In this manner routes are rendered */}
      {/* If the path is / */}
      {/* <Body /> */}
      {/* If the path is /about */}
      {/* <About /> */}
      {/* If the path is /contact */}
      {/* <Contact /> */}
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
