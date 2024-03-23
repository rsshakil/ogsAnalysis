import React, { useRef, useState, useEffect, useCallback, Suspense } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { displayState } from "../../../store/displayState";
import { dataGridDummyState } from "../../../store/dataGridDummyState";
import { productListDummyState } from "../../../store/productListDummyState";
import { modalState } from "../../../store/modalState";
import { locale,formatDate, parseDate } from "devextreme/localization";
import _ from "lodash";
import useCustomStore from "../../../hooks/useCustomStore";
import Table from "../../ui/Table";
import {unixTimestampToDateFormat} from "../../../utils/commonFunctions"
import { DescriptionContent } from "../../molecules/modal/modalContent/DescriptionContent"
import { TestUserContent } from "../../molecules/modal/modalContent/TestUserContent"

import { pageLoaderState } from "../../../store/pageLoaderState";
import DataGrid, {
    Column, FilterRow, HeaderFilter, Search, SearchPanel, Selection, Summary, ColumnFixing, SummaryGroupItem, SummaryTotalItem, GroupItem, Pager, Paging, Sorting, Scrolling, Button, Export, ColumnChooser, Editing, ToolbarItem, Item, Texts, SortByGroupSummaryInfo, Lookup, FilterPanel, ColumnChooserSelection, Form, SimpleItem, LoadPanel, 
  } from 'devextreme-react/data-grid';

import { Popup, Position, } from 'devextreme-react/popup';
import { Workbook } from 'exceljs';
import saveAs from 'file-saver';
import { exportDataGrid } from 'devextreme/excel_exporter';
import { iniDateRangeDateBox } from "../../../store/iniDateRangeDateBox";
import { iniYearMonthDateBox } from "../../../store/iniYearMonthDateBox";
const columnAttributes = {
    "achievements":{
        label:"実績",
        labelColor:"text-green-400",
        attributes:[
            {
                key:"pointsPerDay",
                value:"消費ポイント",
                isCommaSeparator:true
            },
            {
                key:"pointsWithReturnRatePerDay",
                value:"消費ポイント：還元率考慮",
                isCommaSeparator:true
            },
            {
                key:"pointsWithTopReturnPointsPerDay",
                value:"消費ポイント：上位5%非還元",
                isCommaSeparator:true
            },
            {
                key:"pointsPerHour",
                value:"平均消費ポイント／時",
                isCommaSeparator:true
            },
            {
                key:"pointsWithReturnRatePerHour",
                value:"平均消費ポイント：還元率考慮／時",
                isCommaSeparator:true
            },
            {
                key:"pointsWithTopReturnPointsPerHour",
                value:"平均消費ポイント：上位5%非還元／時",
                isCommaSeparator:true
            },
            {
                key:"shippingPoints",
                value:"発送ポイント",
                isCommaSeparator:true
            },
            {
                key:"numberOfPlayers",
                value:"遊技人数",
                isCommaSeparator:true
            },
            {
                key:"numberOfPlayersWithinRange1",
                value:"遊技人数 登録3日以内",
                isCommaSeparator:true
            }
            ,{
                key:"numberOfPlayersWithinRange2",
                value:"遊技人数 登録4日〜7日",
                isCommaSeparator:true
            },
            {
                key:"numberOfPlayersWithinRange3",
                value:"遊技人数 登録8日〜30日",
                isCommaSeparator:true
            },
            {
                key:"numberOfPlayersWithinRange4",
                value:"遊技人数 登録31日以上",
                isCommaSeparator:true
            }
        ]
    },
    "forecast":{
        label:"予測",
        labelColor:"text-sky-400",
        attributes:[
            {
                key:"pointsPerDay",
                value:"消費ポイント",
                isCommaSeparator:true
            },
            {
                key:"pointsWithReturnRatePerDay",
                value:"消費ポイント：還元率考慮",
                isCommaSeparator:true
            },
            {
                key:"pointsWithTopReturnPointsPerDay",
                value:"消費ポイント：上位5%非還元",
                isCommaSeparator:true
            },
            {
                key:"pointsPerHour",
                value:"平均消費ポイント／時",
                isCommaSeparator:true
            },
            {
                key:"pointsWithReturnRatePerHour",
                value:"平均消費ポイント：還元率考慮／時",
                isCommaSeparator:true
            },
            {
                key:"pointsWithTopReturnPointsPerHour",
                value:"平均消費ポイント：上位5%非還元／時",
                isCommaSeparator:true
            },
            {
                key:"numberOfPlayers",
                value:"遊技人数",
                isCommaSeparator:true
            }
        ]
    },
    "goals":{
        label:"目標",
        labelColor:"text-amber-600",
        attributes:[
            {
                key:"pointsPerDay",
                value:"消費ポイント",
                isCommaSeparator:true
            },
            {
                key:"pointsWithReturnRatePerDay",
                value:"消費ポイント：還元率考慮",
                isCommaSeparator:true
            },
            {
                key:"pointsWithTopReturnPointsPerDay",
                value:"消費ポイント：上位5%非還元",
                isCommaSeparator:true
            },
            {
                key:"pointsPerHour",
                value:"平均消費ポイント／時",
                isCommaSeparator:true
            },
            {
                key:"pointsWithReturnRatePerHour",
                value:"平均消費ポイント：還元率考慮／時",
                isCommaSeparator:true
            },
            {
                key:"pointsWithTopReturnPointsPerHour",
                value:"平均消費ポイント：上位5%非還元／時",
                isCommaSeparator:true
            },
            {
                key:"numberOfPlayers",
                value:"遊技人数",
                isCommaSeparator:true
            }
        ]
    }
};
const achievementsLength = columnAttributes.achievements.attributes.length;
const forecastLength = columnAttributes.forecast.attributes.length;
const goalsLength = columnAttributes.goals.attributes.length;
const totalRowSpan = achievementsLength+forecastLength+goalsLength+1;
const columnType = ["goals", "forecast", "achievements"];

