import React, { useRef, useState, useEffect,useLayoutEffect, Suspense } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import { useHistory } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { settingsState } from "../../store/settingsState";
import { displayState } from "../../store/displayState";
import { Table } from "../organisms/Table";
import { Charts } from "../organisms/Charts";
import { HistoriesCharts } from "../organisms/HistoriesCharts";
import { TableBodyHistory } from "../atoms/TableRow/TableBodyHistory";
import useFetchHistoriesQuery from "../../hooks/useFetchHistoriesQuery";
import Loader from '../atoms/Loading/Loader';
import { iniDateRangeDateBox } from "../../store/iniDateRangeDateBox";
    




export const Details = () => {
    
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

    let pagePath = 'histories';
    // let pageName = location.state?.data.name;
    let pageTitle = '詳細';

    //detail query
    const { data: records , isLoading: summaryDetailLoading, refetchApi } = useFetchHistoriesQuery(serviceId);

    console.log("records",records);

    const {records: gridData, info: gachaInfo} = records || {};

    //display page title
    useEffect(() => {
        //display page title
        console.log("serviceName",gachaInfo)
        if(gachaInfo){
            setDisplayState((prevState)=>({
                ...prevState,
                pageName: gachaInfo?.gachaName,
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

    return (
        <>
        {summaryDetailLoading && <Loader />}
        {/* <HistoriesCharts chartData = {detailChartData}/> */}
        <TableBodyHistory gridData={gridData} />
        </>
    );
};



