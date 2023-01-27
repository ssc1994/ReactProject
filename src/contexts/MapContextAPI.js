import { createContext, useState } from "react";

const {kakao} = window;

//1. 초기값 카카오
const ListContext = createContext([
    {
    title: '카카오',
    latlng: new kakao.maps.LatLng(33.450705, 126.570677)
    }
]
)

const ListProvider = ({children}) => {
    
    const [list, setList] = useState([
        {
        title: '카카오',
        latlng: new kakao.maps.LatLng(33.450705, 126.570677)
        }
    ]);

    const value = {
        state : list,
        action : {setList}
    }


    return (
        <ListContext.Provider value = {value}>{children}</ListContext.Provider>
    )
}

//3. Consumer, Provider 반환
const ListConsumer = ListContext.Consumer;

export {ListProvider, ListConsumer};

//기본 export
export default ListContext;