export const TableBodySales = (data) => {
    const [displayStateValue, setDisplayState] = useRecoilState(displayState);
    const [dataGridDummyValue, setDataGridDummy] = useRecoilState(dataGridDummyState);
    const [productListDummyValue, setProductListDummy] = useRecoilState(productListDummyState);
    const [yearMonthDateBox, setYearMonthDateBox] = useRecoilState(iniYearMonthDateBox);
    const [modalStateValue, setModalState] = useRecoilState(modalState);
    const [loading, setLoading] = useState(true);
    const [popupVisible, setPopupVisible] = useState(false);
    const [pageLoadiongStateValue, setPageLoadiongState] = useRecoilState(pageLoaderState);
    const dataGridRef = useRef(null);
    const elementRef = useRef(null);
    const navigate = useNavigate();
    const location = useLocation();
    console.log("locationDetail",location);
    const serviceId = location.pathname.split("/").pop();
    console.log("serviceId",serviceId);
    //   const { dataSource, isLoading, restData } = useCustomStore('userGachaHistoryUserId', '/users/'+serviceId, true, []);
    //   console.log("dataSourcedataSource",restData);
    //   const {data:mostkeys} = restData || {};
    let days = [];
    let date = new Date(yearMonthDateBox?.yearMonth), y = date.getFullYear(), m = date.getMonth();

    let firstDay = new Date(y, m, 1);
    let lastDay = new Date(y, m + 1, 0);
    for (let day = firstDay; day <= lastDay; day.setDate(day.getDate() + 1)) {
    
        let dayOfTheMonth = unixTimestampToDateFormat(day.getTime()/1000,false);
        let dateDataInfo = {day:dayOfTheMonth}
        days.push(dateDataInfo);
    }

    const dataSource = data.gridData;
    const totalData = data.total;

    const [loadPanelEnabled, setLoadPanelEnabled] = useState(true);

    const onContentReady = useCallback(() => {
    setLoadPanelEnabled(false);
    }, []);
    // Custom function to format the pager info text
    const formatPagerInfoText = (pageIndex, pageCount, itemCount) => {
        return `データ件数 : ${itemCount >= 0 ? itemCount : 0}件`;
    };
  ///////////////////////////////////////////
  //  初期値の設定
  ///////////////////////////////////////////

// const serviceData = [
//     {
//         userId:1,
//         1:5000,
//         2:5000,
//         3:5000,
//         4:5000,
//         5:5000,
//         6:5000,
//         7:5000,
//         8:5000,
//         9:5000,
//         10:5000,
//         11:5000,
//         12:5000,
//         13:5000,
//         14:5000,
//         15:5000,
//         16:5000,
//         17:5000,
//         18:5000,
//         19:5000,
//         20:5000,
//     },{
//         userId:1,
//         1:5000,
//         2:5000,
//         3:5000,
//         4:5000,
//         5:5000,
//         6:5000,
//     },
//     {
//         userId:1,
//         1:5000,
//         2:5000,
//         3:5000,
//         4:5000,
//         5:5000,
//         6:5000,
//         7:5000,
//     }
// ];
// useEffect(()=>{
//     let mstKeys = dataSource && dataSource["_items"] && dataSource["_items"].sort(
//         (a,b) => Object.keys(b).length - Object.keys(a).length
//     )[0];
//     let demoKeys = {...mstKeys}
//     if(demoKeys && Object.keys(demoKeys).length>0){
//         // delete demoKeys["userId"];
//         setMostkeys(demoKeys);
//     }
    
// },[dataSource["_items"]]);

    //  ボタン押した時の挙動
    //  ページ遷移とかモーダルを開くとか
//TODO
    // let onClickFunction;
    // let popupContents;
    ///////////////////////////////////////////

    //  ページ遷移
    // function pageTransition(e) {
    //     console.log(e, 'eeeeeeeeee')
    //     // console.log("[setModalState]", e.key)
    //     console.log('pageParamData', e.data);
    //     let pagePath = e.path
    //     let pageName = e.data.name;
    //     let pageParam = e.data.id;
    //     setDisplayState((prevState) => ({
    //         ...prevState,
    //         pageName: pageName,
    //         pageParam: pageParam
    //     }))
    //     navigate(pagePath);
    //     console.log('pagePath>>>>>>>>', pagePath);
    // }

    //  ページ遷移
    function pageTransition(e) {
        // console.log(e, 'eeeeeeeeee')
        // console.log("[setModalState]", e.key)
        console.log('pageParamData', e.data);
        let pagePath = `${e.path}/${e.data.id}`//?startDate=${startDate}&endDate=${endDate}
        let pageName = "Users Details";//e.data.serviceName;

        setDisplayState((prevState) => ({
            ...prevState,
            pageName: pageName,
            // pageParam: pageParam
        }))
        // navigate(pagePath);
        window.open(pagePath, '_blank', 'noopener,noreferrer');
        console.log('pagePath>>>>>>>>', pagePath);
    }

    const onClickFunction = (data) => pageTransition({ 'path': '/users', data });

    useEffect(() => {
        setModalState((prevState) => ({
            ...prevState,
            DevExPopup: false,
        }))
    }, [location]);

    const generateCellData = (cellObject,day,columnType,columnInfo) => {
        let cellValue = "";
        const {key, isCommaSeparator } = columnInfo;
        let columnData = cellObject.find(item=>item.day.trim()==day.trim());
        if(columnData){
            if(columnData.hasOwnProperty(columnType)){
                if(isCommaSeparator){
                    return columnData[columnType][key]?.toLocaleString();
                }else{
                    return columnData[columnType][key];
                }
            }
        }
        return cellValue;
    }
    //cellRenderCustomization
    const DataRow = ((rowInfo) => {
        const limitOncePerDay = rowInfo.data.gachaLimitOncePerDay;
        const limitEveryonePerDay = rowInfo.data.gachaLimitEveryonePerDay;
        const limitOnce = rowInfo.data.gachaLimitOnce;
        const shouldDisplayLimitOncePerDay = limitOncePerDay !== null && limitOncePerDay !== undefined && limitOncePerDay !== 0;
        const shouldDisplayLimitEveryonePerDay = limitEveryonePerDay !== null && limitEveryonePerDay !== undefined && limitEveryonePerDay !== 0;
        const shouldDisplayLimitOnce = limitOnce !== null && limitOnce !== undefined && limitOnce !== 0;
        return (
        // <React.Fragment>
        <>
            {/* {console.log("rowInfo",dataGridRef.current.instance.pageIndex())} */}
            <tr className="main-row secondayAlt-row">
                <td className="first-col sticky-col" rowSpan={totalRowSpan}>{rowInfo.rowIndex+1}</td>
                <td className="second-col sticky-col" rowSpan={totalRowSpan}>{rowInfo.data.id}</td>
                <td className="third-col sticky-col" rowSpan={totalRowSpan}>{rowInfo.data.name}<br />
                {rowInfo.data.gachaStartDate && (<><br />{`開始日時：${rowInfo.data.gachaStartDate}`}</>)}
                {rowInfo.data.gachaSinglePoint && (<><br />{`1回ポイント：${rowInfo.data.gachaSinglePoint}`}</>)}
                {rowInfo.data.gachaTotalCount && (<><br />{`総数：${rowInfo.data.gachaTotalCount}`}</>)}
                {shouldDisplayLimitOncePerDay && (<><br />{`一人一日上限数：${limitOncePerDay}`}</>)}
                {shouldDisplayLimitEveryonePerDay && (<><br />{`全員一日上限数：${limitEveryonePerDay}`}</>)}
                {shouldDisplayLimitOnce && (<><br />{`一人上限数：${limitOnce}`}</>)}
                </td>
            </tr>
            {columnType.map(colType=>(<>
                {columnAttributes[colType].attributes.map((attri,i)=>(<>
                    <tr className="secondayAlt-row">
                        {i===0 && <td className={`fourth-col ${columnAttributes[colType].labelColor} sticky-col`} rowSpan={columnAttributes[colType].attributes.length}>{columnAttributes[colType].label}</td>}
                        <td className={`fifth-col ${columnAttributes[colType].labelColor} sticky-col`}>{attri.value}</td>
                        {days.map(date=><td className={`text-right ${columnAttributes[colType].labelColor}`}>{generateCellData(rowInfo.data.dailySales,date.day.trim(),colType,attri)}</td>)}
                    </tr>
                </>))}
            </>))}
        </>
        );
        // </React.Fragment>
    });

    // Custom function to format the pager info text
    const displayTotalPoints = (total) => {
        const spaces = '\u00A0\u00A0';
        if (total.goals) {
            return `当月の合計消費ポイント：上位5%非還元${spaces}${spaces}目標：${total.goals?.toLocaleString('ja-JP')}${spaces}予測：${total.forecast?.toLocaleString('ja-JP')}${spaces}実績：${total.achievements?.toLocaleString('ja-JP')}`;
        }
    };

    return (
        <>
            <div className="text-gray-400 text-sm p-2">{displayTotalPoints(totalData)}</div>
            <DataGrid
                // isLoading={isLoading}
                id="gridContainer"
                height={"50%"}
                dataSource={dataSource}
                rowAlternationEnabled={true}
                hoverStateEnabled={true}
                showBorders={false}
                showRowLines={false}
                dataRowRender={DataRow}
                dataGridRef={dataGridRef}
                className="salesTable"
            >
                <FilterRow visible={true} />
                {/* <Scrolling columnRenderingMode="virtual" /> */}
                <LoadPanel enabled={loadPanelEnabled} />
                <Paging enabled={true} defaultPageSize={500} />
                {/* <Pager showInfo={true} /> */}
                <Pager
                    visible={true}
                    allowedPageSizes={[]}
                    displayMode={'full'}
                    showPageSizeSelector={false}
                    showInfo={true}
                    infoText={formatPagerInfoText}
                    showNavigationButtons={true}
                />
                <ColumnFixing enabled={true} />
                <Column
                    cssClass="text-gray-400 sticky-col first-col"
                    caption="#"
                    dataField="orderNo"
                    dataType="number"
                    width={48}
                    allowFiltering={false}
                />
                <Column
                    cssClass="text-gray-400 sticky-col second-col"
                    caption="ID"
                    dataField="gachaSalesId"
                    dataType="number"
                    width={48}
                />
                <Column
                    cssClass="text-gray-400 sticky-col third-col"
                    caption="商品名"
                    dataField="name"
                    dataType="string"
                    // fixed={true}
                    width={128}
                    allowFiltering={true}
                />
                <Column
                    cssClass="text-gray-400 sticky-col fourth-col"
                    caption="分類"
                    dataField="headType"
                    dataType="string"
                    // fixed={true}
                    width={64}
                    allowFiltering={false}
                />
                <Column
                    cssClass="text-gray-400 sticky-col fifth-col"
                    caption="内容"
                    dataField="types"
                    dataType="string"
                    // fixed={true}
                    width={240}
                    allowFiltering={false}
                />
                {days.map(dayContent=><Column
                        key={dayContent.day}
                        caption={dayContent.day}
                        dataField={`${dayContent.day}`}
                        dataType="number"
                        format="#,##0.##"
                        allowFiltering={false}
                        width={88}
                    />)}
            </DataGrid>
        </>
    );
};


