import React, { Suspense } from "react";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/register">Register</NavLink>
          </li>
          <li>
            <NavLink to="/recommended">Home</NavLink>
          </li>
          <li>
            <NavLink to="/library">My library</NavLink>
          </li>
        </ul>
      </nav>
      <main>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
