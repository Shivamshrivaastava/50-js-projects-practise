/* eslint-disable react/prop-types */
import styled from "styled-components";

const StartGame = ({ toggle }) => {
  return (
    <StartGameEl>
      <div className="image">
        <img src="/images/dice.png" alt="dice" />
      </div>
      <div className="startGameContainer">
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </StartGameEl>
  );
};

export default StartGame;

const StartGameEl = styled.div`
  width: 1182px;
  margin: 85px auto;
  display: flex;
  .startGameContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1 {
      color: black;
      font-size: 96px;
      white-space: nowrap;
    }
  }
  @media (max-width: 1200px) {
    justify-content: center;
    align-items: center;
    margin: 150px auto 0 0;
    width: 90%;
    .image img {
      width: 500px;
      margin-right: 50px;
    }
    .startGameContainer h1 {
      font-size: 65px;
      white-space: normal;
    }
    .startGameContainer button {
      font-size: 16px;
      width: 180px;
    }
  }
  @media (max-width: 1024px) {
    flex-direction: column;
    margin: 60px auto;
    .image img {
      width: 460px;
    }
    .startGameContainer {
      align-self: center;
    }
    /* .startGameContainer h1 {
      align-self: center;
    }
    .startGameContainer button {
      align-self: center;
    } */
  }
  @media (max-width: 768px) {
    margin: 140px auto;
    .image img {
      width: 300px;
    }
    .startGameContainer h1 {
      font-size: 55px;
    }
  }
`;

const Button = styled.button`
  background-color: black;
  color: white;
  width: 220px;
  height: 50px;
  align-self: end;
  border: 2px solid black;
  font-size: 16px;
  border-radius: 10px;
  transition: all.3s ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: transparent;
    color: black;
  }
`;
