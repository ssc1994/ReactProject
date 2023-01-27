import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from "./layout/Header";
import Main from './layout/Main';
import Map from './component/Map';
import Record from './component/Record';
import Member from './component/Member';

const App = ()=> {
  return (
    <Routes>
        <Route element={<Header/>}>
          <Route path="/" element={<Main/>} />
          <Route path="/map" element={<Map/>} />
          <Route path="/record" element={<Record/>} />
          <Route path="/login" element={<Member/>} />
          <Route path="/join" element={<Member/>} />
        </Route>
    </Routes>
  );
}

export default App;
