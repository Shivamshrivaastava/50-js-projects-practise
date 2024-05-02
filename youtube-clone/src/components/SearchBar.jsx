import { Paper, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [searchItem, setSearchItem] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchItem) {
      navigate(`/search/${searchItem}`);

      setSearchItem("");
    }
  };

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        pl: 2,
        boxShadow: "none",
        mr: { sm: 5 },
      }}
    >
      <input
        className="search-bar"
        placeholder="Search..."
        value={searchItem}
        onChange={(e) => {
          setSearchItem(e.target.value);
        }}
      />
      <IconButton
        type="submit"
        sx={{ p: "10px", color: "red" }}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
