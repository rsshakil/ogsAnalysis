import React, { useRef, useState, useEffect,useLayoutEffect, Suspense } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import { useHistory } from "react-router-dom";
import { RecoilEnv, useRecoilState, useRecoilValue } from "recoil";
import { settingsState } from "../../store/settingsState";
import { displayState } from "../../store/displayState";
import { Table } from "../organisms/Table";
import { Charts } from "../organisms/Charts";
import { SaleChartsDetails } from "../organisms/SaleChartsDetails";
import { TableBodySales } from "../atoms/TableRow/TableBodySales";

import useFetchSalesQuery from "../../hooks/useFetchSalesQuery";
import useFetchUsersQuery from "../../hooks/useFetchUsersQuery";
// import Loader from '../atoms/Loading/Loader';
import Loader from "../atoms/Loading/TherapistLoader";

import { iniDateRangeDateBox } from "../../store/iniDateRangeDateBox";
import { iniYearMonthDateBox } from "../../store/iniYearMonthDateBox";
    





export const SalesDetails = () => {
    
    const location = useLocation();
    console.log("locationDetail",location);
    const serviceId = location.pathname.split("/").pop();
  console.log("serviceId",serviceId);
    const navigate = useNavigate();
    // const history = useHistory();
    const [settingsStateStateValue, setSettingsStateState] = useRecoilState(settingsState);
    const [iniDateRangeDateBoxValue, setIniDateRangeDateBox] = useRecoilState(iniDateRangeDateBox);
    const [yearMonthDateBox, setYearMonthDateBox] = useRecoilState(iniYearMonthDateBox);
    const [displayStateValue, setDisplayState] = useRecoilState(displayState);
    console.log(settingsStateStateValue);
    const [isFirstTime, setIsFirstTime] = useState(true);

    let pagePath = 'sales';
    // let pageName = location.state?.data.name;
    let pageTitle = 'Sales';

    //detail query
    const { data: records , isLoading: summaryDetailLoading, refetchApi } = useFetchSalesQuery(yearMonthDateBox?.yearMonth);

    console.log("💦💦💦💦💦💦💦💦💦💦💦💦 records",records);

    const {chart:chartData=[], structure:structureData=[], gridData=[], total:totalData=[], service = "" } = records.data || {};


    useEffect(() => {
        window.history.pushState(null, '', window.location.href);
        setDisplayState((prevState) => ({
            ...prevState,
            pageTitle: pageTitle,
            pagePath: pagePath,
            // pageName: pageName,
        }))
    }, [location]);

    useEffect(() => {
        setIsFirstTime(false);
    }, [])
    useEffect(() => {
        if (isFirstTime === false) {
            refetchApi()
        }
    }, [yearMonthDateBox]);

    const chartDataTemp =[
        {"oripa1":1000,"oripa2":2000,"oripa4":3000,"oripa5":6000,"orderNo": 1},
        {"oripa1":6000,"oripa2":5000,"oripa4":4000,"oripa5":2000,"orderNo": 2},
        {"oripa1":600,"oripa2":6000,"oripa4":3000,"oripa5":400,"orderNo": 3},
        {"oripa1":5565,"oripa2":353,"oripa4":5565,"oripa5":353,"orderNo": 4},
        {"oripa1":5565,"oripa2":353,"oripa4":5565,"oripa5":353,"orderNo": 5},
        {"oripa1":5565,"oripa2":353,"oripa4":5565,"oripa5":353,"orderNo": 6},
        {"oripa1":5565,"oripa2":353,"oripa4":5565,"oripa5":353,"orderNo": 7},
        {"oripa1":5565,"oripa2":353,"oripa4":5565,"oripa5":353,"orderNo": 8},
        {"oripa1":5565,"oripa2":353,"oripa4":5565,"oripa5":353,"orderNo": 9},
        {"oripa1":5565,"oripa2":353,"oripa4":5565,"oripa5":353,"orderNo": 10},
        {"oripa1":5565,"oripa2":353,"oripa4":5565,"oripa5":353,"orderNo": 11},
        {"oripa1":5565,"oripa2":353,"oripa4":5565,"oripa5":353,"orderNo": 12}
      ];
      
      const archiTechTemp = [ { value: "oripa1", name: "oripa1" }, { value: "oripa2", name: "oripa2" }, { value: "oripa3", name: "oripa3" },{ value: "oripa4", name: "oripa4" }, { value: "oripa5", name: "oripa5" }, { value: "oripa6", name: "oripa6" } ];
    let tempGrid = [
        { '1': 5000, '2': 2222, '3': 333,'4': 5000, '5': 2222, '6': 333,'7': 5000, '8': 2222, '9': 333,'10': 5000, '11': 2222, '12': 333,name:"oripa1", orderNo: 1 },
        { '1': 5000, '2': 2222, '3': 333,'4': 5000, '5': 2222, '6': 333,'7': 5000, '8': 2222, '9': 333,'10': 5000, '11': 2222, '12': 333,name:"oripa2", orderNo: 2 },
        { '1': 5000, '2': 2222, '3': 333,'4': 5000, '5': 2222, '6': 333,'7': 5000, '8': 2222, '9': 333,'10': 5000, '11': 2222, '12': 333,name:"oripa3", orderNo: 3 },
        { '1': 5000, '2': 2222, '3': 333,'4': 5000, '5': 2222, '6': 333,'7': 5000, '8': 2222, '9': 333,'10': 5000, '11': 2222, '12': 333,name:"oripa4", orderNo: 4 },
        { '1': 5000, '2': 2222, '3': 333,'4': 5000, '5': 2222, '6': 333,'7': 5000, '8': 2222, '9': 333,'10': 5000, '11': 2222, '12': 333,name:"oripa5", orderNo: 5 },
        { '1': 5000, '2': 2222, '3': 333,'4': 5000, '5': 2222, '6': 333,'7': 5000, '8': 2222, '9': 333,'10': 5000, '11': 2222, '12': 333,name:"oripa6", orderNo: 6 }
    ]
    // gridData = [...tempGrid];
console.log("chartData",chartData)

    return (
        <>
        {summaryDetailLoading && <Loader />}
        {/* <SaleChartsDetails chartData={chartDataTemp} chartStructure={archiTechTemp}/>
        <TableBodySales  gridData={tempGrid} columns={12} /> */}
        <SaleChartsDetails chartData={chartData} chartStructure={structureData}/>
        <TableBodySales  gridData={gridData} total={totalData} />
        </>
    );
};



