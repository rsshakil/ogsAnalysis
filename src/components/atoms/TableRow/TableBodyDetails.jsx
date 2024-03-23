import React, { useRef, useState, useEffect, Suspense } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
// import { useNavigate } from 'react-router-dom';
import { Link, useLocation } from 'react-router-dom';
import { displayState } from "../../../store/displayState";
// import { dataGridDummyState } from "../../../store/dataGridDummyState";
import { productListDummyState } from "../../../store/productListDummyState";
import { modalState } from "../../../store/modalState";
import { locale, formatDate, parseDate } from "devextreme/localization";
// import _ from "lodash";

import DataGrid, {
    Column, FilterRow, HeaderFilter, Search, SearchPanel, Selection, Summary, ColumnFixing, SummaryGroupItem, SummaryTotalItem, GroupItem, Paging, Sorting, Scrolling, Button, Export, ColumnChooser, Editing, ToolbarItem, Item, Texts, SortByGroupSummaryInfo, Lookup, FilterPanel, ColumnChooserSelection, Form, SimpleItem, LoadPanel,
} from 'devextreme-react/data-grid';

import { Popup, Position, } from 'devextreme-react/popup';
import { Workbook } from 'exceljs';
import saveAs from 'file-saver';
import { exportDataGrid } from 'devextreme/excel_exporter';
import { iniDateRangeDateBox } from "../../../store/iniDateRangeDateBox";
import { useNavigate } from "react-router";

