import React, { useRef, useState, useEffect, Suspense } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import { useHistory } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { settingsState } from "../../store/settingsState";
import { displayState } from "../../store/displayState";
import Table from "../ui/Table";
import { Charts } from "../organisms/Charts";
import { TableBody } from "../atoms/TableRow/TableBody";
import { Button, Column, FilterRow, Lookup } from "devextreme-react/data-grid";


import { useModal } from "../../contexts/ModalContext";
import useFetchSummaryQuery from "../../hooks/useFetchSummaryQuery";
import { iniDateRangeDateBox } from "../../store/iniDateRangeDateBox";
import Loader from '../atoms/Loading/Loader';





export const Summary = () => {
    const location = useLocation();
    const dataGridRef = useRef(null);
    // const dataGridRef = useRef(null);
    // const { refetch } = useModal();
    const [iniDateRangeDateBoxValue, setIniDateRangeDateBox] = useRecoilState(iniDateRangeDateBox);
    console.log("iniDateRangeDateBoxValue",iniDateRangeDateBoxValue);
    //FetchQuery
    let today = new Date();
    const [isFirstTime, setIsFirstTime ] = useState(true);
    // const [startDate, setStartDate ] = useState(Math.floor(new Date(new Date(iniDateRangeDateBoxValue[0]).setHours(0,0,0,0)).getTime()/1000));
    // const [endDate, setEndDate ] = useState(Math.floor(new Date(new Date(iniDateRangeDateBoxValue[1]).setHours(23, 59, 59, 999)).getTime()/1000));
    const { dataSource:summaryRecords, isLoading: summaryLoading, refetchApi } = useFetchSummaryQuery(Math.floor(new Date(new Date(iniDateRangeDateBoxValue[0]).setHours(0,0,0,0)).getTime()/1000), Math.floor(new Date(new Date(iniDateRangeDateBoxValue[1]).setHours(23, 59, 59, 999)).getTime()/1000), true);

    // console.log("dataSource",dataSource);
    console.log("summaryRecords",summaryRecords);
    const {table:tableBodyRecords,chart:chartData} = summaryRecords?.data || {};
    const navigate = useNavigate();
    // const history = useHistory();
    console.log("tableBodyRecords",tableBodyRecords);
    const [settingsStateStateValue, setSettingsStateState] = useRecoilState(settingsState);
    const [displayStateValue, setDisplayState] = useRecoilState(displayState);
    console.log(settingsStateStateValue);

    let pagePath = 'summary';
    // let pageName = location.state?.data.name;
    let pageTitle = 'サマリー';

    useEffect(() => {
        setIsFirstTime(false)
    },[])
    useEffect(() => {
        console.log("isFirstTime",isFirstTime)
        if(isFirstTime===false){
            // setStartDate(Math.floor(new Date(new Date(iniDateRangeDateBoxValue[0]).setHours(0,0,0,0)).getTime()/1000));
            // setEndDate(Math.floor(new Date(new Date(iniDateRangeDateBoxValue[0]).setHours(23, 59, 59, 999)).getTime()/1000));
            refetchApi();
        }
    },[iniDateRangeDateBoxValue]);

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
        {summaryLoading && <Loader />}
        <Charts chartData = {chartData} />
        <TableBody tableData = {tableBodyRecords}/>
        </>
    );
};



