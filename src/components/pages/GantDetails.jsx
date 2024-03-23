import React, { useRef, useState, useEffect,useLayoutEffect, Suspense } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import { useHistory } from "react-router-dom";
import { RecoilEnv, useRecoilState, useRecoilValue } from "recoil";
import { settingsState } from "../../store/settingsState";
import { displayState } from "../../store/displayState";
import 'devexpress-gantt/dist/dx-gantt.min.css';
import Gantt, {
  Column,
  ContextMenu,
  Editing,
  Item,
  ScaleTypeRange,
  Sorting,
  StripLine,
  Tasks,
  Validation,
  
} from 'devextreme-react/gantt';
  import {
    tasks, dependencies, resources, resourceAssignments,
  } from '../../data/constant.js';
  

import useFetchPeriodQuery from "../../hooks/useFetchPeriodQuery";
// import Loader from '../atoms/Loading/Loader';
import Loader from "../atoms/Loading/TherapistLoader";

import TaskTooltipTemplate from '../HelpingComponent/TaskTooltipTemplate';
import TaskProgressTooltipContentTemplate from '../HelpingComponent/TaskProgressTooltipContentTemplate';
import TaskTimeTooltipContentTemplate from '../HelpingComponent/TaskTimeTooltipContentTemplate';

import { iniDateRangeDateBox } from "../../store/iniDateRangeDateBox";
import { iniYearMonthDateBox } from "../../store/iniYearMonthDateBox";
import dxGanttConfig from '../HelpingComponent/dxGanttConfig';
import { locale } from 'devextreme/localization';




const scaleTypes = ['auto', 'minutes', 'hours', 'days', 'weeks', 'months', 'quarters', 'years'];
const titlePositions = ['inside', 'outside', 'none'];

const currentDate = new Date(Date.now()).setHours(12, 0, 0, 0);

