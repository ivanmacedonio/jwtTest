import "./App.css";
import {Login} from "./components/Login"
import {Logout} from "./components/Logout"
import {Navigation} from "./components/Navigation"
import {Home} from "./components/Home"
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}/>
        <Route path="/login" element={<Login></Login>}/>
        <Route path="/logout" element={<Logout></Logout>}/>
      </Routes>
    </BrowserRouter>
  </>;
}

export default App;
