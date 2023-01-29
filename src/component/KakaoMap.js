import { useEffect, useContext, useState } from "react";
import ListContext from "./../contexts/MapContextAPI.js";
const { kakao } = window;



const KakaoMap = () => {

    const { state, action } = useContext(ListContext);      ///MapList에서 데이터 받아오는 ContextAPI
    var i, marker;

    var map;

    useEffect(() => {
        (async () => {
            var infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });
            const container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
            const options = { //지도를 생성할 때 필요한 기본 옵션
                center: new kakao.maps.LatLng(37.499668, 127.030503), //지도의 중심좌표.
                level: 5 //지도의 레벨(확대, 축소 정도)
            };

            map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

            var points = [];
            for (let i = 0; i < state.length; i++) {
                let x = state[i].faci_lat;
                let y = state[i].faci_lot;
                // if (x == null || y == null) continue;
                points = points.concat({ title: state[i].faci_nm, place: new kakao.maps.LatLng(x, y) });

                (function setCenter() {
                    var moveLatLon = new kakao.maps.LatLng(state[state.length - 1].faci_lat, state[state.length - 1].faci_lot);
                    map.setCenter(moveLatLon);
                })();
            }

            for (i = 0; i < points.length; i++) {
                // 배열의 좌표들이 잘 보이게 마커를 지도에 추가합니다
                marker = new kakao.maps.Marker({
                    map: map,
                    position: points[i].place
                });

                infowindow = new kakao.maps.InfoWindow({
                    content: points[i].title // 인포윈도우에 표시할 내용

                });

                // 마커에 mouseover 이벤트와 mouseout 이벤트를 등록합니다
                // 이벤트 리스너로는 클로저를 만들어 등록합니다 
                // for문에서 클로저를 만들어 주지 않으면 마지막 마커에만 이벤트가 등록됨
                kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(map, marker, infowindow));
                kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(infowindow));

                marker.setMap(map);
            }

            function makeOverListener(map, marker, infowindow) {
                return function () {
                    infowindow.open(map, marker);
                };
            }

            // 인포윈도우를 닫는 클로저를 만드는 함수입니다 
            function makeOutListener(infowindow) {
                return function () {
                    infowindow.close();
                };
            }
        })();
    }, [state]);
    console.log(state)

    return (
        <div>
            <div id="map" style={{ width: '1000px', height: '800px', margin: '0 auto', border: "3px solid rgb(211, 255, 89)" }}></div>
        </div>
    )
}

export default KakaoMap;