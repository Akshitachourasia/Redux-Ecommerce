import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";
import Login from "./pages/auth/login/login";
import Register from "./pages/auth/register/register";
import Welcome from "./pages/welcome/welcome";
import { PrivateGuard } from "./guard/private-guard";
import { AuthContextProvider } from "./context/auth-provider";
import { PublicGuard } from "./guard/public-guard";
import { store } from "./store/store";
import Layout from "./layout/layouts";
import Products from "./pages/product/product";

const router = createBrowserRouter([
  {
    path: "",
    element: <Welcome />,
  },
  {
    path: "/dashboard",
    element: (
      <PrivateGuard>
        <Layout />
      </PrivateGuard>
    ),
    children: [
      {
        path: "products/:productId",
        element: <Products />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/auth",
    element: (
      <PublicGuard>
        <App />
      </PublicGuard>
    ),
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);


const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthContextProvider>
        <RouterProvider router={router} />
      </AuthContextProvider>
    </Provider>
  </React.StrictMode>
);
