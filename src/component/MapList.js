import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import KakaoMap from "./KakaoMap";
import List from "./mapComponent/List";



const MapList = () => {

    const [data, setData] = useState();
    const [pageNum, setPageNum] = useState(1);
    const [positions, setPositions] = useState([]);

    const handleList = (e) => {     //페이징처리예정
        // if (e.target.tagName !== 'LI') return;
        // setPageNum(e.target.innerHTML);
        // console.log(pageNum)
    }

    const handleHide = (e) => { //수정예정
        if (e.target.innerHTML === '숨기기') {
            e.target.nextElementSibling.style.display = 'none';
            e.target.innerHTML = '보이기'
            return;
        }
        if (e.target.innerHTML === '보이기') {
            e.target.nextElementSibling.style.display = 'flex';
            e.target.innerHTML = '숨기기'
            return;
        }
    }

    useEffect(() => {      //로딩시 시설리스트 출력 ( 기본값 페이지 : 1 / 갯수 : 5 / 지역 : 송파)
        (async () => {
            const url = "https://apis.data.go.kr/B551014/SRVC_OD_API_SFMS_FACI/TODZ_API_SFMS_FACI_I"
            let urlquery = "?serviceKey=IxONcjfs6wc1hi5EUDKqUQfuvJ9%2B8kJ2QYxK1XXYm%2B%2FJsE5yIfdbfA12fHmbNu6YMYfoi1cd%2FTIppcx%2FllL9sQ%3D%3D";
            urlquery += `&pageNo=${pageNum}`;
            urlquery += "&numOfRows=5";
            urlquery += "&resultType=JSON";
            urlquery += "&faci_addr=송파";
            let resultArr = await axios.get(url + urlquery)
                .then(res => {
                    setData(res.data.response.body.items.item);
                    return res.data.response.body.items.item;
                })
            setLoading(true)

            for (let i = 0; i < resultArr.length; i++) {
               let marker = {title : resultArr[i].faci_nm, latlng : new KakaoMap.maps.LatLng(resultArr[i].faci_lat, resultArr[i].lot)}
               let newPositions = positions.concat(marker);
                setPositions(newPositions)
            }


        })();
    }, [])
    console.log(positions)

    ///로딩페이지
    const [loading, setLoading] = useState(false);
    if (loading === false) {
        return <div>로딩중</div>
    }



    return (
        <Fragment>
            <h3>시설목록</h3>
            <div>
                <button onClick={handleHide}>숨기기</button>
                <ul onClick={handleList} style={{ listStyle: "none", display: "flex" }}>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                </ul>
                <ul>
                    {
                        data.map((item, index) => {
                            if (item.sdwn_ymd == null) {
                                return <List key={index + 1} item={item}
                                />
                            }
                        })
                    }
                </ul>

            </div>
        </Fragment>

    )
}

export default MapList;