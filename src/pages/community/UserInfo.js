import React, {useEffect, useState} from 'react';
import {
	MDBCardBody,
	MDBCol,
	MDBCard,
	MDBCardImage,
	MDBCardTitle,
	MDBCardText, MDBBtn, MDBInput, MDBContainer, MDBRow, MDBJumbotron,
} from 'mdbreact';
import Geocode from 'react-geocode';
import {
	GoogleMap,
	useLoadScript,
	Marker,
	InfoWindow,
} from '@react-google-maps/api';
import usePlacesAutocomplete, {
	getGeocode,
	getLatLng,
} from 'use-places-autocomplete';
import {
	Combobox,
	ComboboxInput,
	ComboboxPopover,
	ComboboxList,
	ComboboxOption,
} from '@reach/combobox';
import axios from 'axios';

import '../CompanyPage/Map/Search.css';
import '@reach/combobox/styles.css';
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import mapStyles from '../CompanyPage/Map/mapStyles';
import {SideBar} from "../../commons";
import {Link} from "react-router-dom";
import {Navbar} from "react-bootstrap";
import user from "../../assets/img/user.png";
import truck from "../../assets/img/truck.png";
import calculator from "../../assets/img/calculator.png";
import calendar from "../../assets/img/calendar.png";
import phone from "../../assets/img/phone.png";
import contactUs from "../../assets/img/contact-us.png";
import visit from "../../assets/img/visit.png";
Geocode.setApiKey('AIzaSyCrQuKKwt0DtPF8vxKPx6dRq3us6me2LO8');
Geocode.setLanguage('ko');
const libraries = ['places'];
const mapContainerStyle = {
	height: '55vh',
	width: '45vw',
};
const options = {
	styles: mapStyles,
};
const center = {
	lat: 37.42466,
	lng: 126.64249,
};

