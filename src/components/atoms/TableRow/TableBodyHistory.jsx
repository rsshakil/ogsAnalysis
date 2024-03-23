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

export const TableBodyHistory = () => {
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
    // console.log('holidaysDataObject',holidaysDataObject);
    ///////////////////////////////////////////
    //  初期値の設定
    ///////////////////////////////////////////

    const serviceId = location.pathname.split("/").pop();
  console.log("serviceId",serviceId);
    const { dataSource, isLoading } = useCustomStore('userGachaHistoryId', '/histories/'+serviceId, true, allPossibleRowFilterLookupData);
    console.log("dataSourcedataSource",dataSource["_items"]);

    const [applyFilter, setApplyFilter] = useState('onClick');
    //  ボタン押した時の挙動
    //  ページ遷移とかモーダルを開くとか
/* 全件読み込んでフロントエンドえページングするパターン
    const dataSource = data.gridData;
    // const columnsLength = data.columns;

    const [loadPanelEnabled, setLoadPanelEnabled] = useState(true);

    const onContentReady = useCallback(() => {
        setLoadPanelEnabled(false);
    }, []);
    // Custom function to format the pager info text
    const formatPagerInfoText = (pageIndex, pageCount, itemCount) => {
        return `データ件数 : ${itemCount >= 0 ? itemCount : 0}件`;
    };
*/
//TODO
    // let onClickFunction;
    let popupContents;
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

    function displayDuration(cellInfo) {
        console.log('cellInfo>>>>>>>>', cellInfo);
        let displayText = '';
        if (cellInfo.value !== null && cellInfo.value !== 0) {
            displayText = Math.floor(cellInfo.value / 3600) + '時間' +  (cellInfo.value % 3600) + '分';
        }
        return displayText;
    }



    
    // function renderPopup(renderPopupInfo) {
        function popupShowing (e) {
        // popupVisible ? setPopupVisible(false) : setPopupVisible(true);
        console.log('row>>>>>>>>', e.row.data);
        setModalState((prevState) => ({
            ...prevState,
            DevExPopup: true,
            modalType:"historyInfo",
            data: e.row.data ? e.row.data : new Date('2023/1/01 0:00')
        }))
        
        console.log('modalStateValue true>>>>>>>>', modalStateValue);
        // popupContents = (<><p>1211</p></>);
        // return (
        //   <div className="form-avatar">12321</div>
        // );
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

    return (
        <>
            <Table
                isLoading={isLoading}
                dataSource={dataSource}
                dataGridRef={dataGridRef}
                onCellClick={handleOnCellClick}
                onEditorPreparing={onEditorPreparing}
                onExporting={onExporting}
                allowColumnResizing={true}
                allowColumnReordering={true}
                stateStoring={true}
                itemsPerPage={500}
                // onCellPrepared={cellPrepared}
                height="100%" 
            >
                <ColumnChooser 
                    enabled={true} 
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
                    <Column
                        cssClass="text-gray-400"
                        caption="ユーザーID"
                        dataField="userGachaHistoryUserId"
                        dataType="string"
                        fixed={true}
                        allowReordering={false}
                        width={128}
                    />
                    <Column
                        cssClass="text-gray-400"
                        caption="排出時間(JST)"
                        dataField="userGachaHistoryGachaExecutedAt"
                        dataType="date"
                        format="yyyy/MM/dd HH:mm"
                        fixed={true}
                        allowReordering={false}
                        // width={160}
                    />
                    <Column
                        cssClass="text-gray-400"
                        caption="引き方"
                        dataField="userGachaHistoryGachaPattern"
                        dataType="string"
                        fixed={true}
                        allowReordering={false}
                        width={64}
                        filter
                        cellRender={gachaPatternTextCellRenderer}
                    >
                        <Lookup
                            dataSource={gachaPatternLookup}
                            valueExpr="id"
                            displayExpr="caption"
                        />
                    </Column>
                    <Column
                        cssClass="text-green-400"
                        caption="[おまけ]賞"
                        dataField="userGachaHistoryGachaBonusPrizeName"
                        dataType="string"
                        // width={128}
                    />
                    <Column
                        cssClass="text-green-400"
                        caption="[おまけ]アイテム"
                        dataField="userGachaHistoryGachaBonusPrizeItemName"
                        dataType="string"
                        minWidth={320}
                        // width={320}
                    />
                    <Column
                        cssClass="text-green-400"
                        caption="[おまけ]pt"
                        dataField="userGachaHistoryGachaBonusPrizePoint"
                        dataType="number"
                        format="#,##0.##pt"
                        // width={100}
                    />
                    <Column
                        cssClass="text-gray-400"
                        caption="[おまけ]交換"
                        dataField="userGachaHistoryGachaBonusPrizeStatus"
                        dataType="string"
                        filter
                        cellRender={gachaBonusTextCellRenderer}
                    >
                        <Lookup
                            dataSource={gachaBonusRegularLookup}
                            valueExpr="id"
                            displayExpr="caption"
                        />
                    </Column>
                    <Column
                        cssClass="text-sky-400"
                        caption="[賞]"
                        dataField="userGachaHistoryGachaRegularPrizeName"
                        dataType="string"
                        // width={128}
                    />
                    <Column
                        cssClass="text-sky-400"
                        caption="[賞]アイテム"
                        dataField="userGachaHistoryGachaRegularPrizeItemName"
                        dataType="string"
                        minWidth={320}
                        // width={320}
                    />
                    <Column
                        cssClass="text-sky-400"
                        caption="[賞]pt"
                        dataField="userGachaHistoryGachaRegularPrizePoint"
                        dataType="number"
                        format="#,##0.##pt"
                        // width={100}
                    />
                    <Column
                        cssClass="text-gray-400"
                        caption="[賞]交換"
                        dataField="userGachaHistoryGachaRegularPrizeStatus"
                        dataType="string"
                        filter
                        cellRender={gachaRegularTextCellRenderer}
                    >
                        <Lookup
                            dataSource={gachaBonusRegularLookup}
                            valueExpr="id"
                            displayExpr="caption"
                        />
                    </Column>
                    <Column
                        cssClass="text-sky-400"
                        caption="事後pt"
                        dataField="userGachaHistoryAfterPoint"
                        dataType="number"
                        format="#,##0.##pt"
                        // width={128}
                    />
            </Table>

{/*
            <div class="text-gray-400 z-50 text-sm p-2">※テストユーザーが含まれます&emsp;※交換状態はオリパが終了時のものになります&emsp;※チャートデータはオリパが終了後に作成されます</div>
            <DataGrid
                // isLoading={isLoading}
                id="gridContainer"
                height={"100%"}
                dataSource={dataSource}
                rowAlternationEnabled={true}
                hoverStateEnabled={true}
                showBorders={false}
                showRowLines={false}
                // showColumnLines={true}
                className="productsTableDatagrid"
                // isLoading={isLoading}
                dataGridRef={dataGridRef}
                onCellClick={handleOnCellClick}
                onEditorPreparing={onEditorPreparing}
                onExporting={onExporting}
                allowColumnResizing={true}
                allowColumnReordering={true}
                itemsPerPage={1000}
            >
                <FilterRow visible={true} />
                <LoadPanel enabled={loadPanelEnabled} />
                <Paging enabled={true} defaultPageSize={500} />
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
                <LoadPanel
                    enabled={true}
                    text="読み込み中"
                />
                <ColumnChooser
                    enabled={true}
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
                <Column
                    cssClass="text-gray-400"
                    caption="ユーザーID"
                    dataField="userGachaHistoryUserId"
                    dataType="string"
                    fixed={true}
                    allowReordering={false}
                    width={128}
                />
                <Column
                    cssClass="text-gray-400"
                    caption="排出時間(JST)"
                    dataField="userGachaHistoryGachaExecutedAt"
                    dataType="date"
                    format="yyyy/MM/dd HH:mm"
                    fixed={true}
                    allowReordering={false}
                    // width={160}
                />
                <Column
                    cssClass="text-gray-400"
                    caption="引き方"
                    dataField="userGachaHistoryGachaPattern"
                    dataType="string"
                    fixed={true}
                    allowReordering={false}
                    width={64}
                    filter
                    cellRender={gachaPatternTextCellRenderer}
                >
                    <Lookup
                        dataSource={gachaPatternLookup}
                        valueExpr="id"
                        displayExpr="caption"
                    />
                </Column>
                <Column
                    cssClass="text-green-400"
                    caption="[おまけ]賞"
                    dataField="userGachaHistoryGachaBonusPrizeName"
                    dataType="string"
                    // width={128}
                />
                <Column
                    cssClass="text-green-400"
                    caption="[おまけ]アイテム"
                    dataField="userGachaHistoryGachaBonusPrizeItemName"
                    dataType="string"
                    minWidth={320}
                    // width={320}
                />
                <Column
                    cssClass="text-green-400"
                    caption="[おまけ]pt"
                    dataField="userGachaHistoryGachaBonusPrizePoint"
                    dataType="number"
                    format="#,##0.##pt"
                    // width={100}
                />
                <Column
                    cssClass="text-gray-400"
                    caption="[おまけ]交換"
                    dataField="userGachaHistoryGachaBonusPrizeStatus"
                    dataType="string"
                    filter
                    cellRender={gachaBonusTextCellRenderer}
                >
                    <Lookup
                        dataSource={gachaBonusRegularLookup}
                        valueExpr="id"
                        displayExpr="caption"
                    />
                </Column>
                <Column
                    cssClass="text-sky-400"
                    caption="[賞]"
                    dataField="userGachaHistoryGachaRegularPrizeName"
                    dataType="string"
                    // width={128}
                />
                <Column
                    cssClass="text-sky-400"
                    caption="[賞]アイテム"
                    dataField="userGachaHistoryGachaRegularPrizeItemName"
                    dataType="string"
                    minWidth={320}
                    // width={320}
                />
                <Column
                    cssClass="text-sky-400"
                    caption="[賞]pt"
                    dataField="userGachaHistoryGachaRegularPrizePoint"
                    dataType="number"
                    format="#,##0.##pt"
                    // width={100}
                />
                <Column
                    cssClass="text-gray-400"
                    caption="[賞]交換"
                    dataField="userGachaHistoryGachaRegularPrizeStatus"
                    dataType="string"
                    filter
                    cellRender={gachaRegularTextCellRenderer}
                >
                    <Lookup
                        dataSource={gachaBonusRegularLookup}
                        valueExpr="id"
                        displayExpr="caption"
                    />
                </Column>
                <Column
                    cssClass="text-sky-400"
                    caption="事後pt"
                    dataField="userGachaHistoryAfterPoint"
                    dataType="number"
                    format="#,##0.##pt"
                    // width={128}
                />
            </DataGrid>
*/}
        </>
    );
};


