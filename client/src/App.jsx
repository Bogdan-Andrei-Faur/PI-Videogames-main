import './App.css';
import {Route, Routes, useLocation} from "react-router-dom";
import Landing from './Components/Landing/Landing.jsx';
import Home from './Components/Home/Home.jsx';
import SearchBar from './Components/SearchBar/SearchBar.jsx';
import Detail from './Components/Detail/Detail.jsx';
import Form from './Components/Form/Form.jsx';

function App() {
  const {pathname} = useLocation();

  return (
    <div className="App">
      {pathname !== "/" && <SearchBar/>}
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path="/detail/:id" element={<Detail/>}/>
          <Route path='/create' element={<Form/>}/>
        </Routes>
    </div>
  );
}

export default App;