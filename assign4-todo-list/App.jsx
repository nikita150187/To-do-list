
import { Product1, Product2, Product3, Product4, Product5, } from "./src/componant/product.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./src/pages/Home.jsx";
import About from "./src/pages/About.jsx";
import Navbar from  "./src/pages/Navbar.jsx";
import ColorPicker from "./src/pages/Colorpicker.jsx";
import TodoList from "./src/pages/Todolist.jsx";






function App(){
  return (
  <>
  <BrowserRouter>
       <Navbar></Navbar>
      <Routes>
        <Route path ="/" element={<Home />} />
        <Route path ="/about" element={<About />} />
        <Route path ="/ColorPicker" element={<ColorPicker />} />
        <Route path ="/TodoList" element={<TodoList />} />
        
       
      </Routes>
       </BrowserRouter>
       
    </>
  );
  }
  export default App;
