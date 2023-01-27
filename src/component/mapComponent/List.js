const List = ({item}) => {




    return (

        <li>
            <div>
                <h3>시설명 : {item.faci_nm}</h3>
                <h3>업종명 : {item.ftype_nm}</h3>
                <span>시설도로명주소 : {item.faci_road_addr}</span><br />
                <span>운영여부 : {item.faci_stat_nm}</span><br />
                <span>-------------</span><br />

            </div>

        </li>
    )
}
export default List;