import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from "./layout/Header";
import Test from './test/Test';
import Map from './component/Map';
import Record from './component/Record';
import Mypage from './component/Mypage';
import Member from './component/Member';

const App = ()=> {
  return (
    <Routes>
      <Route element={<Header/>}>
        <Route path="/" element={<Test/>} />
        <Route path="/map" element={<Map/>} />
        <Route path="/record" element={<Record/>} />
        <Route path="/mypage" element={<Mypage/>} />
        <Route path="/login" element={<Member/>} />
        <Route path="/join" element={<Member/>} />
      </Route>
    </Routes>
  );
}

export default App;
