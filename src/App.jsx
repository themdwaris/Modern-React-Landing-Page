import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Github, { getData } from "./components/Github/Github";
import User from "./components/User/User";
import Layout from "./Layout";
import Admin from "./components/Admin";
import { ContextProvider } from "./context/UseContext";
import Login from "./components/Login";
import { ThemeContextProvider } from "./context/UserTheme";



const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route loader={getData} path="github" element={<Github />} />
        <Route path="github/user" element={<User />} />
        <Route path="admin" element={<Admin />} />
        <Route path="login" element={<Login />} />
      </Route>
    )
  );

  return (
    <>
 

      <ContextProvider>
        <ThemeContextProvider>
          <RouterProvider router={router} />
        </ThemeContextProvider>
      </ContextProvider>
    </>
  );
};

export default App;
