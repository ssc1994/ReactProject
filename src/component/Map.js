import { Fragment } from "react"
import KakaoMap from "./KakaoMap"
import MapList from "./MapList";
import { ListProvider } from "./../contexts/MapContextAPI.js"

const Map = () => {


        return (

        <Fragment>
            <h3>시설찾기</h3>
            <ListProvider>  {/* 공공데이터에서 받아온 위도 경도를 넣는 contextAPI */}
                <MapList/>
                <KakaoMap/>
            </ListProvider>

        </Fragment>
    )
}

export default Map;