const UserInfo = ({match}) => {
	const [searchMarker, setSearchMarker] = useState(false);
	const [searchSelected, setSearchSelected] = useState({lat: '', lng: ''});
	const [infoShow, setInfoShow] = useState(false);
	const [selectedAddr, setSelectedAddr] = useState('');
	const [selected, setSelected] = useState({lat: '', lng: ''});
	const [userInfo, setUserInfo] = useState({});
	const [title, setTitle] = useState('');
	const [writer, setWriter] = useState('');
	const [address, setAddress] = useState('');
	const [contents, setContents] = useState('');
	const[regDate,setRegDate]=useState('')
	const [userLocation, setUserLocation] = useState({lat: '', lng: ''});
	const [searchedAddr, setSearchedAddr] = useState('');
	const [comWriter, setComWriter]=useState("")
	const [ comContents, setComContents] =useState("")
	const [comRegDate, setComRegDate]=useState("")

	const handleDelete = e => {
		e.preventDefault();
		axios
			.delete(`http://localhost:8080/articles/delete/${match.params.articleId}`)
			.then(res => {
				window.location.href = '/market';
			})
			.catch(error => {
				throw error;
			});
	};
	const handleModify = e => {
		e.preventDefault();
		const userJson = {
			title: title,
			writer: writer,
			address: address,
			contents: contents,
		};
		axios
			.patch(
				`http://localhost:8080/articles/update/${match.params.articleId}`,
				userJson,
			)
			.then(response => {
				console.log(response.data);
				alert('수정 완료');
				window.location.href = `/userInfo/${match.params.articleId}`;
			})
			.catch(error => {
				throw error;
			});
	};
	const handleComment = e =>{
		e.preventDefault()
		const comment={
			comWriter: comWriter,
			comContents: comContents,
			comRegDate: comRegDate
		}
		axios.post(`http://localhost:8080/articles/createComment`,comment)
			.then(res=>{
				console.log(res)
			}).catch(error=>{
			throw error;
		})
	}
	useEffect(() => {
		console.log(`${match.params.articleId}`);
		axios
			.get(`http://localhost:8080/articles/findUser/${match.params.articleId}`)
			.then(res => {
				console.log(res.data);
				sessionStorage.setItem('ArticleData', JSON.stringify(res.data));
				setTitle(res.data.title);
				setWriter(res.data.writer);
				setAddress(res.data.address);
				setRegDate(res.data.regDate);
				Geocode.fromAddress(res.data.address)
					.then(response => {
						const userAddress = response.results[0].geometry.location;
						console.log(userAddress);
						setUserLocation(userAddress);
					})
					.catch(error => {
						throw error;
					});
				setContents(res.data.contents);
				setUserInfo(res.data);
			})
			.catch(error => {
				throw error;
			});
	}, []);
	const locations = [
		{
			name: `${writer}님 중고거래 희망위치`,
			location: {
				lat: userLocation.lat,
				lng: userLocation.lng,
			},
		},
	];

	Geocode.fromLatLng(selected.lat, selected.lng).then(
		response => {
			const address = response.results[0].formatted_address;
			setSelectedAddr(address);
			console.log(address);
		},
		error => {
			console.error(error);
		},
	);
	const onSelect = item => {
		setInitialSelected(item);
	};
	const {isLoaded, loadError} = useLoadScript({
		googleMapsApiKey: 'AIzaSyCrQuKKwt0DtPF8vxKPx`6dRq3us6me2LO8',
		libraries,
	});
	const [markers, setMarkers] = React.useState([]);

	const [initialSelected, setInitialSelected] = useState({});

	const onMapClick = React.useCallback(e => {
		setMarkers(current => [
			...current,
			{
				lat: e.latLng.lat(),
				lng: e.latLng.lng(),
				time: new Date(),
			},
		]);
	}, []);

	const mapRef = React.useRef();
	const onMapLoad = React.useCallback(map => {
		mapRef.current = map;
	}, []);

	const panTo = React.useCallback(({lat, lng}) => {
		//<Search panTo <- 여기로
		mapRef.current.panTo({lat, lng});
		mapRef.current.setZoom(14);
	}, []);
	if (loadError) return 'Error';
	if (!isLoaded) return 'Loading...';
	const modules = {
		toolbar: [
			['bold', 'italic', 'underline', 'strike', 'link', 'image']

		]
	}

	const formats = [
		'bold',
		'italic',
		'underline',
		'strike',
		'link',
		'image']
	return (
		<>
			<SideBar />
			<div id="wrapper">
				<div id="page-wrapper">
					<div className="row">
						<div className="col-lg-12"><br/>
							<h2 className='page-header'>{title}</h2>
						</div>
						<MDBContainer className="mt-5 text-center">
							<MDBRow>
								<MDBCol>
									<MDBJumbotron>
										<MDBCardBody>
											<div className='row'>
												<div className='col-lg-12'>
													<div className='panel panel-default'>
														<div className='panel-body'>
															<table
																width='100%'
																className='table table-striped table-bordered table-hover'
																id='dataTables-example'
															>
																<thead>
																<tr>
																	<th colSpan='2'>{title}</th>
																	<th></th>
																</tr>
																<tr>
																	<th>글쓴이: {writer}</th>
																	<th>{address}</th>
																	<th> 작성일: {regDate}</th>
																</tr>
																</thead>
																<tbody>
																<tr>
																	<td colSpan='3'>
																		<ReactQuill
																			theme="snow"
																			value={{contents}}
																			modules={modules}
																			formats={formats}
																		/></td>
																</tr>
																<tr>
																	<td colSpan="3">
																		<input value="댓글내용"></input>
																	</td>
																</tr>
																</tbody>
															</table>
															{sessionStorage.userData &&
															(JSON.parse(sessionStorage.userData).userId === writer ? (
																<div>
																	<button
																		type='submit'
																		className='btn btn-info'
																		onClick={handleModify}
																	>
																		수정하기
																	</button>
																	<button
																		type='submit'
																		className='btn btn-info'
																		onClick={handleDelete}
																	>
																		삭제하기
																	</button>
																</div>
															) : (
																<div>
																	<MDBInput label="댓글달기" background icon="edit"/>
																	<MDBBtn onClick={handleComment}>댓글 달기</MDBBtn>
																</div>
															))}
														</div>
														{/* /.panel-body */}
													</div>
													{/* /.panel */}
												</div>
												{/* /.col-lg-12 */}
											</div>
										</MDBCardBody>
									</MDBJumbotron>
								</MDBCol>
							</MDBRow>
						</MDBContainer>
					</div>
				</div>
			</div>
		</>
	);
};
function Locate({panTo}) {
	return (
		<button
			className='locate'
			onClick={e => {
				e.preventDefault();
				navigator.geolocation.getCurrentPosition(
					position => {
						panTo({
							lat: position.coords.latitude,
							lng: position.coords.longitude,
						});
					},
					() => null,
				);
			}}
		>
			<img src='/compass.svg' alt='compass' />
		</button>
	);
}
function Search({panTo, setPosition, setMarkerShow, setSearchedAddr}) {
	const {
		ready,
		value,
		suggestions: {status, data},
		setValue,
		clearSuggestions,
	} = usePlacesAutocomplete({
		requestOptions: {
			location: {lat: () => 43.6532, lng: () => -79.3832}, // 검색할때의 이 지점에서부터 찾는?
			radius: 100 * 1000,
		},
	});
	// https://developers.google.com/maps/documentation/javascript/reference/places-autocomplete-service#AutocompletionRequest

	const handleInput = e => {
		// Update the keyword of the input element
		setValue(e.target.value);
	};

	const handleSelect = async address => {
		// When user selects a place, we can replace the keyword without request data from API
		// by setting the second parameter as "false"
		setValue(address, false);
		clearSuggestions();

		try {
			const results = await getGeocode({address});
			// console.log(results[0]) formatted address, compo 전부 가져옴
			const {lat, lng} = await getLatLng(results[0]);
			console.log(address);
			console.log(lat, lng);
			panTo({lat, lng});
			setPosition({lat, lng});
			setMarkerShow(true);
			setSearchedAddr(address);
		} catch (error) {
			console.log('😱 Error: ', error);
		}
	};

	return (
		<div className='search'>
			<Combobox onSelect={handleSelect}>
				<br />
				<ComboboxInput
					value={value}
					onChange={handleInput}
					disabled={!ready}
					placeholder='위치 검색'
				/>
				<ComboboxPopover>
					<ComboboxList>
						{status === 'OK' &&
						data.map(({id, description}) => (
							<ComboboxOption key={id} value={description} />
						))}
					</ComboboxList>
				</ComboboxPopover>
			</Combobox>
		</div>
	);
}
export default UserInfo;