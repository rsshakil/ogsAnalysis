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
import { iniYearMonthDateBox } from "../../../store/iniYearMonthDateBox";
    


const allPossibleRowFilterLookupData = [
    { userGachaHistoryGachaPattern: 1, userGachaHistoryGachaBonusPrizeStatus: 0, userGachaHistoryGachaRegularPrizeStatus: 0 },
    { userGachaHistoryGachaPattern: 2, userGachaHistoryGachaBonusPrizeStatus: 1, userGachaHistoryGachaRegularPrizeStatus: 1 },
    { userGachaHistoryGachaPattern: 3 },
    // { userGachaHistoryGachaBonusPrizeStatus: 3, userGachaHistoryGachaRegularPrizeStatus: 3 },
    // { userGachaHistoryGachaBonusPrizeStatus: 4, userGachaHistoryGachaRegularPrizeStatus: 4 },
    // { userGachaHistoryGachaBonusPrizeStatus: 5, userGachaHistoryGachaRegularPrizeStatus: 5 },
]

const gachaPatternLookup = [
    { id: 1, caption: '単発' },
    { id: 2, caption: '連続' },
    { id: 3, caption: '全部' }
]

function gachaPatternTextCellRenderer(cellData) {
    const targetItemStatus = gachaPatternLookup.find(item => item.id === cellData.data.userGachaHistoryGachaPattern);
    return (
        <div>
            {targetItemStatus?.caption}
        </div>
    );
}

const gachaBonusStatusLookup = [
    { id: 0, caption: 'ポイント化' },
    { id: 1, caption: 'コレクション' },
    { id: 2, caption: '発送待ち' },
    { id: 3, caption: '発送完了' },
    { id: 4, caption: 'その他処理（発送失敗など）' },
    { id: 5, caption: '発送対応中' }
]

const gachaBonusRegularLookup = [
    { id: 0, caption: '◎' },
    { id: 1, caption: '' }
]

function gachaBonusTextCellRenderer(cellData) {
    const targetItemStatus = gachaBonusStatusLookup.find(item => item.id === cellData.data.userGachaHistoryGachaBonusPrizeStatus);
    return (
        <div>
            {cellData.data.userGachaHistoryGachaBonusPrizeStatus == 0 ? "◎" : "" }
        </div>
    );
}

const gachaRegularLookup = [
    { id: 0, caption: 'ポイント化' },
    { id: 1, caption: 'コレクション' },
    { id: 2, caption: '発送待ち' },
    { id: 3, caption: '発送完了' },
    { id: 4, caption: 'その他処理（発送失敗など）' },
    { id: 5, caption: '発送対応中' }
]

function gachaRegularTextCellRenderer(cellData) {
    const targetItemStatus = gachaRegularLookup.find(item => item.id === cellData.data.userGachaHistoryGachaRegularPrizeStatus);
    return (
        <div>
            {/* {targetItemStatus?.caption} */}
            {cellData.data.userGachaHistoryGachaRegularPrizeStatus == 0 ? "◎" : "" }
        </div>
    );
}

