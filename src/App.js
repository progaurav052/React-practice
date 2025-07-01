import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import MenuInfo from "./components/MenuInfo";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RandomImage from "./components/RandomImage";
import userContext from "./utils/userContext";
import { Provider } from "react-redux"; // this acts like bridge , done by react-redux
import appStore from "./utils/appStore";
const Grocery = lazy(() => (import("./components/Grocery")));// will do lazy Loading , creates a 1 different bundle for this components and its child 

const AppLayout = () => {

  const [userName, setUserName] = useState("User")
  return (
    //this is like we are changing the value of Context , by also adding set...func() and therefore making it available accross the app
    <Provider store={appStore}>
      <userContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </userContext.Provider>
    </Provider>
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
        path: "/restaurant/:resId", // it is an dynamic path (resID will chnage for every restaurant)
        element: <MenuInfo />,
        errorElement: <Error />
      },
      {
        path: "/counter",
        element: <RandomImage />,
        errorElement: <Error />
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense>,
        errorElement: <Error />
      }

    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
