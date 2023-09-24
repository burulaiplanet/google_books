import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import { useDispatch} from "react-redux";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import styled from "@emotion/styled";
import { uiActions } from "../../store/UISlice";

 function SelectInput({ onClick,variant, categories,sortBy }) {
  const dispatch=useDispatch()
  const [sort, setSort] = useState("");

  const handleChange = (e) => {
    setSort(e.target.value);
   dispatch(uiActions.setShowBooks(true))
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <SelectSort value={sort} onChange={handleChange}>
          {variant="categories"&&categories?.map((el) => {
            return (
              <MenuItem
                key={el.id}
                value={el.title}
                // variant={variant}
                onClick={() => onClick(el.title)}
              >
                {el.title}
              </MenuItem>
            );
          })}
          {variant="sort"&&sortBy?.map((el) => {
            return (
              <MenuItem
                key={el.id}
                value={el.title}
                // variant={variant}
                onClick={() => onClick(el.title)}
              >
                {el.title}
              </MenuItem>
            )})}
          
        </SelectSort>
      </FormControl>
    </Box>
  );
}
export default SelectInput
const SelectSort = styled(Select)`
  height: 45px;
  width:75%;
`;
