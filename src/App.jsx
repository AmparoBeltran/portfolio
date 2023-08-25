import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/styles/Global";
import MobileMenu from "./components/MobileMenu";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import ErrorPage from "./pages/Error";
import Header from "./components/Header";
import ProjectsGallery from "./pages/ProjectsGallery";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./lib/firebase";
import DesktopMenu from "./components/DesktopMenu";
import Footer from "./components/Footer";
import ProjectDetail from "./pages/ProjectDetail";

const theme = {
  colors: {
    red: "#BE1622",
    black: "#333333",
    white: "hsl(0, 0%, 100%)",
  },
  mobile: "393px",
  tablet: "768px",
  desktop: "1440px",
};

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getDocs(collection(db, "projects")).then((querySnapshot) => {
      setProjects([]);
      querySnapshot.forEach((doc) => {
        const data = { ...doc.data(), id: doc.id };
        setProjects((projects) => [...projects, data]);
      });
    });
  }, []);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home projects={projects} />,
      errorElement: <ErrorPage />,
    },
    {
      path: "projects/:type",
      element: <ProjectsGallery projects={projects} />,
      loader: ({ params }) => {
        return { type: params.type };
      },
    },
    {
      path: "projects/:type/:projectId",
      element: <ProjectDetail projects={projects} />,
      loader: ({ params }) => {
        return { projectId: params.projectId, type: params.type };
      },
    },
  ]);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <MobileMenu />
      <Header />
      <RouterProvider router={router} />

      <DesktopMenu />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
