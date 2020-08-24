import React from 'react';
import {Bar, Line} from 'react-chartjs-2';
import {UserSideBar} from '../../commons/index'

import '../../assets/css/sb-admin-2.css'

const Charts = () => {
    /*const barData = {
        labels: ['January', 'February', 'March',
            'April', 'May', 'June','July','August',
            'September', 'October','November','December'],
        datasets: [
            {
                label: '서울',
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: [129031,143367,137242,122867,	117209,	97933,	118365,	110592,	345802,	128067,	113012,	382630
                ]

            },
            {
                label: '부산',
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: [667227, 702329, 641449, 587293,
                    569020, 484468, 563622, 565607,
                    1647014, 594081, 565735, 1805598]
            },
            {
                label: '대구',
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: [667227, 702329, 641449, 587293,
                    569020, 484468, 563622, 565607,
                    1647014, 594081, 565735, 1805598]
            },
            {
                label: '인천',
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: [667227, 702329, 641449, 587293,
                    569020, 484468, 563622, 565607,
                    1647014, 594081, 565735, 1805598]
            },
            {
                label: '광주',
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: [667227, 702329, 641449, 587293,
                    569020, 484468, 563622, 565607,
                    1647014, 594081, 565735, 1805598]
            },
            {
                label: '대전',
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: [667227, 702329, 641449, 587293,
                    569020, 484468, 563622, 565607,
                    1647014, 594081, 565735, 1805598]
            },
            {
                label: '울산',
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: [667227, 702329, 641449, 587293,
                    569020, 484468, 563622, 565607,
                    1647014, 594081, 565735, 1805598]
            },
            {
                label: '세종',
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: [667227, 702329, 641449, 587293,
                    569020, 484468, 563622, 565607,
                    1647014, 594081, 565735, 1805598]
            },
            {
                label: '경기',
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: [667227, 702329, 641449, 587293,
                    569020, 484468, 563622, 565607,
                    1647014, 594081, 565735, 1805598]
            },
            {
                label: '강원',
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: [667227, 702329, 641449, 587293,
                    569020, 484468, 563622, 565607,
                    1647014, 594081, 565735, 1805598]
            },
            {
                label: '충북',
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: [667227, 702329, 641449, 587293,
                    569020, 484468, 563622, 565607,
                    1647014, 594081, 565735, 1805598]
            },
            {
                label: '충남',
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: [667227, 702329, 641449, 587293,
                    569020, 484468, 563622, 565607,
                    1647014, 594081, 565735, 1805598]
            },
            {
                label: '전북',
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: [667227, 702329, 641449, 587293,
                    569020, 484468, 563622, 565607,
                    1647014, 594081, 565735, 1805598]
            },
            {
                label: '전남',
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: [667227, 702329, 641449, 587293,
                    569020, 484468, 563622, 565607,
                    1647014, 594081, 565735, 1805598]
            },
            {
                label: '경북',
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: [667227, 702329, 641449, 587293,
                    569020, 484468, 563622, 565607,
                    1647014, 594081, 565735, 1805598]
            },
            {
                label: '경남',
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: [667227, 702329, 641449, 587293,
                    569020, 484468, 563622, 565607,
                    1647014, 594081, 565735, 1805598]
            },
            {
                label: '제주',
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: [667227, 702329, 641449, 587293,
                    569020, 484468, 563622, 565607,
                    1647014, 594081, 565735, 1805598]
            }
        ]
    }*/
    const lineData = {
        labels: ['1월', '2월', '3월', '4월',
            '5월', '6월','7월','8월',
            '9월', '10월','11월','12월'],
        datasets: [
            {
                label: '전출 인구수 (명)',
                fill: false,
                lineTension: 0.1,
                backgroundColor: '#2176C1',
                borderColor: 'rgba(139,189,255,1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [667227, 702329, 641449, 587293,
                    569020, 484468, 563622, 565607,
                    1647014, 594081, 565735, 1805598]
            }
        ]
    };

    return (
        <>
            <UserSideBar/>
            <div id="wrapper">
                <div id="page-wrapper">
                    <div className="row">
                        <div className="col-lg-12"><br/>
                            <h2 className="page-header">통계</h2><br/>
                        </div>
                    </div>
                    {/*<div className="row">
                        <div className="col-lg-12">
                            <div className="panel panel-default">
                                <div>
                                    <Bar
                                        data={barData}
                                        options={{
                                            title:{
                                                display:true,
                                                text:'지역별 이동 인구',
                                                fontSize:20
                                            },
                                            legend:{
                                                display:true,
                                                position:'right'
                                            }
                                        }}
                                    />
                                </div>
                                 /.panel-body
                            </div>
                             /.panel
                        </div>
                         /.col-lg-12
                    </div>*/}
                    <div>
                        <h2>월별 이동 인구</h2>
                        <Line data={lineData} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Charts;