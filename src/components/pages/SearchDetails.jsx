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
import { TableBodySearchHistory } from "../atoms/TableRow/TableBodySearchHistory";
import useFetchSearchQuery from "../../hooks/useFetchSearchQuery";
import Loader from '../atoms/Loading/Loader';
import { iniDateRangeDateBox } from "../../store/iniDateRangeDateBox";
import { iniYearMonthDateBox } from "../../store/iniYearMonthDateBox";
    




export const SearchDetails = () => {
    
    const location = useLocation();
    console.log("locationDetail",location);
    const serviceId = location.pathname.split("/").pop();
  console.log("serviceId",serviceId);
    const navigate = useNavigate();
    // const history = useHistory();
    const [settingsStateStateValue, setSettingsStateState] = useRecoilState(settingsState);
    const [iniDateRangeDateBoxValue, setIniDateRangeDateBox] = useRecoilState(iniDateRangeDateBox);
    const [yearMonthDateBox, setYearMonthDateBox] = useRecoilState(iniYearMonthDateBox);
    const [isFirstTime, setIsFirstTime] = useState(true);

    const [displayStateValue, setDisplayState] = useRecoilState(displayState);
    console.log(settingsStateStateValue);

    let pagePath = 'search';
    // let pageName = location.state?.data.name;
    let pageTitle = 'Search';

    //detail query
    // const { data: recordsAll , isLoading: summaryDetailLoading, refetchApi } = useFetchSearchQuery(yearMonthDateBox?.userId);

    // console.log("records",recordsAll?.data);

    // const {records:gridData, info: gachaInfo, total:totalData=[], service = "" } = recordsAll?.data || {};
    // console.log("gridData",gridData)
    //display page title
   

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
        <TableBodySearchHistory 
            // gridData={gridData} 
            // total={totalData} 
        />
        </>
    );
};



