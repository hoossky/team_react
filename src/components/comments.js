import React from 'react'
import {MDBBtn} from "mdbreact";
import '../assets/css/main.css'

const Comments = () => {
    const state = {
        date: new Date()
    }
    return (

    <div id="wrapper">
            <div className="com-text">
                <div className="col-lg-12"><br/>
                    <h4>댓글</h4>
                </div>
                <div className="col-lg-12"><br/>
                    <h6>글쓴이 {/*{writer}*/} </h6>
                </div>
                 <div className="col-lg-12">
                     <h6>시간 {/*{reg_date*/} </h6>
                </div>
                <div className="com-text"><br/>
                    <textarea
                        placeholder="내용을 입력해주세요"
                    />
                </div>
                <tr>
                    <h6>아이디{""}<span>{state.date.toLocaleTimeString()}</span></h6>
                </tr>
            <br/>
            <MDBBtn outline color="primary"
                /*onClick={}*/
            >등록</MDBBtn>
            </div>
    </div>
    )
}
export default Comments
