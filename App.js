import logo from "./logo.svg";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Productlist from "./Productlist";
import Book from "./Book";
import Details from "./Details";

function App(props) {
  
  return (
    <>
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Book />} />
            <Route path="/details" element={<Details />} />
            <Route path="/productlist" element={<Productlist />} />
          </Routes>
        </BrowserRouter>
    
      
    </div>
    </>
  );
}

export default App ;

