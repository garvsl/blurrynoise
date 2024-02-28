import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./routes/Home.tsx";
import { ChakraProvider } from "@chakra-ui/react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Project from "./routes/Project.tsx";
import RootLayout from "./RootLayout.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />}>
      <Route index path="/" element={<Home />} />
      <Route path="/project/:id" element={<Project />} />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
