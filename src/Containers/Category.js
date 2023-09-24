import styled from "@emotion/styled"


const Category=({id,img,categories,title,authors,onClick})=>{
 
    return(
            <BookCard id={id} onClick={onClick}>
                <ImgBook> <Book src={img} alt=""/></ImgBook>
               <Div>
              <CategoryandAuthor>{categories}</CategoryandAuthor>
                <BookName>{title}</BookName>
                <CategoryandAuthor>{authors}</CategoryandAuthor>
                </Div>
            </BookCard>
    )
}
export default Category



const BookCard=styled('div')`
margin-top:30px;
margin-left: 55px;
padding-top:25px;
padding-left:25px;
width: 200px;
display: flex;
flex-direction: column;
justify-content:space-between;
background-color:#E5E4E2;

`
const CategoryandAuthor=styled('p')`
color:gray;
margin-top:4px;
`
const Div=styled('div')`
display:flex;
flex-direction:column;
padding-bottom:5px;
width:80%;
`
const BookName=styled('h3')`
font-size:12px;
margin-top:-5px;

`
const ImgBook=styled('div')`
width:160px;
heght:230px;
cursor:pointer;

`

const Book=styled('img')`
width:90%;
heght:90%;
object-fit: cover;
cursor: pointer;

`
