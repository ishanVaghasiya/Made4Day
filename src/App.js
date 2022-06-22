import React, { lazy, Suspense } from "react";
import { Navbar } from "./components";
import { Favorite, Home } from "./pages";
import { Route, Routes } from "react-router-dom";
import { Toaster, ToastBar } from "react-hot-toast";
// import About from "./pages/About";

const About = lazy(() => import("./pages/About"));

const App = () => {
  return (
    <>
      <Toaster position="bottom-right" reverseOrder={false} />

      <Navbar />
      <section className="container">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/favorite" element={<Favorite />} />
          <Route
            exact
            path="/about"
            element={
              <Suspense fallback="loading....">
                <About />
              </Suspense>
            }
          />
        </Routes>
      </section>
    </>
  );
};

export default App;
