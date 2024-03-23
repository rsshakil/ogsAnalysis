import React, { useRef, useState, useEffect, Suspense } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { displayState } from "../../../store/displayState";
import { dataGridDummyState } from "../../../store/dataGridDummyState";
import { tableStructure } from "../../../store/tableStructure";
import { tableBodyData } from "../../../store/tableBodyData";
import { Holidays } from "../../../store/holidaysData";
import { modalState } from "../../../store/modalState";
import { columnSettingsData } from "../../../store/columnSettingsData";
import { useModal } from "../../../contexts/ModalContext";
import useCustomStore from "../../../hooks/useCustomStore";
import _ from "lodash";
import { Workbook } from 'exceljs';
import saveAs from 'file-saver';

import { pageLoaderState } from "../../../store/pageLoaderState";
import { exportDataGrid } from 'devextreme/excel_exporter';

import DataGrid, {
    Column, FilterRow, HeaderFilter, Search, SearchPanel, Selection, Summary, ColumnFixing, SummaryGroupItem, SummaryTotalItem, GroupItem, Paging, Sorting, Scrolling, Button, Export, SortByGroupSummaryInfo, ColumnChooser, ColumnChooserSelection, Position, Lookup, FilterPanel, LoadPanel,
} from 'devextreme-react/data-grid';
import { iniDateRangeDateBox } from "../../../store/iniDateRangeDateBox";

