import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from "./layout/Header";
import Main from './layout/Main';
import Map from './component/Map';
import Record from './component/Record';
import Mypage from './component/MyPage2';
import Member from './component/Member';
import KakaoLogin from './component/KakaoLogin';

const App = ()=> {
  return (
    <Routes>
        <Route element={<Header/>}>
          <Route path="/" element={<Main/>} />
          <Route path="/map" element={<Map/>} />
          <Route path="/record" element={<Record/>} />
          <Route path="/mypage" element={<Mypage/>} />
          <Route path="/login" element={<Member/>} />
          <Route path="/join" element={<Member/>} />
          <Route path="/oauth/token" element={<KakaoLogin/>} />
        </Route>
    </Routes>
  );
}

export default App;
