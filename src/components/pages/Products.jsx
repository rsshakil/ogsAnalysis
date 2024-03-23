import React, { useRef, useState, useEffect } from "react";
import { json, useLocation } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { displayState } from "../../store/displayState";
import { DetailCharts } from "../organisms/DetailCharts";
import { TableBodyDetails } from "../atoms/TableRow/TableBodyDetails";
import useFetchProductsQuery from "../../hooks/useFetchProductsQuery";
import Loader from '../atoms/Loading/Loader';
import { iniDateRangeDateBox } from "../../store/iniDateRangeDateBox";
import { testUserData } from "../../store/testUserData";


export const Products = () => {
    const location = useLocation();
    const [iniDateRangeDateBoxValue, setIniDateRangeDateBox] = useRecoilState(iniDateRangeDateBox);
    // console.log("iniDateRangeDateBoxValue",iniDateRangeDateBoxValue);

    const [isFirstTime, setIsFirstTime] = useState(true);

    const startDate = Math.floor(new Date(new Date(iniDateRangeDateBoxValue[0]).setHours(0, 0, 0, 0)).getTime() / 1000);
    const endDate = Math.floor(new Date(new Date(iniDateRangeDateBoxValue[1]).setHours(23, 59, 59, 999)).getTime() / 1000);

    // fetch data
    const { data: records, isLoading: isLoading, refetchApi } = useFetchProductsQuery(startDate, endDate, true);
    const { table: tableData, chart: chartData } = records?.data || {};
    // console.log("tableData", tableData);
    console.log("records>>>",records)
    const [displayStateValue, setDisplayState] = useRecoilState(displayState);
    const [testUserValue, setTestUserState] = useRecoilState(testUserData);

    let pagePath = 'products';
    let pageTitle = 'オリパ';

    useEffect(() => {

       
        
        setIsFirstTime(false);
    }, [])

    useEffect(() => {
        if(records.data?.testUsers && records.data?.testUsers.length>0){
            setTestUserState((prevState)=>({
                ...prevState,
                testUserList:[...records.data?.testUsers]
            }))
            localStorage.setItem("testUserDataList",JSON.stringify(records.data?.testUsers));
        }
    }, [records.data?.testUsers])

    useEffect(() => {
        console.log("isFirstTime", isFirstTime)
        if (isFirstTime === false) {
            refetchApi();
        }
    }, [iniDateRangeDateBoxValue]);

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
            {isLoading && <Loader />}
            <DetailCharts chartData={chartData} tableData={tableData} />
            <TableBodyDetails tableData={tableData} />
        </>
    );
};
