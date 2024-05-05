import React, { useState } from 'react';
import './Carrotmarket.css';
import logopicture from './logo.png';
import noticepicture from './header-image.png';
import pic1 from './1.jpeg';
import pic2 from './2.jpeg';
import pic3 from './3.jpeg';
import pic4 from './4.jpeg';
import pic5 from './5.jpeg';
import pic6 from './6.jpeg';
import pic7 from './7.jpeg';
import pic8 from './8.jpeg';
import pic9 from './9.jpeg';
import pic10 from './10.jpeg';
import bannerpic from './banner-icon.png';

export function Carrotmarket(){
    return(

        <div className="container">
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

            <div className="notice_up">
                <div className="content1">
                    <h1>우리 동네에서 찾는</h1>
                    <h1>당근알바</h1>
                    <br></br>
                    <p>걸어서 10분 거리의</p>
                    <p>동네 알바들 여기 다 있어요.</p>
                    <br></br>
                    <div className="noticeUpBtn">
                        <button className="upBtn">공고 올리기</button>
                    </div>
                </div>

                <div className="content2">
                        <img className="notice_pic"  alt="noticepicture" src={noticepicture} />
                </div>
            </div>

            <div className="works">
                <div className="title">
                    <p>인기 당근알바</p>
                </div>

                <br></br>

                <div className="albaList">
                    <div className="alba">
                        <a href="#">
                            <div className='picture'>
                                <img className="pictures"  alt="pic1" src={pic1} />
                            </div>
                        </a>
                        <a href="#">
                            <div className="explain">
                                <p className="alba_title">포장시설 야간 계약직 채용</p>
                                <p className='place'>hive 강원특별자치도 원주시 우산동</p>
                                <p className='price'>시급 11,000</p>
                            </div>
                        </a>
                    </div>

                    <div className="alba">
                        <a href="#">
                            <div className='picture'>
                                <img className="pictures"  alt="pic2" src={pic2} />
                            </div>
                        </a>
                        <a href="#">
                            <div className="explain">
                                <p className="alba_title">익산 서동축데 아르바이트 구합니다.</p>
                                <p className='place'>풍선 전라북도 익산시 동산동</p>
                                <p className='price'>시급 15,000</p>
                            </div>
                        </a>
                    </div>

                    <div className="alba">
                        <a href="#">
                            <div className='picture'>
                                <img className="pictures"  alt="pic3" src={pic3} />
                            </div>
                        </a>
                        <a href="#">
                            <div className="explain">
                                <p className="alba_title">익산역 팝업스토어 1달 단기 알바하실분</p>
                                <p className='place'>퍼니랜드 전라북도 익산시 창인동1가</p>
                                <p className='price'>시급 10,000</p>
                            </div>
                        </a>
                    </div>

                    <div className="alba">
                        <a href="#">
                            <div className='picture'>
                                <img className="pictures"  alt="pic4" src={pic4} />
                            </div>
                        </a>
                        <a href="#">
                            <div className="explain">
                                <p className="alba_title">삼성전자 어린이날 행사</p>
                                <p className='place'>M&F promotion 충청남도 아산시 배방읍</p>
                                <p className='price'>시급 10,000</p>
                            </div>
                        </a>
                    </div>

                    <div className="alba">
                        <a href="#">
                            <div className='picture'>
                                <img className="pictures"  alt="pic5" src={pic6} />
                            </div>
                        </a>
                        <a href="#">
                            <div className="explain">
                                <p className="alba_title">현장에서 일하실분 구합니다</p>
                                <p className='place'>강원특별자치도 원주시 학성동</p>
                                <p className='price'>시급 11,000</p>
                            </div>
                        </a>
                    </div>

                    <div className="alba">
                        <a href="#">
                            <div className='picture'>
                                <img className="pictures"  alt="pic6" src={pic5} />
                            </div>
                        </a>
                        <a href="#">
                            <div className="explain">
                                <p className="alba_title">삼성전자 어린이날 행사</p>
                                <p className='place'>M&F promotion 충청남도 아산시 배방읍</p>
                                <p className='price'>시급 10,000</p>
                            </div>
                        </a>
                    </div>

                    <div className="alba">
                        <a href="#">
                            <div className='picture'>
                                <img className="pictures"  alt="pic7" src={pic7} />
                            </div>
                        </a>
                        <a href="#">
                            <div className="explain">
                                <p className="alba_title">간단한 엑셀, 서류 작업 오전3시간</p>
                                <p className='place'>서울특별시 구로구 구로동</p>
                                <p className='price'>시급 10,000</p>
                            </div>
                        </a>
                    </div>

                    <div className="alba">
                        <a href="#">
                            <div className='picture'>
                                <img className="pictures"  alt="pic8" src={pic8} />
                            </div>
                        </a>
                        <a href="#">
                            <div className="explain">
                                <p className="alba_title">단순 초장알바 급구합니다</p>
                                <p className='place'>요거마마 경기도 화성시 영천동</p>
                                <p className='price'>시급 10,000</p>
                            </div>
                       </a>
                    </div>

                    <div className="alba">
                        <a href="#">
                                <div className='picture'>
                                    <img className="pictures"  alt="pic9" src={pic9} />
                                </div>
                        </a>
                        <a href="#">
                                <div className="explain">
                                    <p className="alba_title">충주 탄금공원 푸드트럭 알바 구해요</p>
                                    <p className='place'>널 부르는트럭 충척북도 충주시 금릉동</p>
                                    <p className='price'>시급 11,000</p>
                                </div>

                        </a>
                    </div>

                    <div className="alba">
                        <a href="#">
                                <div className='picture'>
                                    <img className="pictures"  alt="pic10" src={pic10} />
                                </div>
                        </a>
                        <a href="#">
                                <div className="explain">
                                    <p className="alba_title">판넬시공자 급하게 구합니다</p>
                                    <p className='place'>경상북도 경주시 안강읍</p>
                                    <p className='price'>월급 4,000,000</p>
                                </div>
                        </a>
                    </div>

                    
                </div>
            </div>

            <div className="freeEx">
                <div className="bannerpic">
                    <img className="bannerimage"  alt="bannerimage" src={bannerpic} />   
                </div>

                <div className="bannertext">
                    <p>대규모 채용이 필요하다면</p>
                    <p>당근알바 기업용 서비스에 대해 알아보세요!</p>
                </div>

                <div className="Btns">
                    <button className="freeBtn">7일 무료 체험</button>
                    <button className="askBtn">1:1 문의</button>
                </div>

        
            </div>
        </div>

    );
}