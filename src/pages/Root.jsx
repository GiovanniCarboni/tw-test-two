import React from "react";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <h1>Navigation</h1>
      <main>
        <Outlet />
      </main>
    </>
  );
}
