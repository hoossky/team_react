import React, {useState} from 'react';
import { Modal, Button } from 'react-bootstrap';
import {MDBBtn, MDBCol, MDBMask, MDBRow, MDBView} from "mdbreact";
import {ThemeProvider} from "styled-components";
import {DatePicker, theme} from "react-trip-date";
import {Link, Route, Switch} from "react-router-dom";
import {
    MovingBusan, MovingChungbuk, MovingChungnam,
    MovingDaegu,
    MovingDaejeon, MovingGangwon,
    MovingGwangju, MovingGyeongbuk,
    MovingGyeonggi, MovingGyeongnam,
    MovingIncheon, MovingJeju, MovingJeonbuk, MovingJeonnam, MovingSejong,
    MovingSeoul, MovingUlsan
} from "../move/component/movingPoint/movingLocal";
import {MovingEndPoint, MovingStartPoint} from "../move/component/movingPoint";
import {MCalendar} from "../../pages";
import MovingFloor from "../move/component/movingPoint/MovingFloor";


const ModalTest = ({ modalPage, show, handleClose, handlePage }) => {
    const [shows, setShow] = useState(false);
    const onClickShow=e=>{
        setShow(!shows)
    }

    return (
        <div>
            <Modal  size={"lg"} show={show} onHide={handleClose}>

                    {(modalPage === 1) &&
                    <div className="modalImg">
                        <Modal.Header closeButton>
                            <Modal.Title id="example-custom-modal-styling-title">
                                이사종류
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body onClick={handlePage}>
                            <MDBRow>
                                <MDBCol md="5">
                                    <MDBView hover>
                                        <img
                                            src="https://image.flaticon.com/icons/svg/888/888448.svg"
                                            className="img-fluid"
                                            alt=""

                                        /><h3>보관이사</h3><p>국내 최대 규모의 보관창고운영<br/>안전하고 깔끔한 보관서비스</p>
                                        <MDBMask className="flex-center" overlay="red-strong">
                                            <p className="white-text">보관이사</p>
                                        </MDBMask>
                                    </MDBView>
                                </MDBCol>
                                <MDBCol md="5">
                                    <MDBView hover>
                                        <img
                                            src="https://image.flaticon.com/icons/svg/1625/1625514.svg"
                                            className="img-fluid"
                                            alt=""
                                        /><h3>사무실이사</h3><p>회사,공장,병원,관공서,학교,학원 등의 이사</p>
                                        <MDBMask className="flex-center" overlay="red-strong">
                                            <p className="white-text">사무실이사</p>
                                        </MDBMask>
                                    </MDBView>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow>
                                <MDBCol md="5">
                                    <MDBView hover>
                                        <img
                                            src="https://image.flaticon.com/icons/svg/3023/3023392.svg"
                                            className="img-fluid"
                                            alt=""
                                        /><h3>집이사</h3><p>이삿짐이 1톤 이상의 짐</p>
                                        <MDBMask className="flex-center" overlay="red-strong">
                                            <p className="white-text">집이사</p>
                                        </MDBMask>
                                    </MDBView>
                                </MDBCol>
                                <MDBCol md="5">
                                    <MDBView hover>
                                        <img
                                            src="https://image.flaticon.com/icons/svg/948/948615.svg"
                                            className="img-fluid"
                                            alt=""
                                        /><h3>소형이사</h3><p>이삿짐이 1톤 이하의 짐</p>
                                        <MDBMask className="flex-center" overlay="red-strong">
                                            <p className="white-text">소형이사</p>
                                        </MDBMask>
                                    </MDBView>
                                </MDBCol>
                            </MDBRow>
                        </Modal.Body>
                    </div>
                    }
                    {(modalPage === 2) &&
                    <div> <Modal.Header closeButton>
                        <Modal.Title>이사날짜</Modal.Title>
                    </Modal.Header>
                        <Modal.Body>
                            <MCalendar/>
                        </Modal.Body>

                        <Modal.Footer>
                        <Button variant="secondary" onClick={handlePage} >다음</Button>
                        </Modal.Footer></div>
                    }
                    {(modalPage === 3) &&
                    <div onClick={onClickShow}>
                            <Modal.Header closeButton>
                                <Modal.Title id="example-custom-modal-styling-title">
                                    출발지( 서울 )
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body >

                                <Switch>
                                    <a className="list" onClick={handlePage}>
                                        <MDBBtn component={MovingFloor} onClick={()=>setShow(false)}> 강남구</MDBBtn>
                                        <MDBBtn onClick={()=>setShow(false)}>강동구</MDBBtn>
                                        <MDBBtn onClick={()=>setShow(false)}>강북구</MDBBtn>
                                        <MDBBtn onClick="str_zipcode_gubun('서울강서구')">강서구</MDBBtn>
                                        <MDBBtn onClick="str_zipcode_gubun('서울관악구')">관악구</MDBBtn>
                                        <MDBBtn onClick="str_zipcode_gubun('서울광진구')">광진구</MDBBtn>
                                        <MDBBtn onClick="str_zipcode_gubun('서울구로구')">구로구</MDBBtn>
                                        <MDBBtn onClick="str_zipcode_gubun('서울금천구')">금천구</MDBBtn>
                                        <MDBBtn onClick="str_zipcode_gubun('서울노원구')">노원구</MDBBtn>
                                        <MDBBtn onClick="str_zipcode_gubun('서울도봉구')">도봉구</MDBBtn>
                                        <MDBBtn onClick="str_zipcode_gubun('서울동대문구')">동대문구</MDBBtn>
                                        <MDBBtn onClick="str_zipcode_gubun('서울동작구')">동작구</MDBBtn>
                                        <MDBBtn onClick="str_zipcode_gubun('서울마포구')">마포구</MDBBtn>
                                        <MDBBtn onClick="str_zipcode_gubun('서울서대문구')">서대문구</MDBBtn>
                                        <MDBBtn onClick="str_zipcode_gubun('서울서초구')">서초구</MDBBtn>
                                        <MDBBtn onClick="str_zipcode_gubun('서울성동구')">성동구</MDBBtn>
                                        <MDBBtn onClick="str_zipcode_gubun('서울성북구')">성북구</MDBBtn>
                                        <MDBBtn onClick="str_zipcode_gubun('서울송파구')">송파구</MDBBtn>
                                        <MDBBtn onClick="str_zipcode_gubun('서울양천구')">양천구</MDBBtn>
                                        <MDBBtn onClick="str_zipcode_gubun('서울영등포구')">영등포구</MDBBtn>
                                        <MDBBtn onClick="str_zipcode_gubun('서울용산구')">용산구</MDBBtn>
                                        <MDBBtn onClick="str_zipcode_gubun('서울은평구')">은평구</MDBBtn>
                                        <MDBBtn onClick="str_zipcode_gubun('서울종로구')">종로구</MDBBtn>
                                        <MDBBtn onClick="str_zipcode_gubun('서울중구')">중구</MDBBtn>
                                        <MDBBtn onClick="str_zipcode_gubun('서울중랑구')">중랑구</MDBBtn>
                                    </a>
                                </Switch>
                            </Modal.Body>
                       </div>
                    }
                    {(modalPage === 4) &&
                    <div onClick={onClickShow}>
                        <Modal.Header closeButton>
                            <Modal.Title id="example-custom-modal-styling-title">
                                도착지( 서울 )
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body >

                            <Switch>
                                <a className="list" onClick={handlePage}>
                                    <MDBBtn component={MovingFloor} onClick={()=>setShow(false)}> 강남구</MDBBtn>
                                    <MDBBtn onClick={()=>setShow(false)}>강동구</MDBBtn>
                                    <MDBBtn onClick={()=>setShow(false)}>강북구</MDBBtn>
                                    <MDBBtn onClick="str_zipcode_gubun('서울강서구')">강서구</MDBBtn>
                                    <MDBBtn onClick="str_zipcode_gubun('서울관악구')">관악구</MDBBtn>
                                    <MDBBtn onClick="str_zipcode_gubun('서울광진구')">광진구</MDBBtn>
                                    <MDBBtn onClick="str_zipcode_gubun('서울구로구')">구로구</MDBBtn>
                                    <MDBBtn onClick="str_zipcode_gubun('서울금천구')">금천구</MDBBtn>
                                    <MDBBtn onClick="str_zipcode_gubun('서울노원구')">노원구</MDBBtn>
                                    <MDBBtn onClick="str_zipcode_gubun('서울도봉구')">도봉구</MDBBtn>
                                    <MDBBtn onClick="str_zipcode_gubun('서울동대문구')">동대문구</MDBBtn>
                                    <MDBBtn onClick="str_zipcode_gubun('서울동작구')">동작구</MDBBtn>
                                    <MDBBtn onClick="str_zipcode_gubun('서울마포구')">마포구</MDBBtn>
                                    <MDBBtn onClick="str_zipcode_gubun('서울서대문구')">서대문구</MDBBtn>
                                    <MDBBtn onClick="str_zipcode_gubun('서울서초구')">서초구</MDBBtn>
                                    <MDBBtn onClick="str_zipcode_gubun('서울성동구')">성동구</MDBBtn>
                                    <MDBBtn onClick="str_zipcode_gubun('서울성북구')">성북구</MDBBtn>
                                    <MDBBtn onClick="str_zipcode_gubun('서울송파구')">송파구</MDBBtn>
                                    <MDBBtn onClick="str_zipcode_gubun('서울양천구')">양천구</MDBBtn>
                                    <MDBBtn onClick="str_zipcode_gubun('서울영등포구')">영등포구</MDBBtn>
                                    <MDBBtn onClick="str_zipcode_gubun('서울용산구')">용산구</MDBBtn>
                                    <MDBBtn onClick="str_zipcode_gubun('서울은평구')">은평구</MDBBtn>
                                    <MDBBtn onClick="str_zipcode_gubun('서울종로구')">종로구</MDBBtn>
                                    <MDBBtn onClick="str_zipcode_gubun('서울중구')">중구</MDBBtn>
                                    <MDBBtn onClick="str_zipcode_gubun('서울중랑구')">중랑구</MDBBtn>
                                </a>
                            </Switch>

                        </Modal.Body>

                    </div>
                    }


            </Modal>
        </div>
    );
};
export default ModalTest;