export const TableBody = ({ tableData }) => {
    const dataGridRef = useRef(null);
    const elementRef = useRef(null);
    const [iniDateRangeDateBoxValue, setIniDateRangeDateBox] = useRecoilState(iniDateRangeDateBox);
    const navigate = useNavigate();
    const location = useLocation();

    // console.log("dataSource",dataSource);
    const [displayStateValue, setDisplayState] = useRecoilState(displayState);
    const [dataGridDummyValue, setDataGridDummy] = useRecoilState(dataGridDummyState);
    const [tableStructureObject, setTableStructure] = useRecoilState(tableStructure);
    const [tableBodyDataObject, setTableBodyData] = useRecoilState(tableBodyData);
    const [holidaysDataObject, setHolidaysData] = useRecoilState(Holidays);
    const [columnSettingsDataObject, setColumnSettingsData] = useRecoilState(columnSettingsData);
    const [modalStateValue, setModalState] = useRecoilState(modalState);
    const [loading, setLoading] = useState(true);
    const [pageLoadiongStateValue, setPageLoadiongState] = useRecoilState(pageLoaderState);

    console.log('holidaysDataObject', holidaysDataObject);

    useEffect(() => {
        console.log("tableData",tableData);
        setDataGridDummy(tableData);
    },[tableData])
    // useEffect(() => {
    //     console.log('navigate fire', dataGridRef?.current);
    //     if (dataGridRef.current) {
    //         refetchApi();
    //         dataGridRef.current.instance.refresh();
    //     }
    //     setDisplayState((prevState) => ({
    //         ...prevState,
    //         pageTitle: pageTitle,
    //         pagePath: pagePath,
    //     }))
    // }, [location]);




    ///////////////////////////////////////////
    //  初期値の設定
    ///////////////////////////////////////////
    //  [初期値]カラムの構造
    let ColumnStyleObject = {};
    //  [初期値]テーブルデータの初期値
    let TableBodyObject = {};
    //  [初期値]行のClass
    let RowClass = columnSettingsDataObject.rowClass;
    //  [初期値]セルのClass
    let CellClass = columnSettingsDataObject.cellClass;
    //  ボタン押した時の挙動
    //  ページ遷移とかモーダルを開くとか
    let onClickFunction;
    ///////////////////////////////////////////
    //  カラム幅の格納
    const columnSsettings = columnSettingsDataObject;

    //  モダールのオープンと引数渡す
    // function openModal(e) {
    //     // console.log("[setModalState]", e.key)
    //     console.log('e.data',e.data);
    //     let modalType = e.type
    //     let openMode = e.mode
    //     let openData = e.data.rowData
    //     setModalState((prevState) => ({
    //         ...prevState,
    //         BaseModalOpen: true,
    //         modalType: modalType,
    //         mode : openMode,
    //         data : openData,
    //     }))
    // }

    //  ページ遷移
    function pageTransition(e) {
        console.log(e, 'eeeeeeeeee')
        // console.log("[setModalState]", e.key)
        console.log('pageParamData', e.data);
        let startDate = Math.floor(new Date(new Date(iniDateRangeDateBoxValue[0]).setHours(0,0,0,0)).getTime()/1000);
        let endDate = Math.floor(new Date(new Date(iniDateRangeDateBoxValue[1]).setHours(23, 59, 59, 999)).getTime()/1000);
        let pagePath = `${e.path}/${e.data.serviceKey}?startDate=${startDate}&endDate=${endDate}`
        let pageName = e.data.serviceName;

        setDisplayState((prevState) => ({
            ...prevState,
            pageName: pageName,
            // pageParam: pageParam
        }))
        // navigate(pagePath);
        window.open(pagePath, '_blank', 'noopener,noreferrer');
        console.log('pagePath>>>>>>>>', pagePath);
    }


    function serviceNameText(cellInfo) {
        return cellInfo.serviceName;
    }
    onClickFunction = (data) => pageTransition({ 'path': '/details', data });

    function categoryNameText(cellData) {
        // 次のページにクリックしたセルの情報を渡す
        return (
            <>
                <button onClick={() => onClickFunction({
                    'serviceKey': cellData.data.serviceId,
                    'serviceName': cellData.data.serviceName,
                    'categoryKey': cellData.value,
                    'categoryName': cellData.data.categoryName
                })}>{`${cellData.data.categoryName}`}</button>
            </>
        );
    }

    //openCategory into a new tab
    const openCategoryLink = (cellData)=>{
        console.log("cellDddddd",cellData);
        let categoryUrlLink = cellData?.row?.data.categoryLink;
        window.open(categoryUrlLink, '_blank', 'noopener,noreferrer');

    }

    const onExporting = (e)=> {
        const workbook = new Workbook();
        const worksheet = workbook.addWorksheet('Main sheet');
        exportDataGrid({
            component: e.component,
            worksheet: worksheet,
            customizeCell: function(options) {
                const { gridCell } = options;
                const { excelCell } = options;
                console.log("gridCellSummary",gridCell)
                if (gridCell.rowType === 'data') {
                    if (gridCell.column.dataField === "categoryId") {
                        excelCell.value = gridCell.data.categoryName;
                    }
                }
                if(gridCell.rowType === 'group'){
                    if (gridCell.column.dataField!== "serviceId" && gridCell.column.dataField!=="startDateTime" && gridCell.column.dataField!=="endDateTime") {
                        if(gridCell.groupSummaryItems && gridCell.groupSummaryItems.length>0 && gridCell.groupSummaryItems[0].value){
                            let cellValue = gridCell.groupSummaryItems[0].value;
                            console.log("cellValue",cellValue)
                            let num = parseFloat(cellValue.toString().replace(/[^\d\.]*/g, ''));
                            excelCell.value = Math.round(num * 10) / 10;
                        }
                    }
                }
                options.excelCell.font = { name: 'Arial', size: 12 };
                options.excelCell.alignment = { horizontal: 'left' };
            } 
        }).then(function() {
            workbook.xlsx.writeBuffer()
                .then(function(buffer) {
                    saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'Summary.xlsx');
                });
        });
    }

    return (
        <>
            <>
                <DataGrid
                    id="gridContainer"
                    dataGridRef={dataGridRef}
                    dataSource={dataGridDummyValue}
                    columnAutoWidth={true}
                    height={"50%"}//"50%"
                    rowAlternationEnabled={true}
                    hoverStateEnabled={true}
                    showBorders={false}
                    showRowLines={false}
                    cellHintEnabled={true}
                    allowColumnResizing={true}
                    allowColumnReordering={true}
                    onExporting={onExporting}
                    //  showRowLines={false}
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

                    <SortByGroupSummaryInfo
                        summaryItem="pointsPerRange"
                        sortOrder="desc"
                    />
                    <FilterRow
                        visible={true}
                        applyFilter={true} />
                    <Column caption="基本情報" cssClass="!text-center" allowReordering={false} fixed={true}>
                        <Column
                            caption=""
                            calculateCellValue={serviceNameText}
                            dataField="serviceId"
                            dataType="string"
                            groupIndex={0}
                            fixed={true}
                        />
                        <Column
                            cssClass="text-gray-300 underline"
                            caption="カテゴリー"
                            cellRender={categoryNameText}
                            dataField="categoryId"
                            dataType="string"
                            fixed={true}
                            width={256}
                        />

                        <Column
                            cssClass="text-gray-400"
                            caption="取得開始日時"
                            dataField="startDateTime"
                            dataType="datetime"
                            format="yyyy年MM月dd日 HH:MM"
                        />
                        <Column
                            cssClass="text-gray-400"
                            caption="取得最新日時"
                            dataField="endDateTime"
                            dataType="datetime"
                            format="yyyy年MM月dd日 HH:MM"
                        />
                    </Column>
                    <Column caption="回転数" cssClass="!text-center">
                        <Column
                            caption="総計"
                            dataField="revolutionsPerRange"
                            dataType="number"
                            format="#,##0.##回"
                            cssClass="text-green-400"
                        />
                        <Column
                            caption="時平均"
                            dataField="revolutionsPerHour"
                            dataType="number"
                            format="#,##0.##回"
                            cssClass="text-green-400"
                        />
                        <Column
                            caption="日平均"
                            dataField="revolutionsPerDay"
                            dataType="number"
                            format="#,##0.##回"
                            cssClass="text-green-400"
                        />
                        <Column
                            caption="月平均"
                            dataField="revolutionsPerMonth"
                            dataType="number"
                            format="#,##0.##回"
                            cssClass="text-green-400"
                        />
                    </Column>
                    <Column caption="PT数" cssClass="!text-center">
                        <Column
                            caption="総計"
                            dataField="pointsPerRange"
                            dataType="number"
                            format="¥ #,##0.##"
                            cssClass="text-sky-400"
                            defaultSortIndex={0}
                            defaultSortOrder="desc"
                        />
                        <Column
                            caption="時平均"
                            dataField="pointsPerHour"
                            dataType="number"
                            format="¥ #,##0.##"
                            cssClass="text-sky-400"
                        />
                        <Column
                            caption="日平均"
                            dataField="pointsPerDay"
                            dataType="number"
                            format="¥ #,##0.##"
                            cssClass="text-sky-400"
                        />
                        <Column
                            caption="月平均"
                            dataField="pointsPerMonth"
                            dataType="number"
                            format="¥ #,##0.##"
                            cssClass="text-sky-400"
                        />
                    </Column>
                    <Column caption="新規リリース" cssClass="!text-center">
                        <Column
                            caption="総計"
                            dataField="releasePerRange"
                            dataType="number"
                            format="#,##0.##個"
                            cssClass="text-green-400"
                        />
                        <Column
                            caption="日平均"
                            dataField="releasePerDay"
                            dataType="number"
                            format="#,##0.#個"
                            cssClass="text-green-400"
                        />
                        <Column
                            caption="月平均"
                            dataField="releasePerMonth"
                            dataType="number"
                            format="#,##0.#個"
                            cssClass="text-green-400"
                        />
                    </Column>
                    <Column
                        caption="pt分配（指定した期間　ユーザー還元が80%なら20%の列を参照）"
                        cssClass="!text-center">
                        <Column
                            caption="30%"
                            dataField="pointDistribution30"
                            dataType="number"
                            format="¥ #,##0.##"
                            cssClass="text-sky-400"
                        />
                        <Column
                            caption="25%"
                            dataField="pointDistribution25"
                            dataType="number"
                            format="¥ #,##0.##"
                            cssClass="text-sky-400"
                        />
                        <Column
                            caption="20%"
                            dataField="pointDistribution20"
                            dataType="number"
                            format="¥ #,##0.##"
                            cssClass="text-sky-400"
                        />
                        <Column
                            caption="15%"
                            dataField="pointDistribution15"
                            dataType="number"
                            format="¥ #,##0.##"
                            cssClass="text-sky-400"
                        />
                        <Column
                            caption="10%"
                            dataField="pointDistribution10"
                            dataType="number"
                            format="¥ #,##0.##"
                            cssClass="text-sky-400"
                        />
                        <Column
                            caption="5%"
                            dataField="pointDistribution5"
                            dataType="number"
                            format="¥ #,##0.##"
                            cssClass="text-green-400"
                        />
                        <Column
                            caption="4%"
                            dataField="pointDistribution4"
                            dataType="number"
                            format="¥ #,##0.##"
                            cssClass="text-green-400"
                        />
                        <Column
                            caption="3%"
                            dataField="pointDistribution3"
                            dataType="number"
                            format="¥ #,##0.##"
                            cssClass="text-green-400"
                        />
                        <Column
                            caption="2%"
                            dataField="pointDistribution2"
                            dataType="number"
                            format="¥ #,##0.##"
                            cssClass="text-green-400"
                        />
                        <Column
                            caption="1%"
                            dataField="pointDistribution1"
                            dataType="number"
                            format="¥ #,##0.##"
                            cssClass="text-green-400"
                        />
                    </Column>
                    <Column type="buttons" caption="link" width={48}>
                        <Button onClick={openCategoryLink}
                            icon="link"
                            text="link"
                        />
                    </Column>
                    <Summary skipEmptyValues={true}>
                        <GroupItem
                            column="startDateTime"
                            summaryType="min"
                            // valueFormat="date"
                            displayFormat="{0}"
                            valueFormat="yyyy年MM月dd日 HH:MM"
                            alignByColumn={true}
                            cssClass="text-green-400"
                            // showInGroupFooter={true}
                        >
                            {/* <SummaryTotalItem cssClass="!text-green-400" /> */}
                        </GroupItem>
                        <GroupItem
                            column="endDateTime"
                            summaryType="max"
                            // valueFormat="date"
                            displayFormat="{0}"
                            valueFormat="yyyy年MM月dd日 HH:MM"
                            alignByColumn={true}
                            // showInGroupFooter={true}
                        />
                        <GroupItem
                            column="revolutionsPerRange"
                            summaryType="sum"
                            // valueFormat="date"
                            displayFormat="{0}"
                            valueFormat="#,##0.##回"
                            alignByColumn={true}
                            // showInGroupFooter={true}
                            customizeText={(cellInfo)=>cellInfo.valueText}
                        />
                        <GroupItem
                            column="revolutionsPerHour"
                            summaryType="avg"
                            displayFormat="{0}"
                            valueFormat="#,##0.##回"
                            alignByColumn={true}
                            // showInGroupFooter={true}
                            customizeText={(cellInfo)=>cellInfo.valueText}
                        />
                        <GroupItem
                            column="revolutionsPerDay"
                            summaryType="avg"
                            displayFormat="{0}"
                            valueFormat="#,##0.##回"
                            alignByColumn={true}
                            // showInGroupFooter={true}
                            customizeText={(cellInfo)=>cellInfo.valueText}
                        />
                        <GroupItem
                            column="revolutionsPerMonth"
                            summaryType="avg"
                            displayFormat="{0}"
                            valueFormat="#,##0.##回"
                            alignByColumn={true}
                            // showInGroupFooter={true}
                            customizeText={(cellInfo)=>cellInfo.valueText}
                        />

                        <GroupItem
                            column="pointsPerRange"
                            summaryType="sum"
                            displayFormat="{0}"
                            valueFormat="¥ #,##0.##"
                            alignByColumn={true}
                            // showInGroupFooter={true}
                            customizeText={(cellInfo)=>cellInfo.valueText}
                        />
                        <GroupItem
                            column="pointsPerHour"
                            summaryType="sum"
                            displayFormat="{0}"
                            valueFormat="¥ #,##0.##"
                            alignByColumn={true}
                            // showInGroupFooter={true}
                            customizeText={(cellInfo)=>cellInfo.valueText}
                        />
                        <GroupItem
                            column="pointsPerDay"
                            summaryType="sum"
                            displayFormat="{0}"
                            valueFormat="¥ #,##0.##"
                            alignByColumn={true}
                            // showInGroupFooter={true}
                            customizeText={(cellInfo)=>cellInfo.valueText}
                        />
                        <GroupItem
                            column="pointsPerMonth"
                            summaryType="sum"
                            displayFormat="{0}"
                            valueFormat="¥ #,##0.##"
                            alignByColumn={true}
                            // showInGroupFooter={true}
                            customizeText={(cellInfo)=>cellInfo.valueText}
                        />

                        <GroupItem
                            column="releasePerRange"
                            summaryType="sum"
                            displayFormat="{0}"
                            valueFormat="#,##0.##個"
                            alignByColumn={true}
                            // showInGroupFooter={true}
                            customizeText={(cellInfo)=>cellInfo.valueText}
                        />
                        <GroupItem
                            column="releasePerDay"
                            summaryType="avg"
                            displayFormat="{0}"
                            valueFormat="#,##0.#個"
                            alignByColumn={true}
                            // showInGroupFooter={true}
                            customizeText={(cellInfo)=>cellInfo.valueText}
                        />
                        <GroupItem
                            column="releasePerMonth"
                            summaryType="avg"
                            displayFormat="{0}"
                            valueFormat="#,##0.#個"
                            alignByColumn={true}
                            // showInGroupFooter={true}
                            customizeText={(cellInfo)=>cellInfo.valueText}
                        />

                        <GroupItem
                            column="pointDistribution30"
                            summaryType="sum"
                            displayFormat="{0}"
                            valueFormat="¥ #,##0.##"
                            alignByColumn={true}
                            // showInGroupFooter={true}
                            customizeText={(cellInfo)=>cellInfo.valueText}
                        />
                        <GroupItem
                            column="pointDistribution25"
                            summaryType="sum"
                            displayFormat="{0}"
                            valueFormat="¥ #,##0.##"
                            alignByColumn={true}
                            // showInGroupFooter={true}
                            customizeText={(cellInfo)=>cellInfo.valueText}
                        />
                        <GroupItem
                            column="pointDistribution20"
                            summaryType="sum"
                            displayFormat="{0}"
                            valueFormat="¥ #,##0.##"
                            alignByColumn={true}
                            // showInGroupFooter={true}
                            customizeText={(cellInfo)=>cellInfo.valueText}
                        />
                        <GroupItem
                            column="pointDistribution15"
                            summaryType="sum"
                            displayFormat="{0}"
                            valueFormat="¥ #,##0.##"
                            alignByColumn={true}
                            // showInGroupFooter={true}
                            customizeText={(cellInfo)=>cellInfo.valueText}
                        />
                        <GroupItem
                            column="pointDistribution10"
                            summaryType="sum"
                            displayFormat="{0}"
                            valueFormat="¥ #,##0.##"
                            alignByColumn={true}
                            // showInGroupFooter={true}
                            customizeText={(cellInfo)=>cellInfo.valueText}
                        />
                        <GroupItem
                            column="pointDistribution5"
                            summaryType="sum"
                            displayFormat="{0}"
                            valueFormat="¥ #,##0.##"
                            alignByColumn={true}
                            // showInGroupFooter={true}
                            customizeText={(cellInfo)=>cellInfo.valueText}
                        />
                        <GroupItem
                            column="pointDistribution4"
                            summaryType="sum"
                            displayFormat="{0}"
                            valueFormat="¥ #,##0.##"
                            alignByColumn={true}
                            // showInGroupFooter={true}
                            customizeText={(cellInfo)=>cellInfo.valueText}
                        />
                        <GroupItem
                            column="pointDistribution3"
                            summaryType="sum"
                            displayFormat="{0}"
                            valueFormat="¥ #,##0.##"
                            alignByColumn={true}
                            // showInGroupFooter={true}
                            customizeText={(cellInfo)=>cellInfo.valueText}
                        />
                        <GroupItem
                            column="pointDistribution2"
                            summaryType="sum"
                            displayFormat="{0}"
                            valueFormat="¥ #,##0.##"
                            alignByColumn={true}
                            // showInGroupFooter={true}
                            customizeText={(cellInfo)=>cellInfo.valueText}
                        />
                        <GroupItem
                            column="pointDistribution1"
                            summaryType="sum"
                            displayFormat="{0}"
                            valueFormat="¥ #,##0.##"
                            alignByColumn={true}
                            // showInGroupFooter={true}
                            customizeText={(cellInfo)=>cellInfo.valueText}
                        />
                    </Summary>
                </DataGrid>
            </>
        </>
    );
};