export const TableBodySearchHistory = (data) => {
    const [displayStateValue, setDisplayState] = useRecoilState(displayState);
    const [dataGridDummyValue, setDataGridDummy] = useRecoilState(dataGridDummyState);
    const [productListDummyValue, setProductListDummy] = useRecoilState(productListDummyState);
    const [modalStateValue, setModalState] = useRecoilState(modalState);
    // const [holidaysDataObject, setHolidaysData] = useRecoilState(Holidays);
    // const [columnSettingsDataObject, setColumnSettingsData] = useRecoilState(columnSettingsData);
    const [loading, setLoading] = useState(true);
    const [popupVisible, setPopupVisible] = useState(false);
    const [pageLoadiongStateValue, setPageLoadiongState] = useRecoilState(pageLoaderState);
    const [yearMonthDateBox, setYearMonthDateBox] = useRecoilState(iniYearMonthDateBox);
    const dataGridRef = useRef(null);
    const elementRef = useRef(null);
    const navigate = useNavigate();
    const location = useLocation();
    // console.log('holidaysDataObject',holidaysDataObject);
    ///////////////////////////////////////////
    //  初期値の設定
    ///////////////////////////////////////////

    const serviceId = location.pathname.split("/").pop();
  console.log("serviceId",serviceId);
    const { dataSource, isLoading, refetchApi } = useCustomStore('userId', '/search?userId='+yearMonthDateBox?.userId, true, allPossibleRowFilterLookupData);
    // const dataSource = data.gridData;
    // const totalData = data.total;
    const [applyFilter, setApplyFilter] = useState('onClick');
    const [isFirstTime, setIsFirstTime] = useState(true);

   
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

    function displayDuration(cellInfo) {
        console.log('cellInfo>>>>>>>>', cellInfo);
        let displayText = '';
        if (cellInfo.value !== null && cellInfo.value !== 0) {
            displayText = Math.floor(cellInfo.value / 3600) + '時間' +  (cellInfo.value % 3600) + '分';
        }
        return displayText;
    }
   

    useEffect(() => {
        setModalState((prevState) => ({
            ...prevState,
            DevExPopup: false,
        }))
    }, [location]);

    const onExporting = (e)=> {
        const workbook = new Workbook();
        const worksheet = workbook.addWorksheet('Main sheet');
        exportDataGrid({
            component: e.component,
            worksheet: worksheet,
            customizeCell: function(options) {
                const { gridCell } = options;
                const { excelCell } = options;
                if (gridCell.rowType === 'data') {
                    if (gridCell.column.dataField === "duration") {
                        console.log("gridCell",gridCell)
                        excelCell.value = Math.floor(gridCell.value / 3600) + '時間' +  (gridCell.value % 3600) + '分';
                    }
                }
                options.excelCell.font = { name: 'Arial', size: 12 };
                options.excelCell.alignment = { horizontal: 'left' };
            } 
        }).then(function() {
            workbook.xlsx.writeBuffer()
                .then(function(buffer) {
                    saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'SummaryDetail.xlsx');
                });
        });
    }


    useEffect(() => {
        if (elementRef.current) {
            // Get the filter row element
            const filterRowElement = dataGridRef.current.instance.element().querySelector('.dx-datagrid-filter-row');

            if (filterRowElement) {
                const dataField = elementRef.current.column.dataField;
                // Find the editor elements within the filter row
                const filterCols = filterRowElement.querySelectorAll('.dx-datagrid-filter-row td');
                filterCols.forEach((filterCol, columnIndex) => {
                    // Do something with each editor element (e.g., log its value)
                    if (columnIndex === elementRef.current.columnIndex) {
                        const editorElement = filterCol.querySelector('.dx-texteditor-input');
                        if (editorElement) {
                            if (
                                dataField === 'userGachaHistoryGachaPattern'
                                || dataField === 'userGachaHistoryGachaBonusPrizeStatus'
                                || dataField === 'userGachaHistoryGachaRegularPrizeStatus'
                            )
                            {
                                if (editorElement.hasAttribute('aria-controls')) {
                                    editorElement.focus();
                                }
                                else {
                                    editorElement.click();
                                }
                            }
                            else {
                                if (applyFilter === 'onClick') {
                                    editorElement.focus();
                                }
                                else {
                                    editorElement.click();
                                }
                            }
                        }
                    }
                });
            }
        }
    }, [applyFilter])


    const handleOnCellClick = (e) => {
        //console.log('handleColumnClick e ', e)
        const { dataField } = e.column || {};
        if (e.rowType === 'filter') {
            if (e.rowIndex === 1) {
                if (
                    dataField === "userGachaHistoryGachaPattern"
                    || dataField === "userGachaHistoryGachaBonusPrizeStatus"
                    || dataField === "userGachaHistoryGachaRegularPrizeStatus"
                ) {
                    setApplyFilter('auto');
                } else {
                    setApplyFilter('onClick');
                }
                // last filtered element ref set
                elementRef.current = e;
            }
        }
    }

    const onEditorPreparing = (e) => {
        if (
            e.parentType == 'filterRow'
            && e.dataField !== "userGachaHistoryGachaPattern"
            && e.dataField !== "userGachaHistoryGachaBonusPrizeStatus"
            && e.dataField !== "userGachaHistoryGachaRegularPrizeStatus"
        ) {
            e.editorOptions.onFocusOut = function () {
                e.element.querySelector('.dx-apply-button').click();
            };
            e.editorOptions.onEnterKey = function () {
                e.element.querySelector('.dx-apply-button').click();
            };
        }
    };

    useEffect(() => {
        if (isFirstTime === false) {
            refetchApi()
        }
    }, [yearMonthDateBox?.userId]);

    return (
        <>
            <Table
                isLoading={isLoading}
                dataSource={dataSource}
                dataGridRef={dataGridRef}
                onCellClick={handleOnCellClick}
                onEditorPreparing={onEditorPreparing}
                // onExporting={onExporting}
                allowColumnResizing={true}
                allowColumnReordering={true}
                stateStoring={true}
                itemsPerPage={500}
                // onCellPrepared={cellPrepared}
                height="100%" 
            >
                <ColumnChooser 
                    enabled={false} 
                    mode="select"
                    >
                    <ColumnChooserSelection
                        allowSelectAll={true}
                        selectByClick={true}
                        recursive={true} />
                        <Position
                        my="right top"
                        at="right bottom"
                        of=".dx-datagrid-column-chooser-button"
                        />
                </ColumnChooser>
                <Export enabled={false} />
                <ColumnFixing enabled={true} />
                <FilterRow 
                    visible={true}
                    applyFilter={applyFilter}
                />
                    <Column
                        cssClass="text-gray-400"
                        caption="#"
                        dataField="rowNumber"
                        dataType="number"
                        fixed={true}
                        allowReordering={false}
                        width={64}
                    />
                    <Column caption="ユーザー情報" cssClass="!text-center" allowReordering={false} fixed={true}>
                    
                        <Column
                            cssClass="text-gray-400"
                            caption="ID"
                            dataField="userId"
                            dataType="number"
                            fixed={true}
                            allowReordering={false}
                            width={64}
                        />

                        <Column
                            cssClass="text-gray-400"
                            caption="メールアドレス"
                            dataField="userEmail"
                            dataType="string"
                            fixed={true}
                            allowReordering={false}
                            width={200}
                        />

                    </Column>
                    
                    <Column caption="オリパ情報" cssClass="!text-center" allowReordering={false} fixed={true}>
                        <Column
                            cssClass="text-gray-400"
                            caption="ID"
                            dataField="gachaId"
                            dataType="number"
                            fixed={true}
                            allowReordering={false}
                            width={48}
                        />

                        <Column
                            cssClass="text-gray-400"
                            caption="オリパ名"
                            dataField="gachaName"
                            dataType="string"
                            fixed={true}
                            allowReordering={false}
                            width={240}
                        />

                        <Column
                            cssClass="text-gray-400"
                            caption="オリパ説明"
                            dataField="description"
                            dataType="string"
                            fixed={true}
                            allowReordering={false}
                            width={320}
                        />

                        <Column
                            cssClass="text-gray-400"
                            caption="総数"
                            dataField="gachaTotalCount"
                            dataType="number"
                            format="#,##0.##"
                            fixed={true}
                            allowReordering={false}
                            width={64}
                        />

                        <Column
                            cssClass="text-gray-400"
                            caption="1回pt"
                            dataField="gachaSinglePoint"
                            dataType="number"
                            format="#,##0.##"
                            fixed={true}
                            allowReordering={false}
                            width={64}
                        />

                        <Column
                            cssClass="text-gray-400"
                            caption="連続購入数"
                            dataField="gachaConosecutiveCount"
                            dataType="number"
                            format="#,##0.##"
                            fixed={true}
                            allowReordering={false}
                            width={96}
                        />

                        <Column
                            cssClass="text-gray-400"
                            caption="連続ポイント"
                            dataField="gachaConosecutivePoint"
                            dataType="number"
                            format="#,##0.##"
                            fixed={true}
                            allowReordering={false}
                            width={120}
                        />

                        <Column
                            cssClass="text-gray-400"
                            caption="ラストワン賞"
                            dataField="gachaLastOneFlag"
                            dataType="string"
                            fixed={true}
                            allowReordering={false}
                            width={120}
                        />
                    </Column>

                    <Column caption="行動情報" cssClass="!text-center" allowReordering={false} fixed={true}>

                        <Column
                            cssClass="text-gray-400"
                            caption="パック開封日時"
                            dataField="gachaExecutedAt"
                            dataType="date"
                            format="yyyy/MM/dd HH:mm"
                            fixed={true}
                            allowReordering={false}
                            width={128}
                        />

                        <Column
                            cssClass="text-gray-400"
                            caption="実行前ポイント"
                            dataField="beforePoint"
                            dataType="number"
                            format="#,##0.##"
                            fixed={true}
                            allowReordering={false}
                            width={120}
                        />

                        <Column
                            cssClass="text-gray-400"
                            caption="実行後ポイント"
                            dataField="afterPoint"
                            dataType="number"
                            format="#,##0.##"
                            fixed={true}
                            allowReordering={false}
                            width={120}
                        />

                        <Column
                            cssClass="text-gray-400"
                            caption="獲得ポイント"
                            dataField="earnedPoint"
                            dataType="number"
                            format="#,##0.##"
                            fixed={true}
                            allowReordering={false}
                            width={120}
                        />

                        <Column
                            cssClass="text-gray-400"
                            caption="消費ポイント"
                            dataField="consumedPoint"
                            dataType="number"
                            format="#,##0.##"
                            fixed={true}
                            allowReordering={false}
                            width={120}
                        />

                        <Column
                            cssClass="text-gray-400"
                            caption="オリパの引き方"
                            dataField="gachaPattern"
                            dataType="string"
                            fixed={true}
                            allowReordering={false}
                            width={120}
                        />
                    </Column>

                    <Column caption="獲得通常賞" cssClass="!text-center" allowReordering={false} fixed={true}>
                        <Column
                            cssClass="text-gray-400"
                            caption="通常賞名"
                            dataField="regularPrizeName"
                            dataType="string"
                            fixed={true}
                            allowReordering={false}
                            width={120}
                        />

                        <Column
                            cssClass="text-gray-400"
                            caption="通常賞アイテム名"
                            dataField="regularPrizeItemName"
                            dataType="string"
                            fixed={true}
                            allowReordering={false}
                            width={240}
                        />

                        <Column
                            cssClass="text-gray-400"
                            caption="通常賞ポイント"
                            dataField="regularPrizePoint"
                            dataType="number"
                            format="#,##0.##"
                            fixed={true}
                            allowReordering={false}
                            width={120}
                        />

                        <Column
                            cssClass="text-gray-400"
                            caption="パック終了時の通常賞pt還元状態"
                            dataField="regularPrizeStatus"
                            dataType="string"
                            fixed={true}
                            allowReordering={false}
                            width={240}
                        />
                    </Column>

                    <Column caption="獲得ボーナス賞" cssClass="!text-center" allowReordering={false} fixed={true}>
                        <Column
                            cssClass="text-gray-400"
                            caption="ボーナス賞名"
                            dataField="bonusPrizeName"
                            dataType="string"
                            fixed={true}
                            allowReordering={false}
                            width={120}
                        />
                        <Column
                            cssClass="text-gray-400"
                            caption="ボーナス賞アイテム名"
                            dataField="bonusPrizeItemName"
                            dataType="string"
                            fixed={true}
                            allowReordering={false}
                            width={240}
                        />
                        <Column
                            cssClass="text-gray-400"
                            caption="ボーナス賞ポイント"
                            dataField="bonusPrizePoint"
                            dataType="number"
                            format="#,##0.##"
                            fixed={true}
                            allowReordering={false}
                            width={180}
                        />
                        <Column
                            cssClass="text-gray-400"
                            caption="パック終了時のボーナス賞pt還元状態"
                            dataField="bonusPrizeStatus"
                            fixed={true}
                            allowReordering={false}
                            width={240}
                            filter
                            cellRender={gachaPatternTextCellRenderer}
                        >
                            <Lookup
                                dataSource={gachaPatternLookup}
                                valueExpr="id"
                                displayExpr="caption"
                            />
                        </Column>
                    </Column>
            </Table>
        </>
    );
};


