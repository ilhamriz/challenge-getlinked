import { Fragment, Suspense } from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import routes from "./routes";
import BlockLoader from "./components/BlockLoader";
import { LoaderProvider } from "./context/LoaderContext";
import Navbar from "./components/Navbar/Navbar";
import { SnackbarProvider } from "./context/SnackbarContext";

function App() {
  function renderRoutes(routes) {
    return routes.map(({ path, element: Element, children, data }) => (
      <Fragment key={path}>
        {children?.length ? renderRoutes(children) : null}
        <Route
          key={path}
          path={path}
          element={
            <Suspense fallback={<BlockLoader />}>
              <Element {...data} />
            </Suspense>
          }
          exact
        />
      </Fragment>
    ));
  }

  return (
    <LoaderProvider>
      <SnackbarProvider>
        <Navbar />
        <Routes>{renderRoutes(routes)}</Routes>
      </SnackbarProvider>
    </LoaderProvider>
  );
}

export default App;
