import { BrowserRouter, Route, Link, Routes } from "react-router-dom"

import './App.css';
import Detail from "./page/Detail";
import PicTab from './page/PicTab';
import Index from "./page/Index";
import Item from "./page/Item";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">首页</Link>
        <Link to="/pictab">Pictab</Link>
        <Link to="/detail">详情页</Link>
        <Link to="/item">item</Link>
        <Routes>
          <Route path="/" element={<Index />}></Route>
          <Route path="/pictab" element={<PicTab dataJson={
            {
              pic: [require("./assets/1.webp"), require("./assets/2.webp"), require("./assets/3.webp"), require("./assets/4.webp"), require("./assets/5.webp"), require("./assets/6.webp"), require("./assets/7.webp")],
              text: ["1", "2", "3", "4", "5", "6", "7"],
              end: ["q", "w", "e", "r", "t", "y", "u"]
            }
          }/>}></Route>
          <Route path="/detail" element={<Detail id={999} message={"codertang"} />}></Route>
          <Route path="/item/*" element={<Item />}></Route>
        </Routes>
        
        {/* <PicTab  /> */}
      </div>
    </BrowserRouter>
    
  );
}

export default App;
