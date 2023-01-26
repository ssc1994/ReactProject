const List = ({item}) => {




    return (

        <li>
            <div>
                <h3>시설명 : {item.faci_nm}</h3>
                <h3>업종명 : {item.ftype_nm}</h3>
                <span>시설도로명주소 : {item.faci_road_addr}</span><br />
                <span>운영여부 : {item.faci_stat_nm}</span><br />
                <span>------------------------------------</span><br />
                <span>시 : {item.addr_ctpv_nm}</span><br />
                <span>구 : {item.addr_cpb_nm}</span><br />
                <span>동 : {item.addr_emd_nm}</span><br />
                <span>시설좌표위도_lat : {item.faci_lat}</span><br />
                <span>시설좌표경도_lot : {item.faci_lot}</span><br />

            </div>

        </li>
    )
}
export default List;