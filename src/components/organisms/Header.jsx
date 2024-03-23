import React, { useRef, useState, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { useNavigate } from 'react-router-dom';
import { elmState } from "../../store/elmState";
import { UseWindowDimensions } from "../../functions/UseWindowDimensions";
import { useLocation } from "react-router-dom";
import { NumberBox } from 'devextreme-react/number-box';
// import { MenuButton } from "../atoms/buttons/MenuButton";
// import Product from "../atoms/img/Product.svg";
// import Item from "../atoms/img/Item.svg";
// import Shipping from "../atoms/img/Shipping.svg";
// import User from "../atoms/img/User.svg";
// import Sales from "../atoms/img/Sales.svg";
// import Stripe from "../atoms/img/Stripe.svg";
// import Setting from "../atoms/img/Setting.svg";

import Back from "../atoms/img/Back.svg";
// import Download from "../atoms/img/Download.svg";
import Plus from "../atoms/img/Plus.svg";
import { MenuButtonSub } from "../atoms/buttons/MenuButtonSub";
import { displayState } from "../../store/displayState";
import { modalState } from "../../store/modalState";
import { pageLoaderState } from "../../store/pageLoaderState";
import _ from "lodash";
import Popup from 'devextreme-react/popup';
import DateRangeBox from 'devextreme-react/date-range-box';
import { formatDate, parseDate } from "devextreme/localization";
import { iniDateRangeDateBox } from "../../store/iniDateRangeDateBox";
import { iniYearMonthDateBox } from "../../store/iniYearMonthDateBox";
import TherapistLoader from '../atoms/Loading/TherapistLoader';
import { Button } from 'devextreme-react/button';
import DateBox from 'devextreme-react/date-box';
import { DescriptionContent } from "../../components/molecules/modal/modalContent/DescriptionContent"
import { TestUserContent } from "../../components/molecules/modal/modalContent/TestUserContent"
import { ProductsPagePopup } from "../../components/molecules/modal/modalContent/ProductsPagePopup"
import DataGrid, {
    Column, FilterRow, HeaderFilter, Search, SearchPanel, Selection, Summary, ColumnFixing, SummaryGroupItem, SummaryTotalItem, GroupItem, Paging, Sorting, Scrolling, Export, ColumnChooser, Editing, ToolbarItem, Item, Texts, SortByGroupSummaryInfo, Lookup, FilterPanel, ColumnChooserSelection, Form, SimpleItem, LoadPanel,
} from 'devextreme-react/data-grid';
import { HistoriesPagePopup } from "../molecules/modal/modalContent/HistoriesPagePopup";

export const Header = ({ handleDateRangeChange = () => { } }) => {
    const [displayStateValue, setDisplayState] = useRecoilState(displayState);
    const [modalStateValue, setModalState] = useRecoilState(modalState);
    const [pageLoadiongStateValue, setPageLoadiongState] = useRecoilState(pageLoaderState);
    const [iniDateRangeDateBoxValue, setIniDateRangeDateBox] = useRecoilState(iniDateRangeDateBox);
    const [yearMonthDateBox, setYearMonthDateBox] = useRecoilState(iniYearMonthDateBox);
    const [isFirstTime, setIsFirstTime] = useState(true);
    // for Effect setElmState
    const location = useLocation();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [buttonStatus, setButtonStatus] = useState(false);
    const processing = useRef(false);
console.log("location.pathName",location.pathname);
    // 画面の幅　最新情報取得
    const { width, height } = UseWindowDimensions();
    //　エレメント設定の読み込み
    const [elmStateValue, setElmState] = useRecoilState(elmState);
    //headerの高さを取得する
    const elm = useRef(null);
    //headerの高さを保存する
    useEffect(() => {
        setElmState((prevState) => ({
            ...prevState,
            headerHeight: elm.current.offsetHeight,
        }))
    }, [location, width, height]);

    // const serviceName = process.env.SERVICE_NAME

    useEffect(() => {
        if (location.pathname.includes("details/")) {
            let detailStartDate = new URLSearchParams(location?.search).get("startDate");
            let detailEndDate = new URLSearchParams(location?.search).get("endDate");
            if (detailStartDate && detailEndDate) {
                let newDate = [new Date(detailStartDate * 1000).setHours(0, 0, 0, 0), new Date(detailEndDate * 1000).setHours(23, 59, 59, 999)]
                console.log("newDateuseEffect", newDate)
                setIniDateRangeDateBox([...newDate])
            }
        }
    }, [])

    const backToPrevPageWithPrevDate = (e) => {
        let prevDate = JSON.parse(localStorage.getItem("startDateEndDate"));
        console.log("prevDate",prevDate);
        if(prevDate){
            setIniDateRangeDateBox([...prevDate])
        }
        navigate('/products');
    }
    const chartAreaShowHide = (e) => {
        setButtonStatus(true);
        setLoading(true);
        // e.currentTarget.disabled = true;
        console.log("show hide chart", displayStateValue.isChartDisplay);
        // document.getElementById("chartContainer").style.display =displayStateValue.isChartDisplay?"none":"block";

        // document.getElementById("gridContainer").style.height = document.getElementById("gridContainer").style.height == "50%" ? "100%" : "50%";
        document.getElementById("chartContainer").style.display = document.getElementById("chartContainer").style.display == "" || document.getElementById("chartContainer").style.display=="block" ? "none" : "block";


        document.getElementById("gridContainer").style.height = document.getElementById("chartContainer").style.display == "" || document.getElementById("chartContainer").style.display=="block" ? "50%" : "100%";

        document.getElementById("chartContainer").style.height = document.getElementById("gridContainer").style.display == "" || document.getElementById("gridContainer").style.display=="block" ? "50%" : "100%";

        // setDisplayState((prevState)=>({
        //     ...prevState,
        //     isChartDisplay:displayStateValue.isChartDisplay===true?false:true
        // }))
        setTimeout(() => {
            setLoading(false);
            setButtonStatus(false);

        }, 2000)
        // e.currentTarget.disabled = false;
    }

    const tableAreaShowHide = (e) => {
        setButtonStatus(true);
        setLoading(true);
        // e.currentTarget.disabled = true;
        console.log("show hide chart", displayStateValue.isChartDisplay);
        // document.getElementById("chartContainer").style.display =displayStateValue.isChartDisplay?"none":"block";
        console.log("isDIsplayTable",document.getElementById("gridContainer").style);

        // document.getElementById("gridContainer").style.height = document.getElementById("gridContainer").style.height == "50%" ? "100%" : "50%";
        document.getElementById("gridContainer").style.display = document.getElementById("gridContainer").style.display == "" || document.getElementById("gridContainer").style.display=="block" ? "none" : "block";

        document.getElementById("gridContainer").style.height = document.getElementById("chartContainer").style.display == "" || document.getElementById("chartContainer").style.display=="block" ? "50%" : "100%";

        document.getElementById("chartContainer").style.height = document.getElementById("gridContainer").style.display == "" || document.getElementById("gridContainer").style.display=="block" ? "50%" : "100%";
        // setDisplayState((prevState)=>({
        //     ...prevState,
        //     isChartDisplay:displayStateValue.isChartDisplay===true?false:true
        // }))
        setTimeout(() => {
            setLoading(false);
            setButtonStatus(false);

        }, 2000)
        // e.currentTarget.disabled = false;
    }
    
    //////////////////////////////////////////////////////////////////
    //  メニューの内容定義
    //////////////////////////////////////////////////////////////////
    //  通常のメニュー

    const standardMenu = <>
        <DateRangeBox
            value={iniDateRangeDateBoxValue}
            displayFormat="yyyy年MM月dd日 (EE)"
            startDateLabel="集計開始"
            endDateLabel="集計終了"
            height="40px"
            width="360px"
            labelMode="floating"
            stylingMode="filled"
            onValueChanged={handleDateRangeChange}
            applyValueMode="useButtons"
            cancelButtonText="キャンセル"
            todayButtonText="今日"
            locale="ja"
        />
    </>;

    //change UserId
    const handleUserIdChange = (e) => {
        const previousValue = e.previousValue;
        const newValue = e.value;
        console.log("value previousValue",previousValue)
        console.log("value newValue",newValue)
        if(previousValue!=newValue){
            setYearMonthDateBox((prevState)=>({
                ...prevState,
                userId:newValue
            }));
        }
    }

    function popupHiding(e) {
        console.log('popupHiding>>>>>>>>', e);
        setModalState((prevState) => ({
            ...prevState,
            DevExPopup: false,
        }))
        console.log('modalStateValue false>>>>>>>>', modalStateValue);
    }

    const keyDown = (e) => {
        console.log("eeee",e);
        const { event } = e;
        const { name, value } = event.target || {};
        if(event.key === "Backspace" || event.key === "Delete"){
            console.log("valid input")
        }else if(value.length>9){
            event.preventDefault();
        }
        
    };

    //change DateRange
    const handleYearMonthChange = (e) =>{
        const previousValue = e.previousValue;
        const newValue = e.value;
        // Event handling commands go here
        console.log("previousValue",previousValue)
        console.log("newValue",newValue);
        if(previousValue!=newValue){
            console.log("date range changed");
            let dateMonthConvert = new Date(new Date(newValue)).getTime();
            console.log("dateMonthConvert",dateMonthConvert);
            setYearMonthDateBox((prevState)=>({
                ...prevState,
                yearMonth:dateMonthConvert
            }));
            localStorage.setItem("yearMonth",dateMonthConvert);
        }
    }

    const calendarOptions = {maxZoomLevel: 'year', minZoomLevel: 'century'};
    const monthOfYear = <>
        <DateBox
            defaultValue={yearMonthDateBox?.yearMonth}
            displayFormat='yyyy年MM月'
            calendarOptions={calendarOptions}
            height="36px"
            width="128px"
            onValueChanged={handleYearMonthChange}
            locale="ja"
            type="date"
        />
    </>
    const searchByUserId = <>
        <div className="dx-field-value">
            <NumberBox  
                value={yearMonthDateBox?.userId}
                onValueChanged={handleUserIdChange}
                // onKeyDown={keyDown}
                step={0}
                label="ユーザーID"
                labelMode="floating"
                height="36px"
                width="128px"
            />
        </div>
    </>
    //  summaryに戻る
    const back2Summary = <><MenuButtonSub pathname='products' icon={Back} onClick={() => backToPrevPageWithPrevDate}>戻る</MenuButtonSub></>;
    const chartShowHideButton = <><MenuButtonSub isDisabled={buttonStatus} onClick={(e) => chartAreaShowHide(e)}>💹 表示／非表示<Button icon="info"/></MenuButtonSub></>;
    const tableShowHideButton = <><MenuButtonSub isDisabled={buttonStatus} onClick={(e) => tableAreaShowHide(e)}>📃 表示／非表示<Button icon="info"/></MenuButtonSub></>;
    // const chartShowHideButton = <><Button icon="info" text="Save" onClick={(e) => chartAreaShowHide(e)}/></>;

    //////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////
    const host = window.location.hostname;
    const serviceName = host.endsWith('adadoripa.com') ? 'アドアドオリパ' : 'カーデル';
    console.log("displayStateValue.pagePath",displayStateValue.pagePath)
    console.log("displayStateValue.pageName",displayStateValue.pageName)
    console.log("displayStateValue.totalCount",displayStateValue?.totalCount)


    function salesPopupDisplay(modalName,modalTitle) {
        // popupVisible ? setPopupVisible(false) : setPopupVisible(true);
        console.log("modalName",modalName);
        setModalState((prevState) => ({
            ...prevState,
            DevExPopup: true,
            modalType:modalName,
            data: {
                ...prevState.data,
                name:modalTitle
            }
        }))

        console.log('modalStateValue true>>>>>>>>', modalStateValue);
    }

    console.log("modalInfo",modalStateValue)

    return (
        <>
            {loading && <TherapistLoader />}
            <Popup
                visible={modalStateValue.DevExPopup}
                onHiding={popupHiding}
                // title={modalStateValue.data.name}
                showTitle={true}
                hideOnOutsideClick={true}
                dragOutsideBoundary={true}
                resizeEnabled={false}
                width={700}
                height="100%"
                // contentRender={}
            >
                <ToolbarItem
                    text={modalStateValue.data.name}
                    cssClass="text-sky-400 font-bold"
                    location="before"></ToolbarItem>
                <ToolbarItem
                    visible={false}
                    // widget="dxButton"
                    // toolbar="bottom"
                    // location="after"
                    // options={"text: 'Close'"}
                />
                {{
                    'descriptionContent':<DescriptionContent/>,
                    'testUser':<TestUserContent/>,
                    'productInfo':<ProductsPagePopup />,
                    'historyInfo':<HistoriesPagePopup />
                    }[modalStateValue.modalType]}
            </Popup>
            <header ref={elm} className={`w-full absolute h-16 grow-0 flex z-20 flex-col px-4 overflow-auto`}>
                <div className="flex justify-between h-full">
                    <div className="flex justify-start items-center header-container">
                        {
                            !location.pathname.includes("/users/")
                            && !location.pathname.includes("/histories/")
                            && !location.pathname.includes("/product-details")
                            && !location.pathname.includes("/sales")
                            && !location.pathname.includes("/gantt")
                            && !location.pathname.includes("/search")
                                ? standardMenu : <Button icon='home' text="トップ" onClick={backToPrevPageWithPrevDate}/>
                        }&ensp;
                        {/* {chartShowHideButton}&ensp;&ensp;
                        {tableShowHideButton} */}
                        {location.pathname.includes("/sales") && monthOfYear}
                        {location.pathname.includes("/search") && searchByUserId}
                    </div>

                    <div className="flex justify-center items-center header-container">
                        <p className="font-bold text-lg truncate text-ogs-analyze-label">
                        {
                            {
                                'products': `${serviceName}&オリパ分析`,
                                'histories': `${serviceName}　オリパ履歴：${displayStateValue?.pageName?displayStateValue?.pageName:""}`,
                                'users': `${serviceName}　ユーザー履歴：${displayStateValue?.pageName?displayStateValue?.pageName:""}　総数：${displayStateValue?.gachaTotalCount?displayStateValue?.gachaTotalCount:0}`,
                                'product-details': `${serviceName}　パック情報`,
                                'sales': `${serviceName}　オリパ売り上げ`,
                                'gantt': `${serviceName}　オリパ販売期間`,
                                'search': `${serviceName}　ユーザー検索`,
                                'details': displayStateValue.pageName ? displayStateValue.pageName : "",
                            }[displayStateValue.pagePath]
                        }</p>
                    </div>
                    <div className="flex justify-end items-center font-bold text-lg text-ogs-analyze-label header-container">
                    {
                            !location.pathname.includes("/product-details") && !location.pathname.includes("/histories") && !location.pathname.includes("/gantt") && !location.pathname.includes("/search") && (
                                <>
                                    <Button icon={`eye${document.getElementById("chartContainer") && (document.getElementById("chartContainer")?.style?.display == "" || document.getElementById("chartContainer")?.style?.display=="block") ? "open" : "close"}`} disabled={buttonStatus} text="チャート" onClick={(e) => chartAreaShowHide(e)}/>&ensp;
                                    <Button icon={`eye${document.getElementById("gridContainer") && (document.getElementById("gridContainer")?.style?.display == "" || document.getElementById("gridContainer").style?.display=="block") ? "open" : "close"}`} disabled={buttonStatus} text="一覧" onClick={(e) => tableAreaShowHide(e)}/>&ensp;
                                </>
                            )
                        }
                        {
                            {
                                'products': <></>,
                                'sales': <></>
                            }[displayStateValue.pagePath]
                        }
                        
                        <Button icon="chart" hint="売り上げ" onClick={(e) => window.open("sales", '_blank', 'noopener,noreferrer')}/>&ensp;
                        <Button icon="hierarchy" hint="オリパチャート" onClick={(e) => window.open("gantt", '_blank', 'noopener,noreferrer')}/>&ensp;
                        <Button icon="search" hint="ユーザー検索" onClick={(e) => window.open("search", '_blank', 'noopener,noreferrer')} />&ensp;
                        <Button icon="user" hint="テストユーザー" onClick={(e)=>salesPopupDisplay("testUser","テストユーザー")}/>&ensp;
                        <Button icon="textdocument" hint="説明" onClick={(e)=>salesPopupDisplay("descriptionContent","説明")}/>
                        {
                            {
                                'summary': '全サービス',
                                'details': back2Summary,
                            }[displayStateValue.pagePath]
                        }
                    </div>
                </div>
            </header>
        </>
    )
};
