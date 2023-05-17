import styled from "styled-components";

export default function HomePage() {
  return (
    <>
      <h1>Home Page</h1>
      <Instructions>
        <p>To log in as a normal user:</p>
        <p>
          "<b>first@first.com</b>", "<b>password</b>"
        </p>
        <p>To log in as an admin:</p>
        <p>
          "<b>admin@admin.com</b>", "<b>password</b>"
        </p>
      </Instructions>
    </>
  );
}

const Instructions = styled.div`
  padding: 2rem;
  background-color: white;
  width: fit-content;
  margin: 0 auto;
  border: 10px double black;
  p:nth-child(3) {
    margin-top: 1rem;
  }
`;
