import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./routes/Home.tsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Project from "./routes/Project.tsx";
import RootLayout from "./RootLayout.tsx";
import ProjectProvider from "./hooks/ProjectProvider.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
    // element={<RootLayout />}
    >
      <Route index path="/" element={<Home />} />
      <Route path="/project/:id" element={<Project />} />
    </Route>
  )
);

const activeLabelStyles = {
  transform: "scale(0.85) translateY(-24px)",
};

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        fontFamily: "Inter, Roboto, sans-serif",
      },
    },
  },
  components: {
    Form: {
      variants: {
        floating: {
          container: {
            _focusWithin: {
              label: {
                ...activeLabelStyles,
              },
            },
            "input:not(:placeholder-shown) + label, .chakra-select__wrapper + label, textarea:not(:placeholder-shown) ~ label":
              {
                ...activeLabelStyles,
              },
            label: {
              top: 0,
              left: 0,
              zIndex: 2,
              position: "absolute",
              backgroundColor: "white",
              pointerEvents: "none",
              mx: 3,
              px: 1,
              my: 2,
              transformOrigin: "left top",
            },
          },
        },
      },
    },
    Toast: {
      baseStyle: {
        fontFamily: "Inter, sans-serif",
        ".chakra-alert__title": {
          fontWeight: "900",
        },
      },
    },
    Heading: {
      baseStyle: {
        fontFamily: "Inter, sans-serif",
      },
    },
    Text: {
      baseStyle: {
        fontFamily: "Inter, sans-serif",
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ProjectProvider>
        <RouterProvider router={router} />
      </ProjectProvider>
    </ChakraProvider>
  </React.StrictMode>
);
