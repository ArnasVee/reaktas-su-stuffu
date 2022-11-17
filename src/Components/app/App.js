import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "../header/Header";
import Nav from "../nav/Nav";
import Main from "../main/Main";
import Footer from "../footer/Footer";
import About  from "../about/About";
function App() {
  return (
    <>
    <Router>
      <Nav/>
      <Header/>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>

      <Footer/>
    </Router>
    </>
  );
}

export default App;
