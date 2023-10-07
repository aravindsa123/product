// import Login from "./components/Login/Login";
// import Transferdata from "./components/Transferdata";
// import Course from "./components/course/Course";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Logindata from "./components/Login/Logindata";
import Course from "./components/course/Course";
import Home from "./components/Home/Home";
import Book from "./components/Book/Book";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path={"/"} element={<Login/>}></Route>
      <Route path={"/Ldata"} element={<Logindata/>}></Route> 
      <Route path={"/Course"} element={<Course/>}></Route> 
      <Route path={"/Home"} element={<Home/>}></Route> 
      <Route path={"/Book"} element={<Book/>}></Route> 
      </Routes>
      </BrowserRouter>
      {/* <Transferdata username="Aravind" password="Avd2255" usertype="Admin"/> */}
      {/* <Login/> */}
      {/* <Course/> */}
      {/* <Home/> */}
    </div>
  );
}

export default App;
