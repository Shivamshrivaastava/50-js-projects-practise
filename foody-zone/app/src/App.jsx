/* eslint-disable react-hooks/exhaustive-deps */
import styled from "styled-components";
import { useState, useEffect } from "react";
import SearchResult from "./components/SearchResult";

export const BASE_URL = "http://localhost:9000";

const App = () => {
  const [data, setData] = useState(null);
  const [filterData, setFilterData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedBtn, setSelectedBtn] = useState(null);

  const fetchFoodData = async () => {
    setLoading(true);
    try {
      const response = await fetch(BASE_URL);
      const json = await response.json();
      setLoading(false);

      setFilterData(json);
      setData(json);
    } catch (error) {
      setError("Unable to fetch the data.");
    }
  };

  useEffect(() => {
    fetchFoodData();
  }, []);

  function searchFood(e) {
    let searchFoodItem = e.target.value;

    if (searchFoodItem === "") {
      setFilterData(null);
    }

    let filter = data?.filter((food) => {
      return food.name.toLowerCase().includes(searchFoodItem.toLowerCase());
    });

    setFilterData(filter);
  }

  function filterButtons(type) {
    if (type === "all") {
      setFilterData(data);
      setSelectedBtn("all");
      return;
    }

    let filter = data?.filter((food) => {
      return food.type.toLowerCase().includes(type.toLowerCase());
    });

    setFilterData(filter);
    setSelectedBtn(type);
  }

  const filterBtn = [
    {
      name: "All",
      type: "all",
    },
    {
      name: "Breakfast",
      type: "breakfast",
    },
    {
      name: "Lunch",
      type: "lunch",
    },
    {
      name: "Dinner",
      type: "dinner",
    },
  ];

  if (error) return <div>{error}</div>;

  if (loading) return <div>Loading...</div>;

  return (
    <MainContainer>
      <TopContainer>
        <div className="logo">
          <img src="images/logo.svg" alt="" />
        </div>
        <div className="search">
          <input
            onChange={searchFood}
            type="search"
            placeholder="Search Food..."
          />
        </div>
      </TopContainer>
      <FilterContainer>
        {filterBtn.map((value) => {
          return (
            <Button
              isSelected={selectedBtn === value.type}
              key={value.name}
              onClick={() => filterButtons(value.type)}
            >
              {value.name}
            </Button>
          );
        })}
      </FilterContainer>
      <SearchResult data={filterData} />
    </MainContainer>
  );
};

export default App;

const MainContainer = styled.div``;

const TopContainer = styled.section`
  display: flex;
  justify-content: space-between;
  height: 140px;
  align-items: center;
  padding: 0 120px;
  .search input {
    width: 285px;
    height: 40px;
    padding: 0 15px;
    background-color: transparent;
    border: 2px solid red;
    color: white;
    outline: none;
    font-size: 16px;
    font-weight: 400;
    border-radius: 10px;
  }

  @media (0 < width < 768px) {
    flex-direction: column;
    height: 90px;
    margin: 30px;
  }
`;

const FilterContainer = styled.section`
  display: flex;
  gap: 14px;
  padding-bottom: 38px;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  background-color: ${({ isSelected }) => (isSelected ? "#f22f2f" : "#ff4343")};
  border: 1px solid ${({ isSelected }) => (isSelected ? "white" : "#ff4343")};
  color: white;
  padding: 6px 12px;
  font-size: 16px;
  border-radius: 5px;
  line-height: 20px;
  cursor: pointer;

  &:hover {
    filter: brightness(1.2);
  }
`;
