/* eslint-disable react/prop-types */
import styled from "styled-components";
import { BASE_URL, Button } from "../App";

const SearchResult = ({ data }) => {
  return (
    <FoodCardContainer>
      <FoodCards>
        {data?.map((item) => {
          return (
            <FoodCard key={item.name}>
              <div className="food_image">
                <img src={BASE_URL + item.image} alt="" />
              </div>
              <div className="food_info">
                <div className="info">
                  <h3>{item.name}</h3>
                  <p>{item.text}</p>
                </div>
                <Button>$ {item.price.toFixed(2)}</Button>
              </div>
            </FoodCard>
          );
        })}
      </FoodCards>
    </FoodCardContainer>
  );
};

export default SearchResult;

const FoodCardContainer = styled.section`
  min-height: calc(100vh - 210px);
  background: url("/images/bg.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const FoodCards = styled.section`
  padding: 64px 0;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  row-gap: 20px;
  column-gap: 32px;
  justify-content: center;
  align-items: center;
`;

const FoodCard = styled.section`
  height: 167px;
  width: 340px;

  background: radial-gradient(
    90.16% 143.01% at 15.32% 21.04%,
    rgba(165, 239, 255, 0.2) 0%,
    rgba(110, 191, 244, 0.0447917) 77.08%,
    rgba(70, 144, 213, 0) 100%
  );
  background-blend-mode: overlay, normal;
  backdrop-filter: blur(13.1842px);

  border: 1px solid white;
  border-radius: 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  .food_info {
    display: flex;
    flex-direction: column;
    gap: 26px;
    padding: 10px;
  }

  .food_info .info h3 {
    font-size: 16px;
    margin-bottom: 8px;
    font-weight: 600;
  }

  .food_info .info p {
    font-size: 12px;
    font-weight: 400;
  }

  .food_info button {
    align-self: flex-end;
    font-size: 14px;
    font-weight: 400;
    pointer-events: none;
  }
`;
