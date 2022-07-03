import "./App.css";
import { Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PageNotFound from "./containers/PageNotFound";
import { renderRoutes } from "./routes";
import Loader from "components/Loader";

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <Routes>
          {/* Redirect to admin/dashboard */}
          <Route
            path="admin"
            element={<Navigate replace to="/admin/dashboard" />}
          />

          {renderRoutes()}

          {/* PageNotFound */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
