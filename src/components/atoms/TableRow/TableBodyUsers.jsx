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


import { pageLoaderState } from "../../../store/pageLoaderState";
import DataGrid, {
    Column, FilterRow, HeaderFilter, Search, SearchPanel, Selection, Summary, ColumnFixing, SummaryGroupItem, SummaryTotalItem, GroupItem, Pager, Paging, Sorting, Scrolling, Button, Export, ColumnChooser, Editing, ToolbarItem, Item, Texts, SortByGroupSummaryInfo, Lookup, FilterPanel, ColumnChooserSelection, Form, SimpleItem, LoadPanel, 
  } from 'devextreme-react/data-grid';

import { Popup, Position, } from 'devextreme-react/popup';
import { Workbook } from 'exceljs';
import saveAs from 'file-saver';
import { exportDataGrid } from 'devextreme/excel_exporter';
import { iniDateRangeDateBox } from "../../../store/iniDateRangeDateBox";

export const TableBodyUsers = (data) => {
    const [displayStateValue, setDisplayState] = useRecoilState(displayState);
    const [dataGridDummyValue, setDataGridDummy] = useRecoilState(dataGridDummyState);
    const [productListDummyValue, setProductListDummy] = useRecoilState(productListDummyState);
    const [modalStateValue, setModalState] = useRecoilState(modalState);
    // const [holidaysDataObject, setHolidaysData] = useRecoilState(Holidays);
    // const [columnSettingsDataObject, setColumnSettingsData] = useRecoilState(columnSettingsData);
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

    const dataSource = data.gridData;
    const columnsLength = data.columns;

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

    // const userIdRenderWithClickFn = (cellData) => {
    //     // 次のページにクリックしたセルの情報を渡す
    //     return (
    //         <>
    //             <div onClick={() => onClickFunction({
    //                 'userId': cellData.data.userGachaHistoryUserId,
    //                 'id': cellData.data.userGachaHistoryGachaId,
    //                 'info': cellData.data
    //             })} className={`cursor-pointer`}>{`${cellData.data.userGachaHistoryUserId}`}</div>
    //         </>
    //     );
    // }

    // function displayDuration(cellInfo) {
    //     console.log('cellInfo>>>>>>>>', cellInfo);
    //     let displayText = '';
    //     if (cellInfo.value !== null && cellInfo.value !== 0) {
    //         displayText = Math.floor(cellInfo.value / 3600) + '時間' +  (cellInfo.value % 3600) + '分';
    //     }
    //     return displayText;
    // }



    
    // // function renderPopup(renderPopupInfo) {
    //     function popupShowing (e) {
    //     // popupVisible ? setPopupVisible(false) : setPopupVisible(true);
    //     console.log('row>>>>>>>>', e.row.data);
    //     setModalState((prevState) => ({
    //         ...prevState,
    //         DevExPopup: true,
    //         data: e.row.data ? e.row.data : new Date('2023/1/01 0:00')
    //     }))
        
    //     console.log('modalStateValue true>>>>>>>>', modalStateValue);
    //     // popupContents = (<><p>1211</p></>);
    //     // return (
    //     //   <div className="form-avatar">12321</div>
    //     // );
    //   }
    // function popupHiding(e) {
    //     console.log('popupHiding>>>>>>>>', e);
    //     setModalState((prevState) => ({
    //         ...prevState,
    //         DevExPopup: false,
    //     }))
    //     console.log('modalStateValue false>>>>>>>>', modalStateValue);
    // }

    useEffect(() => {
        setModalState((prevState) => ({
            ...prevState,
            DevExPopup: false,
        }))
    }, [location]);

    // function renderPopup(renderPopupInfo) {
    //     console.log('renderPopupInfo>>>>>>>>', renderPopupInfo);
    //     return (<div className="w-full">
    //                 <div className=""><img src={modalStateValue.data?.topImage} className="w-full"/></div>
    //                 <div className="text-sky-400 text-base font-bold mt-4"><p>{modalStateValue.data.description} </p></div>
    //                 <div className="text-gray-400 text-base flex flex-row mt-4">
    //                     {modalStateValue.data?.startDateTime && <p>{formatDate(new Date(modalStateValue.data?.startDateTime), "yyyy年MM月dd日 HH:mm")} </p>}
    //                     {modalStateValue.data?.endDateTime && (<>
    //                     <p>&nbsp;〜&nbsp;</p>
    //                     <p>{formatDate(new Date(modalStateValue.data?.endDateTime), "yyyy年MM月dd日 HH:mm")} </p>
    //                     </>)}
                        
    //                 </div> 
    //                 <div className="text-gray-400 text-base flex flex-row">
    //                     <p>{new Intl.NumberFormat('ja-JP').format(modalStateValue.data?.salesPoints)} pt</p>
    //                     <p>&nbsp;×&nbsp;</p>
    //                     <p>{new Intl.NumberFormat('ja-JP').format(modalStateValue.data?.totalNumberOfItems)} 回</p>
    //                     <p>&nbsp;=&nbsp;</p>
    //                     <p>{new Intl.NumberFormat('ja-JP').format(modalStateValue.data?.totalPoints)} pt</p>
    //                 </div>
    //                 <div className="mt-4"><img src={modalStateValue.data?.contentImage} className="w-full"/></div>


    //             </div>);
    // }


    // const onExporting = (e)=> {
    //     const workbook = new Workbook();
    //     const worksheet = workbook.addWorksheet('Main sheet');
    //     exportDataGrid({
    //         component: e.component,
    //         worksheet: worksheet,
    //         customizeCell: function(options) {
    //             const { gridCell } = options;
    //             const { excelCell } = options;
    //             if (gridCell.rowType === 'data') {
    //                 if (gridCell.column.dataField === "duration") {
    //                     console.log("gridCell",gridCell)
    //                     excelCell.value = Math.floor(gridCell.value / 3600) + '時間' +  (gridCell.value % 3600) + '分';
    //                 }
    //             }
    //             options.excelCell.font = { name: 'Arial', size: 12 };
    //             options.excelCell.alignment = { horizontal: 'left' };
    //         } 
    //     }).then(function() {
    //         workbook.xlsx.writeBuffer()
    //             .then(function(buffer) {
    //                 saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'SummaryDetail.xlsx');
    //             });
    //     });
    // }


    // const onEditorPreparing = (e) => {
    //     if (e.parentType == 'filterRow') {
    //         e.editorOptions.onFocusOut = function () {
    //             e.element.querySelector('.dx-apply-button').click();
    //         };
    //         e.editorOptions.onEnterKey = function () {
    //             e.element.querySelector('.dx-apply-button').click();
    //         };
    //     }
    // }
    // const rowNumber = (cellData)=>{
    //     // console.log("cesllFA",cellData);
    //     return cellData.rowIndex+1;
    // }

    // const onColumnsChanging = (e)=>{  
    //     if (  
    //       e.optionNames.filterValue &&  
    //       !e.component.columnOption(e.columnIndex, "filterValue")  
    //     ) {  
    //       console.log("Reset Filter Row");  
    //     }  
    // }
    // let aa = Array.apply(null, {length: 2000}).map(Number.call, Number);
    // console.log("mostkeys",mostkeys)
    return (
        <>
            <DataGrid
                // isLoading={isLoading}
                id="gridContainer"
                height={"50%"}
                dataSource={dataSource}
                rowAlternationEnabled={true}
                hoverStateEnabled={true}
                showBorders={false}
                showRowLines={false}
                // showColumnLines={true}
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
                    cssClass="text-gray-400"
                    caption="#"
                    dataField="no"
                    dataType="number"
                    fixed={true}
                    width={64}
                />
                <Column
                    cssClass="text-gray-400"
                    caption="ユーザーID"
                    dataField="uid"
                    dataType="string"
                    width={128}
                    fixed={true}
                    allowFiltering={true}
                />
                {Array.from({ length: columnsLength }, (_, index) => (
                    <Column
                        key={index}
                        cssClass="text-green-400"
                        caption={index+1}
                        dataField={`${index+1}`}
                        dataType="number"
                        format="#,##0.##"
                        width={70}
                        allowFiltering={false}
                    />
                ))}
            </DataGrid>
        </>
    );
};


