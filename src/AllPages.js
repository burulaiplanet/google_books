import { styled } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadMoreBooksActions } from "./store/SearchBooksActions";
import CardBooks from "./Containers/CardBooks";
import { useNavigate } from "react-router-dom";
import Category from "./Containers/Category";
import SortBook from "./Containers/SortBook";
import Spinner from "./Components/UI/Spinner";

const AllPages = ({books}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { newItems } = useSelector((state) => state.categorySlice);
  const { items,isLoading,totalItems } = useSelector((state) => state?.searchBooks);
  console.log(items);
  const {newSortBook}=useSelector((state)=>state.sortBooks)
  const { showBooks } = useSelector((state) => state.uiSlice);
  const [requestBooks, setrequestBooks] = useState(1);
  const loadMoreBooks = () => {
    setrequestBooks(requestBooks+1)
    dispatch(loadMoreBooksActions(requestBooks));
  };
  let filtered = items.filter((el) => {
    if (books === "") {
      return el;
    } else if (el.volumeInfo.title) {
      if (el.volumeInfo.title.toLowerCase().includes(books.toLowerCase())) {
        return el;
      }
    }
  });
  console.log(filtered);
  return (
    <PageContainer>
 {<TotalFoundBooks> Found {totalItems} results</TotalFoundBooks>}
 
 {!showBooks ?<TotalFoundBooks>Found results by category {newItems.length} </TotalFoundBooks>:''}
{isLoading?<Spinner/>: <Books>
{showBooks &&
filtered?.map((item) => {
 let img = item.volumeInfo.imageLinks?.smallThumbnail;
 return (
   
   <CardBooks
     key={item.id}
     id={item.id}
     img={img}
     categories={item.volumeInfo?.categories?.[0]}
     title={item.volumeInfo?.title}
     authors={item.volumeInfo?.authors}
     onClick={() => navigate(`/books/${item.id}`)}
   />
 );
})}
{!showBooks &&
newItems?.map((item) => {
 let img = item.volumeInfo.imageLinks?.smallThumbnail;
 return (
   <Category
     key={item.id}
     id={item.id}
     img={img}
     categories={item.volumeInfo?.categories}
     title={item.volumeInfo?.title}
     authors={item.volumeInfo?.authors}
     onClick={() => navigate(`/books/${item.id}`)}
   />
 );
})}
{!showBooks &&
newSortBook?.map((item) => {
 let img = item.volumeInfo.imageLinks?.smallThumbnail;
 return (
   <SortBook
     key={item.id}
     id={item.id}
     img={img}
     categories={item.volumeInfo?.categories}
     title={item.volumeInfo?.title}
     authors={item.volumeInfo?.authors}
     onClick={() => navigate(`/books/${item.id}`)}
   />
 );
})}
</Books>}
     
      {filtered?.length>requestBooks?<LoadMore onClick={loadMoreBooks}>LoadMore</LoadMore>:''}
       

    </PageContainer>
  );
};
export default AllPages;

const PageContainer = styled("div")`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-bottom:50px;
`;
const TotalFoundBooks = styled("p")`
text-align:center;
  color: gray;
`;

const Books = styled("div")`
  display: flex;
  justify-content: flex-start;
  width: 90%;
  flex-wrap: wrap;
`;
const LoadMore = styled("button")`
height:50px;
width:200px;
 cursor:pointer;
  background-color: #e5e4e2;
  border: none;
  border-radius: 10px;
  margin-top: 40px;
  margin-left:40px
`;
