import {
  BrowserRouter,
  NavLink,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { routes } from "./routes";
import { Suspense } from "react";

import logo from "../logo.svg";

export const Navigation = () => {
  return (
    <>
      <Suspense fallback={null}>
        <BrowserRouter>
          <div className="main-layout">
            <nav>
              <img src={logo} alt="React Logo" />
              <ul>
                {routes.map((r) => (
                  <li key={r.name}>
                    <NavLink
                      to={r.to}
                      className={({ isActive }) =>
                        isActive ? "nav-active" : ""
                      }
                    >
                      {r.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
            <Routes>
              {routes.map(({ path, Component }) => (
                <Route key={path} path={path} element={<Component />} />
              ))}
              <Route
                path="/*"
                element={<Navigate to={routes[0].to} replace />}
              />
            </Routes>
          </div>
        </BrowserRouter>
      </Suspense>
    </>
  );
};
