/* eslint-disable react/prop-types */
import styled from "styled-components";

const Rules = ({ isOpen }) => {
  return !isOpen ? (
    ""
  ) : (
    <RulesContainer>
      <h2>How to play dice game</h2>
      <p>1. Select any number.</p>
      <p>2. Click on dice image.</p>
      <p>
        3. after click on dice if selected number is equal to dice number you
        will get same point as dice.
      </p>
      <p>
        4. if you get wrong guess then 2 point will be dedcuted Select any
        number.
      </p>
    </RulesContainer>
  );
};

export default Rules;

const RulesContainer = styled.div`
  margin-top: 20px;
  width: 740px;
  height: 160px;
  background-color: #fbf1f1;
  padding: 20px 30px;
  border-radius: 10px;
  h2 {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 10px;
  }
  p {
    font-size: 14px;
  }

  @media (max-width: 767px) {
    width: 420px;
    height: 175px;
    padding: 10px 20px;
    margin-bottom: 20px;
    h2 {
      font-size: 16px;
    }
    p {
      font-size: 12px;
    }
  }
`;
