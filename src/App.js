import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from "./components/Home";
import About from './components/About';
import Navbar from './components/Navbar';
import NoteState from './context/notes/NoteState';
import Child from './components/PropsChildrenEx/Child';
import Parent from './components/PropsChildrenEx/Parent';
function App() {
  return (
 <>
 <NoteState>
 <Router>
<Navbar/>
  <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/about" element={<About/>}></Route>
    <Route path="/parent" element={<Parent/>}></Route>

    

  </Routes>
 </Router>
 </NoteState>
 
 </>
  );
}

export default App;
