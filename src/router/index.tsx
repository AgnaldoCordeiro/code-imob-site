import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from '../screens/Home'
import Error from '../screens/Error'
import Imovel from "../screens/imovel/page";





function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>    
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
        <Route path="/imovel/:id" element={<Imovel />} />

        
      
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
