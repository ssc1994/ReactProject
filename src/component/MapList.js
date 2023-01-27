import axios from "axios";
import { Fragment, useEffect, useState, useContext } from "react";
import List from "./mapComponent/List";
import ListContext from "./../contexts/MapContextAPI.js";


const MapList = () => {

    const [data, setData] = useState();
    const[dataPlus , setDataPlus] = useState([]);
    const { state, action } = useContext(ListContext);
    const  [pageNum,setPageNum]=useState(1);
    let addr = "송파";

    const url = "https://apis.data.go.kr/B551014/SRVC_OD_API_SFMS_FACI/TODZ_API_SFMS_FACI_I"

    useEffect(() => {      //로딩시 시설리스트 출력 ( 기본값 페이지 : 1 / 갯수 : 5 / 지역 : 송파)
        (async () => {
            let urlquery = "?serviceKey=IxONcjfs6wc1hi5EUDKqUQfuvJ9%2B8kJ2QYxK1XXYm%2B%2FJsE5yIfdbfA12fHmbNu6YMYfoi1cd%2FTIppcx%2FllL9sQ%3D%3D";
            urlquery += `&pageNo=${pageNum}`;
            urlquery += "&numOfRows=10";
            urlquery += "&resultType=JSON";
            urlquery += `&faci_addr=${addr}`;
            
            let resultArr = await axios.get(url + urlquery)
                .then(res => {
                    setData(res.data.response.body.items.item);
                    return res.data.response.body.items.item;
                })
            setLoading(true)
        })();
    }, [pageNum])

    const handleMore = (e) => {     //클릭시 pageNum+1 (useEffect가 다시돌아감)
        setDataPlus(dataPlus.concat(data));
        action.setList(dataPlus);
        setPageNum(pageNum+1);
    }




    ///로딩페이지
    const [loading, setLoading] = useState(false);
    if (loading === false) {
        return <div>로딩중</div>
    }

    return (
        <Fragment>
            <h3>시설목록</h3>
            <div>
                        <button onClick={handleMore}>더보기</button>

            </div>
        </Fragment>

    )
}

export default MapList;