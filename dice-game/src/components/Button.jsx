/* eslint-disable react/prop-types */
import styled from "styled-components";

const Button = ({ text, value, handle }) => {
  return (
    <ButtonsContainer bgblack={value} onClick={handle}>
      {text}
    </ButtonsContainer>
  );
};

export default Button;

const ButtonsContainer = styled.button`
  background-color: ${(props) => (props.bgblack == "true" ? "black" : "white")};
  color: ${(props) => (props.bgblack != "true" ? "black" : "white")};
  width: 150px;
  height: 50px;
  align-self: end;
  border: 2px solid black;
  font-size: 16px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.1s ease-in;
  &:active {
    transform: scale(0.9);
  }
`;
