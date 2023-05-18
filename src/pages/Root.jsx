import { Outlet } from "react-router-dom";
import { NavBar } from "../components";
import Main from "../styles/Main";

export default function RootLayout() {
  return (
    <>
      <NavBar />
      <Main>
        <Outlet />
      </Main>
    </>
  );
}
