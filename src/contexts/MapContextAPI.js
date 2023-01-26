import { createContext } from "react";


const MapContext = createContext(
    {
    title: '카카오',
    latlng: new kakao.maps.LatLng(33.450705, 126.570677)
    }
)