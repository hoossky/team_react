import React, {useEffect, useRef, useState} from 'react';
import ReactPlayer from 'react-player'
import Duration from './Duration'
import {MDBBtn, MDBInput,MDBCol,MDBCardImage,MDBCard,MDBCardBody,MDBCardTitle,MDBCardText} from 'mdbreact'
import {SideBar} from "../../commons";
import {Link, useHistory} from 'react-router-dom'

const VideoTest = () => {
   const [state,setState]=useState("")
   const [url,setUrl]=useState(null)
    const[played,setPlayed]=useState(0)
    const[loaded,setLoaded]=useState(0)
    const [controls,setControls]=useState(false)
    const [light,setLight]=useState(false)
    const [volume,setVolume]=useState(0.8)
    const [muted,setMuted]=useState(false)
    const [duration,setDuration]=useState(0)
    const [playbackRate,setPlaybackRate]=useState(1.0)
    const [loop,setLoop]=useState(false)
    const [pip,setPip]=useState(false)
    const [playing,setPlaying]=useState(true)
    const [seeking,setSeeking]=useState(false)
    const [writer,setWriter]=useState('')
    const [title,setTitle]=useState(
        JSON.parse(sessionStorage.estiDate).movingName
    )
    const [estiDate, setEstiDate] = useState(
        JSON.parse(sessionStorage.getItem('userData') || '{}'),
    );
    const history = useHistory();
/*    useEffect(() => {
        setWriter(userData.id);
        setBirthDate(userData.birthDate);
        setGender(userData.gender);
        setAddr(userData.address);
    }, [userData]);*/

    const load = url => {
    setState({
            url,
            played: 0,
            loaded: 0,
            pip: false
        })
    }

    const  renderLoadButton = (url, label) => {
       return (
           <button onClick={() => load(url)}>
               {label}
           </button>
       )
   }
   const  handlePlayPause = () => {
       setPlaying(!playing )
   }

   const handleTogglePIP = () => {
       setPip(!pip)
    }

   const handlePlay = () => {
        console.log('onPlay')
       setPlaying( playing)
    }
   const handleEnablePIP = () => {
        console.log('onEnablePIP')
       setPip(true)
    }
    const handleDisablePIP = () => {
        console.log('onDisablePIP')
        setPip(!pip)
    }
    const handlePause = () => {
        console.log('onPause')
        setPlaying(false)//무조건 false로 둘것
    }
    const handleEnded = () => {
        console.log('onEnded')
        setPlaying(loop)
    }
   const handleDuration = (duration) => {
        console.log('onDuration', duration)
        setDuration( duration )
    }
    const  ref = player => {
        setPlayer(player)
    }
    const [player,setPlayer] = useState("")

    const playerref = useRef(ref)
   const handleProgress = state => {
        console.log('onProgress', state)
        // We only want to update time slider if we are not currently seeking
        if (!seeking) {
            setState(state)
        }
    }
    return (
        <div>
            <SideBar/>
            <div id="wrapper">
            <div id="page-wrapper">
            <div className="row">
            <div className="col-lg-12"><br/>
            <h2 className="page-header">내 방 영상</h2><br/>
            </div>
            </div>
            <div className="row">
            <div className="col-lg-12">
            <div className="panel panel-default">
                <MDBCol style={{ maxWidth: "100rem" }}>
                    <MDBCard>
                        <ReactPlayer  ref={playerref}
                                      className='react-player'
                                      width='900px'
                                      height={'500px'}
                                      url={"https://youtu.be/NgHu-hnW8KQ"}
                                      pip={pip}
                                      playing={playing}
                                      controls={controls}
                                      light={light}
                                      loop={loop}
                                      playbackRate={playbackRate}
                                      volume={volume}
                                      muted={muted}
                                      onReady={() => console.log('onReady')}
                                      onStart={() => console.log('onStart')}
                                      onPlay={handlePlay}
                                      onEnablePIP={handleEnablePIP}
                                      onDisablePIP={handleDisablePIP}
                                      onPause={handlePause}
                                      onBuffer={() => console.log('onBuffer')}
                                      onSeek={e => console.log('onSeek', e)}
                                      onEnded={handleEnded}
                                      onError={e => console.log('onError', e)}
                                      onProgress={handleProgress}
                                      onDuration={handleDuration} />
                        <MDBCardBody>
                            <MDBCardTitle>영상정보</MDBCardTitle>
                            <MDBCardText>
                                <tbody>
                                <tr>
                                    <th>영상이 </th>
                                    <td>{playing ? '나오고 있습니다.' : '멈췄습니다.'}</td>
                                </tr>
                                <tr>
                                    <th>볼륨크기</th>
                                    <td>{volume.toFixed(3)}</td>
                                </tr>
                                <tr>
                                    <th>영상길이</th>
                                    <td><Duration seconds={duration} /></td>
                                </tr>


                                </tbody>
                            </MDBCardText>
                            <tr>
                                <th>재생 버튼</th>
                                <td>

                                    <MDBBtn onClick={handlePlayPause}>{playing ? '일시정지' : '재생시작'}</MDBBtn>

                                    {light &&
                                    <MDBBtn onClick={() => player.showPreview()}>Show preview</MDBBtn>}
                                    {ReactPlayer.canEnablePIP(url) &&
                                    <MDBBtn onClick={handleTogglePIP}>{pip ? 'Disable PiP' : 'Enable PiP'}</MDBBtn>}
                                </td>
                            </tr>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>

                <form method = "post">
            <div className="form-group">
                <div className="form-group">
                </div>
            <label htmlFor="exampleFormControlInput1">제목</label>
            <MDBInput
                type="text" className="form-control"
                id="exampleFormControlInput1" name="title"
                value={title} />
            </div>
            <div className="form-group">
            <label htmlFor="exampleFormControlInput1">작성자</label>
            <MDBInput
                type="text" className="form-control"
                id="exampleFormControlInput1" name="crea_id"
               value={writer} />
            </div>
            <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">내용</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" name="contents" rows={10}>
                집안에 짐이 많고 가구도 많지만 원룸입니다.
            </textarea>
            </div>
                
            <MDBBtn type="submit" className="btn btn-info">수정하기</MDBBtn>
                    <Link to={"/videocommunity"}>  <MDBBtn type="button" className="btn btn-secondary">목록으로</MDBBtn></Link>
            </form>
            </div>
            {/* /.panel-body */}
            </div>
            {/* /.panel */}
            </div>
            {/* /.col-lg-12 */}
            </div>
            </div>
            {/* /#page-wrapper */}


        </div>
    );
};

export default VideoTest;