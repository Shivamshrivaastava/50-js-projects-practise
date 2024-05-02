/* eslint-disable react/prop-types */
import styled from "styled-components";

const Score = ({ score }) => {
  return (
    <ScoreEl>
      <h2>{score}</h2>
      <p>Total Score:</p>
    </ScoreEl>
  );
};

export default Score;

const ScoreEl = styled.div`
  max-width: 135px;
  height: 150px;
  text-align: center;
  margin: 20px;
  h2 {
    font-size: 80px;
    line-height: 100px;
    font-weight: 600;
  }
  p {
    font-size: 20px;
    font-weight: 500;
  }

  @media (max-width: 767px) {
    margin-top: -40px;
    margin-bottom: -100px;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: center;
    h2 {
      font-size: 30px;
      font-weight: 500;
    }
    p {
      font-size: 20px;
      width: 50%;
      white-space: nowrap;
      margin-right: 60px;
    }
  }
`;