export const GantDetails = () => {
  locale('ja-JP'); // Localize Date in Gantt Chart Table Header
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

    const nowTime = new Date();
    let firstDayPrevMonth = Math.floor(new Date(new Date(nowTime.getFullYear(), nowTime.getMonth() - 1, 1)).getTime());
    let lastDayOfNextMonth = Math.floor(new Date(new Date(nowTime.getFullYear(), nowTime.getMonth()+2, 0)).getTime());
    

    const [ganttConfig, setGanttConfig] = useState({
      sortingMode : 'none',
      showSortIndexes:false,
      scaleType:"days",
      taskTitlePosition:"inside",
      showResources: false,
      showDependencies: false,
      showCustomTaskTooltip: true,
      disableContextMenu: false,
      startDateRange: new Date(new Date(firstDayPrevMonth).toLocaleDateString()),
      endDateRange: new Date(new Date(lastDayOfNextMonth).toLocaleDateString()),
    });
    const updateGanttConfig = (value) =>
      setGanttConfig({
        ...ganttConfig,
        ...value,
      });

    let pagePath = 'gantt';
    // let pageName = location.state?.data.name;
    let pageTitle = 'Gant';
    // console.log("tasks",tasks)

    const startDate = Math.floor(new Date(new Date(isFirstTime===true?firstDayPrevMonth:iniDateRangeDateBoxValue[0]).setHours(0, 0, 0, 0)).getTime() / 1000);
    const endDate = Math.floor(new Date(new Date(isFirstTime===true?lastDayOfNextMonth:iniDateRangeDateBoxValue[1]).setHours(23, 59, 59, 999)).getTime() / 1000);

    //detail query
    const { data: records , isLoading: summaryDetailLoading, refetchApi } = useFetchPeriodQuery(startDate, endDate);

    console.log("💦💦💦💦💦💦💦💦💦💦💦💦 records",records);

    const {gantt:dataSource } = records.data || {};


    useEffect(() => {
        window.history.pushState(null, '', window.location.href);
        setDisplayState((prevState) => ({
            ...prevState,
            pageTitle: pageTitle,
            pagePath: pagePath,
            // pageName: pageName,
        }))
    }, [location]);

    const onContextMenuPreparing = (e) => {
      e.cancel = !ganttConfig?.disableContextMenu;
      
    }

    useEffect(() => {
     
      console.log("@@@@ firstDayPrevMonth",firstDayPrevMonth)
      console.log("@@@@ lastDayOfNextMonth",lastDayOfNextMonth)
        setIniDateRangeDateBox([firstDayPrevMonth, lastDayOfNextMonth]);
        setIsFirstTime(false);

    }, [])
    useEffect(() => {
        if (isFirstTime === false) {
            refetchApi()
            console.log("iniDateRangeDateBoxValue",iniDateRangeDateBoxValue);
            //updateGanttByDate
            let startD = new Date(iniDateRangeDateBoxValue[0]).toLocaleDateString();
            let endD = new Date(iniDateRangeDateBoxValue[1]).toLocaleDateString();
            updateGanttConfig({ startDateRange: new Date(startD), endDateRange: new Date(endD)})
        }
    }, [iniDateRangeDateBoxValue]);

    
    // Unix timeをDateオブジェクトに変換する関数
    function convertUnixTimeToDate(unixTime) {
        const date = new Date(unixTime * 1000);
        const formattedDate = date.toISOString().slice(0, 19).replace("T", " ");
        return formattedDate;
    }
    const onTaskClick = (e) => {

    }
    // データを変換して表示用のタスクに設定
    const tasks = dataSource?.map(data => ({
      ...data,
      start: convertUnixTimeToDate(data.start),
      end: convertUnixTimeToDate(data.end),
    }));
    console.log("tasks",tasks)
    return (
        <>
        {summaryDetailLoading && <Loader />}
        <Gantt
      taskListWidth={1072}
      height={'100%'}
      taskTitlePosition={ganttConfig.taskTitlePosition}
      scaleType={ganttConfig.scaleType}
      showResources={ganttConfig.showResources}
      showDependencies={ganttConfig.showDependencies}
      onContextMenuPreparing={onContextMenuPreparing} // Before render context Menu

      taskTooltipContentRender={
        ganttConfig.showCustomTaskTooltip ? TaskTooltipTemplate : undefined
      }
      taskTimeTooltipContentRender={
        ganttConfig.showCustomTaskTooltip ? TaskTimeTooltipContentTemplate : undefined
      }
      taskProgressTooltipContentRender={
        ganttConfig.showCustomTaskTooltip ? TaskProgressTooltipContentTemplate : undefined
      }
      startDateRange={ganttConfig.startDateRange}
      endDateRange={ganttConfig.endDateRange}
      onScaleCellPrepared={dxGanttConfig.onScaleCellPrepared} //Header cell display japanese date style
      onTaskClick={onTaskClick}
      onTaskDblClick={dxGanttConfig.onTaskDblClick}
      
    >
      <ScaleTypeRange min="days" max="days" />
      <Tasks dataSource={tasks} colorExpr="taskColor" />
      {/* <Dependencies dataSource={dependencies} />
      <Resources dataSource={resources} />
      <ResourceAssignments dataSource={resourceAssignments} /> */}

      <StripLine start={currentDate} title={currentDate} cssClass="current-time" />

      <Column
        dataField="id"
        caption="ID"
        dataType="number"
        width={64}
      />
      <Column
        dataField="title"
        caption="商品名"
        width={240}
      />
      <Column
        dataField="description"
        caption="説明"
        width={300}
      />
      <Column
        dataField="gachaSinglePoint"
        caption="1回pt"
        dataType="number"
        format="#,##0.##"
        width={64}
      />
      <Column
        dataField="gachaTotalCount"
        caption="総数"
        dataType="number"
        format="#,##0.##"
        width={80}
      />
      <Column
        dataField="gachaRemainingCount"
        caption="残数"
        dataType="number"
        format="#,##0.##"
        width={64}
      />
      <Column
        dataField="start"
        caption="開始日時"
        dataType="date"
        format="yyyy年MM月dd日"
        width={128}
      />
      <Column
        dataField="end"
        caption="終了日時"
        dataType="date"
        format="yyyy年MM月dd日"
        width={128}
      />

      {/* <Validation autoUpdateParentTasks /> */}
      <Editing enabled = {true}
       allowDependencyAdding={false}
       allowDependencyDeleting={false}
       allowResourceAdding={false}
       allowResourceDeleting={false}
       allowTaskAdding={false}
       allowTaskDeleting={false}
       allowTaskResourceUpdating={false}
       allowTaskUpdating={false} 
      />
      <Sorting mode={ganttConfig.sortingMode} showSortIndexes={ganttConfig.showSortIndexes}></Sorting>

    </Gantt>
        </>
    );
};



