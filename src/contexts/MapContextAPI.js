import { createContext, useState } from "react";

const { kakao } = window;

//1. 초기값 카카오
const ListContext = createContext([
    {
        faci_nm: '중앙정보처리학원',
        faci_lat: 37.499668,
        faci_lot: 127.030503
    }
]
)

const ListProvider = ({ children }) => {

    const [list, setList] = useState([
        {
            faci_nm: '중앙정보처리학원',
            faci_lat: 37.499668,
            faci_lot: 127.030503
        }
    ]);

    const value = {
        state: list,
        action: { setList }
    }


    return (
        <ListContext.Provider value={value}>{children}</ListContext.Provider>
    )
}

//3. Consumer, Provider 반환
const ListConsumer = ListContext.Consumer;

export { ListProvider, ListConsumer };

//기본 export
export default ListContext;