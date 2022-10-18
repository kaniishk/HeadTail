import './App.css';
import {Routes, Route, Link} from "react-router-dom";
import { Home } from './Components/Home';
import { About } from './Components/About';
import { HeadTail } from './Components/HeadTail';


function App() {
  return (
    <>
      <div className="header">
          <Link to='/' style={{textDecoration:'inherit' ,color:'inherit', fontSize: '2em'}}>
            Home
          </Link>
      </div>
      <div className="content">
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/headtail' element={<HeadTail />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
