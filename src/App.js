import { Navigate, Route, Routes} from "react-router-dom";
import CardBooks from "./Containers/CardBooks";
import DetailPageBook from "./Containers/DetailPageBooks";
import Main from "./Main";


function App() {
  
  return (
    <div className="App">
<Routes>
<Route path="/" element={<Main/>}/>
<Route path="/main" element={<Navigate to="/books" replace/>}/>
<Route path="books" element={<CardBooks/>}/>
<Route path='/books/:bookId' element={<DetailPageBook/>}/>
</Routes>
    </div>
  );
}

export default App;
