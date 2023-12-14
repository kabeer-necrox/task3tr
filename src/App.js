import { BrowserRouter, Route, Routes, Link} from "react-router-dom";
import Navbar from "./componets/header/Navbar";
// import Homepage from "./componets/home/Aboutus";
import Homepage from "./componets/home/Homepage";
import './App.css';
import Aboutus from "./componets/home/Aboutus";

import Contactus from "./componets/contact/Contactus";
import Footer from "./componets/footer/Footer";
function App() {

  return(
    <>
   {/* <Navbar /> */}
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' to="/" element ={<Aboutus />} />
       
    </Routes>
    </BrowserRouter>
    <Homepage />
    <Aboutus />

    <Contactus />
    <Footer />
    

  
    </>
  );
}
export default App;
