import { Fragment } from "react"
import KakaoMap from "./KakaoMap"
import MapList from "./MapList";
import { ListProvider } from "./../contexts/MapContextAPI.js"

//css
import styled from '../layout/Map.module.css';

const Map = () => {


    return (

        <div className={styled.findFacContainer}>
            <div className={styled.findFacBox}>
                <h3 className={styled.findFac}>공공시설 찾기</h3>
                <ListProvider>  {/* 공공데이터에서 받아온 위도 경도를 넣는 contextAPI */}
                    <MapList />
                    <KakaoMap />
                </ListProvider>
            </div>
        </div>
    )
}

export default Map;