import styled from "styled-components";

export const Container = styled.div`
  margin: 0;
  padding: 0;
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: url("BG.jpg"); /* The image used */
  background-color: orange;
  height: 98vh;
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
`;

export const Body = styled.div`
  width: 600px;
  height: 600px;
  padding: 10px;
  border-radius: 10px;
  color: white;
  font-size: 1rem;
  background-color: blue;
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.justify || "flex-start"};
  align-items: center;
`;

export const Button = styled.button`
  width: 300px;
  height: 50px;
  margin: 5px;
  border: none;
  border-radius: 5px;
  font-size: 20px;
  cursor: pointer;
`;

export const Options = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
