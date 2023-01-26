import { Fragment } from "react"
import KakaoMap from "./KakaoMap"
import MapList from "./MapList";

const Map = () => {

        return (

        <Fragment>
            <h3>시설찾기</h3>
            <div>  {/* 지도에 나타낼 시설목록 */}
                <MapList/>
                <KakaoMap/>
            </div>

        </Fragment>
    )
}

export default Map;