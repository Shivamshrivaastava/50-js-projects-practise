import { styled } from "styled-components";
import Score from "./Score";
import Selection from "./Selection";
import RoleDice from "./RoleDice";
import { useState } from "react";

const StartPlay = () => {
  const array = [1, 2, 3, 4, 5, 6];
  let ranNum;

  const [isActive, setIsActive] = useState("You have not selected any number");
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [open, setOpen] = useState(false);

  function randomNum() {
    ranNum = Math.floor(Math.random() * array.length + 1);
    setCurrentDice(ranNum);

    if (!selectedNumber) {
      return;
    }

    if (ranNum == selectedNumber) {
      setScore(selectedNumber + score);
    } else {
      setScore(score - 2);
    }
    setSelectedNumber(undefined);
    setIsActive("You have not selected any number");
  }

  function handleReset() {
    setScore(0);
  }

  function handleOpen() {
    setOpen(!open);
    console.log(!open);
    console.log("open");
  }

  return (
    <StartPlayContainer>
      <div className="scoreSelection">
        <Score score={score} />
        <Selection
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
          isActive={isActive}
          setIsActive={setIsActive}
        />
      </div>
      <RoleDice
        currentDice={currentDice}
        randomNum={randomNum}
        handleReset={handleReset}
        handleOpen={handleOpen}
        open={open}
      />
    </StartPlayContainer>
  );
};

export default StartPlay;

const StartPlayContainer = styled.main`
  height: 100vh;

  .scoreSelection {
    display: flex;
    justify-content: space-between;
  }

  @media (max-width: 767px) {
    .scoreSelection {
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
`;
