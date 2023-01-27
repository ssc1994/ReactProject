import { useEffect, useContext, useState } from "react";
import ListContext from "./../contexts/MapContextAPI.js";
const { kakao } = window;


const KakaoMap = () => {
    const { state, action } = useContext(ListContext);      ///MapList에서 데이터 받아오는 ContextAPI
    useEffect(() => {
        
        const container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
        const options = { //지도를 생성할 때 필요한 기본 옵션
            center: new kakao.maps.LatLng(37.5073416485, 127.1076899418), //지도의 중심좌표.
            level: 7 //지도의 레벨(확대, 축소 정도)
        };

        const map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
        
        // 버튼을 클릭하면 아래 배열의 좌표들이 모두 보이게 지도 범위를 재설정합니다 
        var points = [];
        
        for( let i = 0 ; i<state.length ; i++){
            let x = state[i].faci_lat;
            let y = state[i].faci_lot;
            if(x==NaN || y == NaN) return;
            points = points.concat(new kakao.maps.LatLng(x,y));
        }
        
        // 지도를 재설정할 범위정보를 가지고 있을 LatLngBounds 객체를 생성합니다
        var bounds = new kakao.maps.LatLngBounds();
        
        var i, marker;
        for (i = 0; i < points.length; i++) {
            // 배열의 좌표들이 잘 보이게 마커를 지도에 추가합니다
            marker = new kakao.maps.Marker({ position: points[i] });
            marker.setMap(map);
            
            // LatLngBounds 객체에 좌표를 추가합니다
            bounds.extend(points[i]);
        }
        
        
        
    }, [state])
    const delMarket = () => {

    }

    return (
        <div>
            <button onClick={delMarket}>마커 지우기</button>
            <div id="map" style={{ width: '500px', height: '400px', margin: '0 auto' }}></div>
        </div>
    )
}

export default KakaoMap;