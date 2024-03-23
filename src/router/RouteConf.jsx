import React, { useLayoutEffect, useState, useEffect, useReducer, Children } from "react";
import { BrowserRouter, Outlet, Route, Routes, useLocation } from 'react-router-dom'
import { HeaderFooter } from '../components/templates/HeaderFooter'
import ScrollTop from './ScrollTop'
import Validator from './Validator'

import { accessState } from "../store/accessState";
import { useRecoilState, useRecoilValue } from "recoil";
import ReferrerController from "./ReferrerController";

import { Products } from "../components/pages/Products";
import { Details } from "../components/pages/Details";
import { UsersDetails } from "../components/pages/UsersDetails";
import { SalesDetails } from "../components/pages/SalesDetails";
import { GantDetails } from "../components/pages/GantDetails";
import { ProductDetails } from "../components/pages/ProductDetails";
import { SearchDetails } from "../components/pages/SearchDetails";



// export const RouteConf = ({ setPageLoadingEnded, isPageLoading, isPageLoadingStopState }) => {
// export const RouteConf = ({ setPageLoadingEnded, isPageLoading, isPageLoadingStopState, timer = '', clearTimer = () => { } }) => {
export const RouteConf = () => {
    const [recoilStateValue, setRecoilState] = useRecoilState(accessState);

    // useEffect(() => {
    const getDebugSwich = recoilStateValue.getDebug ? recoilStateValue.getDebug : '1';

    switch (getDebugSwich) {
        case '9JhdbGtd65egh$$rf%gq':
            console.log("switch========> (getDebugSwich)" + recoilStateValue.getDebug);
            // initLogger(true); 
            break;
        default:
            console.log("switch========> (default)" + recoilStateValue.getDebug);
            // initLogger(false); 
            break;
    }
    document.title = 'オリパ分析';
    const location = useLocation();
    console.log("location.pathname", location.pathname);


    return (
        <>
            {/* <BrowserRouter> */}

                <>
                    <ReferrerController />
                    <ScrollTop />
                    <HeaderFooter>
                        <Routes>



                            <Route path="/" element={<Products />} />
                            <Route path="*" element={<Products />} />
                            <Route path="products" element={<Products />} />
                            <Route path="histories/:id" element={<Details />} />
                            <Route path="users/:id" element={<UsersDetails />} />
                            <Route path="sales" element={<SalesDetails />} />
                            <Route path="search" element={<SearchDetails />} />
                            <Route path="gantt" element={<GantDetails />} />
                            <Route path="product-details/:id" element={<ProductDetails />} />




                            <Route
                                element={
                                    <Validator>
                                        <Outlet />
                                    </Validator>
                                }>
                            </Route>
                        </Routes>
                    </HeaderFooter>
                </>
                
            
            {/* </BrowserRouter> */}
        </>
    )
}
