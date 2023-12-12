import { BrowserRouter, Route, Routes, Link} from "react-router-dom";
import Navbar from "./componets/header/Navbar";
// import Homepage from "./componets/home/Aboutus";
import Homepage from "./componets/home/Homepage";
import './App.css';
import Aboutus from "./componets/home/Aboutus";
function App() {

  return(
    <>
   
    <BrowserRouter>
    <Routes>
      <Route path='/' element ={<Navbar />} />
       
    </Routes>
    </BrowserRouter>
    <Homepage />
    <Aboutus />
    

  
    </>
  );
}
export default App;
