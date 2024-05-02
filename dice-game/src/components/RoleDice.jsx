/* eslint-disable react/prop-types */
import styled from "styled-components";
import Button from "./Button";
import Rules from "./Rules";

const RoleDice = ({
  currentDice,
  randomNum,
  handleReset,
  handleOpen,
  open,
}) => {
  return (
    <RoleDiceContainer>
      <div onClick={randomNum} className="image">
        <img src={`/images/dice_${currentDice}.png`} alt="" />
      </div>
      <p>Click on dice to roll</p>
      <div className="buttons">
        <Button text="Reset" value="true" handle={handleReset} />
        <Button
          text={open ? "Hide Rules" : "Show Rules"}
          value="false"
          handle={handleOpen}
        />
      </div>
      <Rules isOpen={open} />
    </RoleDiceContainer>
  );
};

export default RoleDice;

const RoleDiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .image {
    cursor: pointer;
  }
  .image img {
    width: 150px;
  }
  .buttons {
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  @media (max-width: 767px) {
    .image img {
      width: 130px;
    }
  }
`;
