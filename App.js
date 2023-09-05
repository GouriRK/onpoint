import logo from "./logo.svg";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Navigate,
  Routes,
} from "react-router-dom";
import Productlist from "./Productlist";
import Book from "./Book";
import Details from "./Details";

function App(props) {
  
  return (
    <>
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element= {<Book/>}/>
          <Route path="/details" element= {<Details/>}/>
            
          
        </Routes>
      </Router>
      
    </div>
    </>
  );
}

export default App ;

