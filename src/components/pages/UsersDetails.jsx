import React, { useRef, useState, useEffect,useLayoutEffect, Suspense } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import { useHistory } from "react-router-dom";
import { RecoilEnv, useRecoilState, useRecoilValue } from "recoil";
import { settingsState } from "../../store/settingsState";
import { displayState } from "../../store/displayState";
import { Table } from "../organisms/Table";
import { Charts } from "../organisms/Charts";
import { UsersChartsDetails } from "../organisms/UsersChartsDetails";
import { TableBodyUsers } from "../atoms/TableRow/TableBodyUsers";

import useFetchUsersDetailQuery from "../../hooks/useFetchUsersDetailQuery";
import useFetchUsersQuery from "../../hooks/useFetchUsersQuery";
// import Loader from '../atoms/Loading/Loader';
import Loader from "../atoms/Loading/TherapistLoader";

import { iniDateRangeDateBox } from "../../store/iniDateRangeDateBox";
    




export const UsersDetails = () => {
    
    const location = useLocation();
    console.log("locationDetail",location);
    const serviceId = location.pathname.split("/").pop();
  console.log("serviceId",serviceId);
    const navigate = useNavigate();
    // const history = useHistory();
    const [settingsStateStateValue, setSettingsStateState] = useRecoilState(settingsState);
    const [iniDateRangeDateBoxValue, setIniDateRangeDateBox] = useRecoilState(iniDateRangeDateBox);
    const [displayStateValue, setDisplayState] = useRecoilState(displayState);
    console.log(settingsStateStateValue);

    let pagePath = 'users';
    // let pageName = location.state?.data.name;
    let pageTitle = '詳細';

    //detail query
    const { data: records , isLoading: summaryDetailLoading, refetchApi } = useFetchUsersDetailQuery(serviceId);
    const { data: gridRecords, isLoading: gridLoading } = useFetchUsersQuery(serviceId);

    console.log("💦💦💦💦💦💦💦💦💦💦💦💦 records",records);

    const {chart:chartData=[], structure:archiTech=[], gachaInfo} = records || {};
    const {records: gridData=[], columns: columns } = gridRecords || {};

     //display page title
     useEffect(() => {
        //display page title
        console.log("serviceName",gachaInfo)
        if(gachaInfo){
            setDisplayState((prevState)=>({
                ...prevState,
                pageName: gachaInfo?.gachaTranslateName,
                gachaTotalCount: gachaInfo?.gachaTotalCount,
            }))
        }
    },[gachaInfo]);

    useEffect(() => {
        window.history.pushState(null, '', window.location.href);
        setDisplayState((prevState) => ({
            ...prevState,
            pageTitle: pageTitle,
            pagePath: pagePath,
            // pageName: pageName,
        }))
    }, [location]);

    const chartDataTemp =[
        { '1': 5000, '2': 2222, '3': 333, orderNo: 1 },
        { '1': 5000, '2': 5000, '3': 5000, orderNo: 2 },
        { '1': 5000, '2': 5000, '3': 5000, orderNo: 3 },
        { '1': 5000, '2': 5000, '3': 5000, orderNo: 4 },
        { '1': 5000, '2': 5000, '3': 5000, orderNo: 5 },
        { '1': 5000, '2': 5000, '3': 5000, orderNo: 6 },
        { '1': 5000, '3': 5000, orderNo: 7 },
        { '1': 5000, orderNo: 8 },
        { '1': 5000, orderNo: 9 },
        { '1': 5000, orderNo: 10 },
        { '1': 5000, orderNo: 11 },
        { '1': 5000, orderNo: 12 },
        { '1': 5000, orderNo: 13 },
        { '1': 5000, orderNo: 14 },
        { '1': 5000, orderNo: 15 },
        { '1': 5000, orderNo: 16 },
        { '1': 5000, orderNo: 17 },
        { '1': 5000, orderNo: 18 },
        { '1': 5000, orderNo: 19 },
        { '1': 5000, orderNo: 20 }
      ];
      
    //   const archiTech = [ { value: 1, name: 1 }, { value: 2, name: 2 }, { value: 3, name: 3 } ];

console.log("chartData",chartData)

    return (
        <>
        {summaryDetailLoading && <Loader />}
        <UsersChartsDetails chartData={chartData} chartStructure={archiTech}/>
        <TableBodyUsers  gridData={gridData} columns={columns} />
        </>
    );
};



