import styled from "@emotion/styled";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetailPageAction } from "../store/DetailPageAction";

const DetailPageBook = () => {
  const dispatch = useDispatch();
  const { bookId } = useParams();
  useEffect(() => {
    dispatch(getDetailPageAction(bookId));
  }, []);
  const { book } = useSelector((state) => state.detailBook);

  let img = book?.volumeInfo?.imageLinks?.smallThumbnail;

  return (
    <BookContainer>
      <ImgBook>
        <Img src={img} alt="" />
      </ImgBook>
      <Div>
        <CategoryandAuthor>{book?.volumeInfo?.categories}</CategoryandAuthor>
        <BookName>{book?.volumeInfo?.title}</BookName>
        <CategoryandAuthor>{book?.volumeInfo?.authors}</CategoryandAuthor>
        <CategoryandAuthor>{book?.volumeInfo?.description}</CategoryandAuthor>
      </Div>
    </BookContainer>
  );
};
export default DetailPageBook;

const BookContainer = styled("div")`
  display: flex;
  justify-content: space-between;
  padding: 30px;
`;
const CategoryandAuthor = styled("p")`
  color: gray;
  margin-top: 4px;
  width: 90%;
`;
const Div = styled("div")`
  display: flex;
  flex-direction: column;
  padding-bottom: 5px;
  width: 80%;
  padding-left: 60px;
`;
const BookName = styled("h3")`
  font-size: 12px;
  margin-top: -5px;
`;
const ImgBook = styled("div")`
  width: 400px;
  padding: 30px;
  cursor: pointer;
  background: #f3f2f1;
  display: flex;
  justify-content: center;
`;

const Img = styled('image')`
  width: 100%;
  object-fit: cover;
  cursor: pointer;
`;
