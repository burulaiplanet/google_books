import SelectInput from "./Components/UI/SelectInput";
import { uiActions } from "./store/UISlice";
import SearchInput from "./Components/UI/SearchInput";
import { useDispatch, useSelector } from "react-redux";
import { getBooksActions } from "./store/SearchBooksActions";
import AllPages from "./AllPages";
import {  useState } from "react";
import styled from "@emotion/styled";
import { categorySlices } from "./store/CategorySlice";
import { sortBooksSlices } from "./store/SortBookSlice";

const Main = () => {
  const dispatch = useDispatch();

  const { items } = useSelector((state) => state?.searchBooks);
  const [books, setBooks] = useState("");
  const categories = [
    { id: 0, title: "all" },
    { id: 1, title: "Art" },
    { id: 2, title: "Poetry" },
    { id: 3, title: "Biography" },
    { id: 4, title: "History" },
    { id: 5, title: "Medical" },
    { id: 6, title: "Computers" },
  ];
  const sortBy = [
    { id: 0, title: "relevance" },
    { id: 1, title: "newest" },
  ];

  function getSearchBooks(evt) {
    if (evt.keyCode === 13 && books.trim().length > 0) {
      searchBooks();
      dispatch(uiActions.setShowBooks(false));
    setBooks('')

    }
  }
 

  function searchBooks() {
    dispatch(getBooksActions(books));
    dispatch(uiActions.setShowBooks(false));
    setBooks('')
  }

  function chooseCategory(category) {
    if (category === "all") {
      dispatch(categorySlices.setCategoryBooks(items));
      return;
    }
    let filterCategories = items?.filter(
      (el) => el?.volumeInfo?.categories?.[0] === category
    );
    dispatch(categorySlices.setCategoryBooks(filterCategories));
  }

  function newSortBooks(sorts) {
    if (sorts === "relevance") {
      dispatch(sortBooksSlices.setSortBooks(items));
      return;
    }

      const sorted = [...items]?.sort((a,b)=>{
        return new Date(b?.volumeInfo?.publishedDate)-new Date(a?.volumeInfo?.publishedDate)
      })
      dispatch(sortBooksSlices.setSortBooks(sorted));
  }
  return (
    <MainContainer>
      <Heading> Search for books</Heading>
      <SearchInput
        value={books}
        searchBooks={searchBooks}
        onChange={(e) => setBooks(e.target.value)}
        getSearchBooks={getSearchBooks}
      />
      <SelectContainer>
        <CategoriesInput>
          <Categories>Categories</Categories>
          <SelectInput
            onClick={chooseCategory}
            variant="category"
            categories={categories}
          />
        </CategoriesInput>
        <SortInput>
          <Categories>Sorting by</Categories>
          <SelectInput onClick={newSortBooks} variant="sort" sortBy={sortBy} />
        </SortInput>
      </SelectContainer>
      <AllPages  books={books}/>
    </MainContainer>
  );
};
export default Main;
const MainContainer = styled("div")`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;
const Heading = styled("h1")`
  color: gray;
`;

const SelectContainer = styled("div")`
  display: flex;
  justify-conten: space-between;
  align-items: center;
  padding: 30px;
`;
const CategoriesInput = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width:50%;
`;
const SortInput = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width:50%;

`;
const Categories = styled("p")`
  margin-right: 5px;
  color: gray;
`;
