import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from "./layout/Header";
import Main from './layout/Main';
import Map from './component/Map';
import Record from './component/Record';
import Mypage from './component/Mypage';
import Login from './component/Login';
import Join from './component/Join';

const App = ()=> {
  return (
    <Routes>
      <Route element={<Header/>}>
        <Route path="/" element={<Main/>} />
        <Route path="/map" element={<Map/>} />
        <Route path="/record" element={<Record/>} />
        <Route path="/mypage" element={<Mypage/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/join" element={<Join/>} />

      </Route>


    </Routes>
  );
}

export default App;