export const TableBodyDetails = ({ tableData }) => {
    const location = useLocation();
    const navigate = useNavigate();

    const [displayStateValue, setDisplayState] = useRecoilState(displayState);
    const [productListValue, setProductList] = useRecoilState(productListDummyState);
    const [modalStateValue, setModalState] = useRecoilState(modalState);

    const [iniDateRangeDateBoxValue, setIniDateRangeDateBox] = useRecoilState(iniDateRangeDateBox);

    ///////////////////////////////////////////
    //  初期値の設定
    ///////////////////////////////////////////

    useEffect(() => {
        console.log("tableData", tableData);
        setProductList(tableData);
    }, [tableData])

    useEffect(() => {
        setModalState((prevState) => ({
            ...prevState,
            DevExPopup: false,
        }))
    }, [location]);

    // ページ遷移
    function pageTransition(e) {
        // console.log(e, 'eeeeeeeeee')
        // console.log("[setModalState]", e.key)
        console.log('pageParamData', e.data);
        let startDate = Math.floor(new Date(new Date(iniDateRangeDateBoxValue[0]).setHours(0, 0, 0, 0)).getTime() / 1000);
        let endDate = Math.floor(new Date(new Date(iniDateRangeDateBoxValue[1]).setHours(23, 59, 59, 999)).getTime() / 1000);
        let pagePath = `${e.path}/${e.data.id}`;//?startDate=${startDate}&endDate=${endDate}
        let pageName = e.data.name;

        setDisplayState((prevState) => ({
            ...prevState,
            pageName: pageName,
            totalCount: e.data.gachaTotalCount
            // pageParam: pageParam
        }))
        // navigate(pagePath);
        window.open(pagePath, '_blank', 'noopener,noreferrer');
        console.log('pagePath>>>>>>>>', pagePath);
    }

    const onClickFunctionHistories = (data) => pageTransition({ 'path': '/histories', data });
    const onClickFunctionUsers = (data) => pageTransition({ 'path': '/users', data });
    const onClickFunctionDetails = (data) => pageTransition({ 'path': '/product-details', data });

    const productHistories = (cellData) => {
        // 次のページにクリックしたセルの情報を渡す
        // console.log("cellData.data", cellData.data);
        return (
            <>
                <div onClick={() => onClickFunctionHistories({
                    'id': cellData.data.gachaId,
                    'name': cellData.data.name,
                    'gachaTotalCount': cellData.data.gachaTotalCount
                })} className={`cursor-pointer`}><span className="text-center dx-link dx-icon-chart dx-link-icon"></span></div>
            </>
        );
    }

    const userHistories = (cellData) => {
        // 次のページにクリックしたセルの情報を渡す
        // console.log("cellData.data", cellData.data);
        return (
            <>
                <div onClick={() => onClickFunctionUsers({
                    'id': cellData.data.gachaId,
                    'name': cellData.data.name,
                    'gachaTotalCount': cellData.data.gachaTotalCount
                })} className={`cursor-pointer`}><span className="text-center dx-link dx-icon-user dx-link-icon"></span></div>
            </>
        );
    }

    const productDetails = (cellData) => {
        // 次のページにクリックしたセルの情報を渡す
        // console.log("cellData.data", cellData.data);
        return (
            <>
                <div onClick={() => onClickFunctionDetails({
                    'id': cellData.data.gachaId,
                })} className={`cursor-pointer`}><span className="text-center dx-link dx-icon-product dx-link-icon"></span></div>
            </>
        );
    }

    function displayDuration(cellInfo) {
        console.log('cellInfo>>>>>>>>', cellInfo);
        let displayText = '';
        if (cellInfo.value !== undefined && cellInfo.value !== null && cellInfo.value !== 0) {
            let durationInSeconds = cellInfo.value
            // 1日の秒数、1時間の秒数、1分の秒数
            const secondsInDay = 24 * 60 * 60;
            const secondsInHour = 60 * 60;
            // 日数を計算
            const days = Math.floor(durationInSeconds / secondsInDay);
            // 残りの秒数から時間を計算
            const remainingSecondsAfterDays = durationInSeconds % secondsInDay;
            const hours = Math.floor(remainingSecondsAfterDays / secondsInHour);
            // 残りの秒数から分数を計算
            // const remainingSecondsAfterHours = remainingSecondsAfterDays % secondsInHour;

            // displayText = Math.floor(cellInfo.value / 3600) + '時間' + (cellInfo.value % 3600) + '分';
            displayText = `${days}日 ${hours}時間`;
        }
        return displayText;
    }

    function displayEndDateTime(cellInfo) {
        // console.log('cellInfo>>>>>>>>', cellInfo);
        // 終了日時あり
        if (cellInfo.value !== undefined && cellInfo.value !== null && cellInfo.value !== 0) {
            return cellInfo.value;
        }
    }

    function popupShowing(e) {
        // popupVisible ? setPopupVisible(false) : setPopupVisible(true);
        console.log('row>>>>>>>>', e.row.data);
        setModalState((prevState) => ({
            ...prevState,
            DevExPopup: true,
            modalType:"productInfo",
            data: e.row.data ? e.row.data : new Date('2023/1/01 0:00')
        }))

        console.log('modalStateValue true>>>>>>>>', modalStateValue);
    }



    const onExporting = (e) => {
        const workbook = new Workbook();
        const worksheet = workbook.addWorksheet('Main sheet');
        exportDataGrid({
            component: e.component,
            worksheet: worksheet,
            customizeCell: function (options) {
                const { gridCell } = options;
                const { excelCell } = options;
                if (gridCell.rowType === 'data') {
                    if (gridCell.column.dataField === "duration") {
                        console.log("gridCell", gridCell)
                        // excelCell.value = Math.floor(gridCell.value / 3600) + '時間' + (gridCell.value % 3600) + '分';

                        let durationInSeconds = gridCell
                        // 1日の秒数、1時間の秒数、1分の秒数
                        const secondsInDay = 24 * 60 * 60;
                        const secondsInHour = 60 * 60;
                        // 日数を計算
                        const days = Math.floor(durationInSeconds / secondsInDay);
                        // 残りの秒数から時間を計算
                        const remainingSecondsAfterDays = durationInSeconds % secondsInDay;
                        const hours = Math.floor(remainingSecondsAfterDays / secondsInHour);
                        // 残りの秒数から分数を計算
                        // const remainingSecondsAfterHours = remainingSecondsAfterDays % secondsInHour;
                        excelCell.value = `${days}日 ${hours}時間`;
                    }
                }
                options.excelCell.font = { name: 'Arial', size: 12 };
                options.excelCell.alignment = { horizontal: 'left' };
            }
        }).then(function () {
            workbook.xlsx.writeBuffer()
                .then(function (buffer) {
                    saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'Products.xlsx');
                });
        });
    }

    const onEditorPreparing = (e) => {
        if (e.parentType == 'filterRow') {
            e.editorOptions.onFocusOut = function () {
                e.element.querySelector('.dx-apply-button').click();
            };
            e.editorOptions.onEnterKey = function () {
                e.element.querySelector('.dx-apply-button').click();
            };
        }
    }

    const onCellPrepared = (e) => {
        // console.log('e >>>>', e);
        // 残数
        if (e.column.dataField === 'gachaRemainingCount') {
            // 期限切れガチャの場合
            if (e.data?.expiredFlag === 1) {
                e.cellElement.style.color = '#f87171';
            }
        }
        // 終了日時
        if (e.column.dataField === 'formattedGachaEndDate') {
            // 期限切れガチャの場合
            if (e.data?.expiredFlag === 1) {
                e.cellElement.style.color = '#f87171';
            }
            // 売り切れガチャでない場合
            else if (e.data?.soldOutFlag !== 1) {
                e.cellElement.style.color = '#075985';
            }
        }
    };

    return (
        <>
            <DataGrid
                id="gridContainer"
                dataSource={productListValue}
                columnAutoWidth={true}
                height={`50%`}//"50%"
                rowAlternationEnabled={true}
                hoverStateEnabled={true}
                showBorders={false}
                showRowLines={false}
                cellHintEnabled={true}
                allowColumnResizing={true}
                allowColumnReordering={true}
                onExporting={onExporting}
                onEditorPreparing={onEditorPreparing}
                onCellPrepared={onCellPrepared}
                // showRowLines={false}
            >
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
                <Export enabled={true} />
                <ColumnFixing enabled={true} />
                <Scrolling columnRenderingMode="virtual" />
                <Paging enabled={false} />
                <Sorting mode="multiple" />
                <FilterRow
                    visible={true}
                    applyFilter={`onClick`} />
                <Column
                    cssClass="text-gray-400"
                    caption="#"
                    dataField="orderNo"
                    dataType="number"
                    width={48}
                    fixed={true}
                    allowFiltering={true}
                />
                <Column
                    cssClass="text-gray-400"
                    caption="ID"
                    dataField="id"
                    dataType="number"
                    width={48}
                    fixed={true}
                    allowFiltering={true}
                />
                <Column
                    cssClass="text-gray-400"
                    caption="商品名"
                    dataField="name"
                    dataType="string"
                    fixed={true}
                    minWidth={128}
                    width={256}
                    allowReordering={false}
                />
                <Column
                    cssClass="text-gray-400"
                    caption="商品説明"
                    dataField="description"
                    dataType="string"
                    minWidth={256}
                    width={512}
                />
                <Column
                    caption="総pt"
                    dataField="totalPoints"
                    dataType="number"
                    format="#,##0.##pt"
                    cssClass="text-green-400"
                />
                <Column
                    caption="発送pt"
                    dataField="totalShippingPoints"
                    dataType="number"
                    format="#,##0.##pt"
                    cssClass="text-green-400"
                />
                <Column
                    caption="1回pt"
                    dataField="gachaSinglePoint"
                    dataType="number"
                    format="#,##0.##pt"
                    cssClass="text-green-400"
                />
                <Column
                    caption="総数"
                    dataField="gachaTotalCount"
                    dataType="number"
                    format="#,##0.##回"
                    cssClass="text-green-400"
                />
                <Column
                    caption="残数"
                    dataField="gachaRemainingCount"
                    dataType="number"
                    format="#,##0.##回"
                    cssClass="text-green-400"
                />
                <Column
                    caption="開始日時"
                    dataField="formattedGachaStartDate"
                    dataType="date"
                    format="yyyy年MM月dd日 HH:mm"
                    cssClass="text-sky-400"
                    defaultSortIndex={0}
                    defaultSortOrder="desc"
                />
                <Column
                    caption="終了日時"
                    dataField="formattedGachaEndDate"
                    dataType="date"
                    format="yyyy年MM月dd日 HH:mm"
                    cssClass="text-sky-400"
                    defaultSortIndex={1}
                    defaultSortOrder="desc"
                />
                <Column
                    caption="終了日時目標"
                    dataField="endDateTimeGoals"
                    dataType="date"
                    format="yyyy年MM月dd日 HH:mm"
                    cssClass="text-amber-600"
                />
                <Column
                    caption="平均回転目標/日"
                    dataField="revolutionsPerDayGoals"
                    dataType="number"
                    // format="#,##0.##回"
                    customizeText={(cellInfo) => cellInfo.value && cellInfo.value.toFixed(2) + " 回"}
                    cssClass="text-amber-600"
                />
                <Column
                    caption="平均回転/日"
                    dataField="revolutionsPerDay"
                    dataType="number"
                    // format="#,##0.##回"
                    customizeText={(cellInfo) => cellInfo.value && cellInfo.value.toFixed(2) + " 回"}
                    cssClass="text-sky-400"
                />
                <Column
                    caption="平均回転目標/時"
                    dataField="revolutionsPerHourGoals"
                    dataType="number"
                    // format="#,##0.##回"
                    customizeText={(cellInfo) => cellInfo.value && cellInfo.value.toFixed(2) + " 回"}
                    cssClass="text-amber-600"
                />
                <Column
                    caption="平均回転/時"
                    dataField="revolutionsPerHour"
                    dataType="number"
                    // format="#,##0.##回"
                    customizeText={(cellInfo) => cellInfo.value && cellInfo.value.toFixed(2) + " 回"}
                    cssClass="text-sky-400"
                />
                <Column
                    caption="平均pt消化目標/日"
                    dataField="pointsPerDayGoals"
                    dataType="number"
                    format="¥ #,##0.##"
                    cssClass="text-amber-600"
                />
                <Column
                    caption="平均pt消化/日"
                    dataField="pointsPerDay"
                    dataType="number"
                    format="¥ #,##0.##"
                    cssClass="text-sky-400"
                />
                <Column
                    caption="平均pt消化/時"
                    dataField="pointsPerHour"
                    dataType="number"
                    format="¥ #,##0.##"
                    cssClass="text-sky-400"
                />
                <Column
                    caption="完売所要時間目標"
                    dataField="durationGoals"
                    dataType="string"
                    alignment="right"
                    cssClass="text-amber-600"
                />
                <Column
                    caption="完売所要時間"
                    dataField="duration"
                    cellRender={displayDuration}
                    dataType="number"
                    cssClass="text-sky-400"
                />
                <Column
                    caption="遊技総数"
                    dataField="numberOfPlayers"
                    dataType="number"
                    format="#,##0人"
                    cssClass="text-sky-400"
                />
                <Column type="buttons" cssClass="p-0" cellRender={userHistories} caption="user" name="userButton" width={48} />
                <Column type="buttons" cssClass="p-0" cellRender={productHistories} caption="data" name="datButton" width={48} />
                <Column type="buttons" cssClass="p-0" cellRender={productDetails} caption="pack" name="packButton" width={48} />
                <Column type="buttons" caption="info" width={48}>
                    <Button
                        icon="info"
                        // name="edit"
                        onClick={popupShowing}
                    />
                </Column>
            </DataGrid>
        </>
    );
};
