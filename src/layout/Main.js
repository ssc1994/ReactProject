import { useNavigate } from 'react-router-dom';
import styled from './Main.module.css';


const Main = () => {

    const navigator = useNavigate();

    const buttonClick = () => {
        navigator('/map');
    }

    return (
        <div className={styled.container}>
            <div className={styled.firstimgBox}>
                <img src="/img/3.png" className={styled.img1} />
            </div>
            <div className={styled.inner}>
                <div className={styled.innerImgBox1}>
                    <img src='/img/4.png' className={styled.img2} />
                    <div className={styled.text1}>
                        <span className={styled.text1Span1}>운동의 효과</span>
                        <span className={styled.text1Span2}>사람의 몸은 수많은 세포로 구성되어 있어 생명을 유지하고 건강을 어느 수준 이상의 자극이 필요한데 가장 효과적인 자극은 바로 운동이다. 운동은 세포 자체의 활동성을 높여서 심장, 폐, 혈관, 근육 등 여러 종류의 세포로 이루어진 인체 기관인 형태와 기능을 발달하게 해주며, 생리적 노쇠현상을 지연시킨다.</span>
                    </div>
                </div>
                <div className={styled.innerImgBox2}>
                    <div className={styled.img3}></div>
                    {/* <img src='/img/gym.png' className={styled.img3} /> */}
                    <div className={styled.text2}>
                        <span className={styled.text2Span1}>운동은 오늘부터!</span><br/>
                        <span className={styled.text2Span2}>주변의 체육시설을 찾아보세요!</span>
                        <button className={styled.findButton} onClick={buttonClick}>주변 시설찾기</button>
                    </div>

                </div>
            </div>
            <div className={styled.footerBox}>
                <div className={styled.footerMiniBox1}>
                    <span>30119 세종특별자치시 갈매로 388 정부세종청사 15동</span><br />
                    <span>대표전화 : 044-203-2000(월~금 09:00~18:00, 공휴일 제외)  팩스 : 044-203-3447</span><br />
                    <span>Copyright ⓒ Ministry of Culture, Sports and Tourism</span><br />
                    {/* <img src="/img/footer1.png"/>
                    <img src="/img/footer2.png"/>
                    <img src="/img/footer3.png"/> */}
                </div>
                <div className={styled.footerMiniBox2}>
                    <span>© 2035 by Sports Information Club. Powered and secured by Wix</span>
                </div>
            </div>
        </div>
    )
}


export default Main;