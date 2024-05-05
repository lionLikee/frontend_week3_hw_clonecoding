
import './Carrotmarket.css';
import logopicture from './logo.png';

export function CarrotmarketHeader(){
    return(
            <div className="header">
                <a href="#">
                    <div className="logo">
                        <img className="logo_pic"  alt="carrot_logo" src={logopicture} />
                    </div>
                </a>

                <ul className="nav">
                    <li><a href="#">중고거래</a></li>
                    <li><a href="#">동네업체</a></li>
                    <li><a className="orange_alba" href="#">알바</a></li>
                    <li><a href="#">부동산</a></li>
                    <li><a href="#">중고차 직거래</a></li>
                </ul>

                <div className="inputFind">
                    <input type="text" className="findInput" placeholder=" 물품이나 동네를 검색해보세요"></input>
                </div>

                <div className="chat">
                    <button className="beginchatBtn">채팅하기</button>
                </div>
            </div>
        );
}