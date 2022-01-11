import Home from "./component/Home";
import Create from "./component/Create";
import Read from "./component/Read";
import Update from "./component/Update";
import Delete from "./component/Delete";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
     
     <Routes>
     <Route path="/" element={<Home/>} />
     <Route path="/Create" element={<Create/>} />
     <Route path="/Read" element={<Read/>} />
     <Route path="/Update" element={<Update/>} />
     <Route path="/Delete" element={<Delete/>} />
     </Routes>
    </BrowserRouter>
  );
}

export default App;
