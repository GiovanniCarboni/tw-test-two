import { useRouteError } from "react-router-dom";
import { NavBar } from "../components";

export default function ErrorPage() {
  const { data, status } = useRouteError();
  console.log(data, status);
  return (
    <>
      <NavBar />
      <h1>Something went wrong</h1>
      <p>{data}</p>
    </>
  );
}
