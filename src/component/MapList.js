import axios from "axios";
import {  useEffect, useState, useContext } from "react";
import ListContext from "./../contexts/MapContextAPI.js";

//css
import styled from '../layout/Map.module.css';

const MapList = () => {

    const [dataPlus, setDataPlus] = useState([]);
    const { state, action } = useContext(ListContext);
    const [pageNum, setPageNum] = useState(1);
    const [addr, setAddr] = useState("강남구");

    const handleAddr = (e) => {
        setAddr(e.target.value);
    }

    const url = "https://apis.data.go.kr/B551014/SRVC_OD_API_SFMS_FACI/TODZ_API_SFMS_FACI_I"

    useEffect(() => {
        (async () => {
            let urlquery = "?serviceKey=/*서비스키*/";
            urlquery += `&pageNo=${pageNum}`;
            urlquery += "&numOfRows=10";
            urlquery += "&resultType=JSON";
            urlquery += `&faci_addr=${addr}`;

            let resultArr = await axios.get(url + urlquery)
                .then(res => {
                    setDataPlus(dataPlus.concat(res.data.response.body.items.item));
                    return res.data.response.body.items.item;
                })
            setLoading(true);
        })();
    }, [pageNum])

    const handleMore = () => {     //클릭시 pageNum+1 (useEffect가 다시돌아감)
        action.setList(dataPlus);
        setPageNum(pageNum + 1);
    }

    ///로딩페이지
    const [loading, setLoading] = useState(false);
    if (loading === false) {
        return <div>로딩중</div>
    }

    return (
        <div className={styled.mapListContainer}>
            <div className={styled.mapListButtonBox} style={{ height: "50px" }}>

                <button onClick={handleMore} className={styled.seeMoreButton}>더보기</button>
            </div>
            <div className={styled.mapListSelectBox}>
                <select className={styled.select} onChange={handleAddr}>
                    {/* 서울 */}
                    <option value={"강남구"}>강남구</option>
                    <option value={"송파구"}>송파구</option>
                    <option value={"종로구"}>종로구</option>
                    <option value={"중구"}>중구</option>
                    <option value={"용산구"}>용산구</option>
                    <option value={"성동구"}>성동구</option>
                    <option value={"광진구"}>광진구</option>
                    <option value={"동대문구"}>동대문구</option>
                    <option value={"중랑구"}>중랑구</option>
                    <option value={"성북구"}>성북구</option>
                    <option value={"강북구"}>강북구</option>
                    <option value={"도봉구"}>도봉구</option>
                    <option value={"노원구"}>노원구</option>
                    <option value={"은평구"}>은평구</option>
                    <option value={"서대문구"}>서대문구</option>
                    <option value={"마포구"}>마포구</option>
                    <option value={"양천구"}>양천구</option>
                    <option value={"강서구"}>강서구</option>
                    <option value={"구로구"}>구로구</option>
                    <option value={"금천구"}>금천구</option>
                    <option value={"영등포구"}>영등포구</option>
                    <option value={"동작구"}>동작구</option>
                    <option value={"관악구"}>관악구</option>
                    <option value={"서초구"}>서초구</option>
                    <option value={"강동구"}>강동구</option>
                </select>

            </div>
        </div>

    )
}

export default MapList;
