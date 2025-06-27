import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import MenuInfo from "./components/MenuInfo";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RandomImage from "./components/RandomImage";

const Grocery = lazy(()=>(import("./components/Grocery")));// will do lazy Loading , creates a 1 different bundle for this components and its child 

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

//we will create router configuration

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
        errorElement: <Error />,
      },

      {
        path: "/about",
        element: <About />,
        errorElement: <Error />,
      },
      {
        path: "/contact",
        element: <Contact />,
        errorElement: <Error />,
      },
      {
        path :"/restaurant/:resId", // it is an dynamic path (resID will chnage for every restaurant)
        element:<MenuInfo/>,
        errorElement:<Error/>
      },
      {
        path:"/counter",
        element:<RandomImage/>,
        errorElement:<Error/>
      },
      {
        path:"/grocery",
        element:<Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>,
        errorElement:<Error/>
      }
      
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
