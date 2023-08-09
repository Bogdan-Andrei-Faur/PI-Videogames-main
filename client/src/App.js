import './App.css';
import {Route, Routes, useLocation} from "react-router-dom";
import Landing from './Components/Landing/Landing';
import Home from './Components/Home/Home';
import SearchBar from './Components/SearchBar/SearchBar';

function App() {
  const {pathname} = useLocation();

  return (
    <div className="App">
      {pathname !== "/" && <SearchBar/>}
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path='/home' element={<Home/>}/>
        </Routes>
    </div>
  );
}

export default App;
