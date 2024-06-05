import { useState } from "react";
import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useTranslation } from "react-i18next";

const Search = () => {
  const { t } = useTranslation();
  const [search, setSearch] = useState("");

  const handleChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      console.log(search);
    }
  };
  return (
    <TextField
      id="input-with-icon-textfield"
      label={t(`home.search`)}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      onKeyPress={handleKeyPress}
      onChange={handleChangeSearch}
      style={{
        marginTop: "40px",
        width: "80%",
        marginBottom: "60px",
        maxWidth: "800px",
      }}
    />
  );
};

export default Search;
