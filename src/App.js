// import Login from "./components/Login/Login";
// import Transferdata from "./components/Transferdata";
// import Course from "./components/course/Course";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Logindata from "./components/Login/Logindata";
import Course from "./components/course/Course";
import Home from "./components/Home/Home";
import Book from "./components/Book/Book";
import Bookview from "./components/Book/Bookview";
import Productname from "./components/Product/Productname";
import Productview from "./components/Product/Productview";
import React, { useEffect, useState } from "react";


function App() {
  const [isloggedin,setIsloggedin] =useState(false);

  useEffect(()=>{
    const storevalue=localStorage.getItem("isloggedin");
    if(storevalue==="1")
    {
      setIsloggedin(true);
    }
  },[])

  const Logincheck =(un,pwd) =>{
    localStorage.setItem("isloggedin",'1');
    setIsloggedin(true);
  }    
  const LogOutcheck =(event) =>{
    localStorage.setItem("isloggedin",'1');
    setIsloggedin(false);
  }    


  return (
    <div>
      <React.Fragment>
        {!isloggedin && <Login checkLogin={Logincheck}/>}
        {isloggedin && <Home checkLogout={LogOutcheck}/>}
      </React.Fragment>
      <BrowserRouter>
      <Routes>
      {/* <Route path={"/"} element={<Login/>}></Route> */}
      <Route path={"/Ldata"} element={<Logindata/>}></Route> 
      <Route path={"/Course"} element={<Course/>}></Route> 
      {/* <Route path={"/Home"} element={<Home/>}></Route>  */}
      {/* <Route path={"/Book"} element={<Book/>}></Route> 
      <Route path={"/Bookview"} element={<Bookview/>}></Route>  */}
      <Route path={"/Productname"} element={<Productname/>}></Route>
      <Route path={"/Productview"} element={<Productview/>}></Route>  
      </Routes>
      </BrowserRouter>
      {/* <Transferdata username="Aravind" password="Avd2255" usertype="Admin"/> */}
      {/* <Login/> */}
      {/* <Course/> */}
      {/* <Home/> */}
      {/* <Productname/> */}
    </div>
  );
}

export default App;
