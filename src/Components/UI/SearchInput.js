import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material";

export default function SearchInput({
  value,
  getSearchBooks,
  onChange,
  searchBooks,
}) {
  return (
    <SearchContainer>
      <InputSearch
        type="search"
        onKeyUp={getSearchBooks}
        onChange={onChange}
        value={value}
      />
      <SearchButton onClick={(e) => searchBooks(e)} type="button">
        <SearchIcon />
      </SearchButton>
    </SearchContainer>
  );
}

const SearchContainer = styled(Paper)`
  padding: 2px 4px;
  width: 50%;
`;
const SearchButton = styled(IconButton)`
  width: 20%;
`;
const InputSearch = styled(InputBase)`
  width: 80%;
  padding-left: 20px;
`;
