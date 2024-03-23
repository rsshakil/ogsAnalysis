//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//  残作業
//  重いのでなんとかする
//  
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

import React, { useRef, useState, useEffect, Suspense } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { displayState } from "../../store/displayState";
import { summaryChartDummyState } from "../../store/summaryChartDummyState";
import { detailChartDummyState } from "../../store/detailChartDummyState";
import { iniDateRangeDateBox } from "../../store/iniDateRangeDateBox";

import {
    Chart,
    Series,
    ValueAxis,
    ArgumentAxis,
    ZoomAndPan,
    ScrollBar,
    CommonSeriesSettings,
    Point,
    Label,
    Font,
    AggregationInterval,
    Export,
    Legend,
    Margin,
    Title,
    Subtitle,
    Tooltip,
    Grid,
    LoadingIndicator,
} from 'devextreme-react/chart';


export const Charts = ({ chartData, customWrapClass, customImgClass }) => {
    // const [displayStateValue, setDisplayState] = useRecoilState(displayState);
    const [chartDummyStateValue, setChartDummyState] = useRecoilState(summaryChartDummyState);
    // const [detailChartDummyStateValue, setDetailChartDummyState] = useRecoilState(detailChartDummyState);
    const [iniDateRangeDateBoxValue, setIniDateRangeDateBox] = useRecoilState(iniDateRangeDateBox);
    useEffect(() => {
        console.log("chartData",chartData);
        setChartDummyState(chartData);
    },[chartData])


    const visualRangeSettings = {
        startValue: new Date(iniDateRangeDateBoxValue[0]).setHours(0,0,0,0),
        endValue: new Date(iniDateRangeDateBoxValue[1]).setHours(23, 59, 59, 999)
    }

    // シリーズの分だけ記載する
    function customizeTooltip(pointInfo) {
        return {
            html:
                `<div>
            <div class="tooltip-header text-center text-base">${new Date(pointInfo.argumentText).toLocaleString()}</div>
            <div class="tooltip-body">
                <div class="series-name grid grid-cols-2 ">
                ${pointInfo.points[0]?.seriesName?`<span class='top-series-name'>${pointInfo.points[0]?.seriesName} : </span><span class='top-series-value text-right'>${pointInfo.points[0]?.valueText}</span>`:""}
                ${pointInfo.points[1]?.seriesName?`<span class='top-series-name'>${pointInfo.points[1]?.seriesName} : </span><span class='top-series-value text-right'>${pointInfo.points[1]?.valueText}</span>`:""}
                ${pointInfo.points[2]?.seriesName?`<span class='top-series-name'>${pointInfo.points[2]?.seriesName} : </span><span class='top-series-value text-right'>${pointInfo.points[2]?.valueText}</span>`:""}
                ${pointInfo.points[3]?.seriesName?`<span class='top-series-name'>${pointInfo.points[3]?.seriesName} : </span><span class='top-series-value text-right'>${pointInfo.points[3]?.valueText}</span>`:""}
                </div>
            </div>`
        };
    }
    function onLegendClick({ target: series }) {
        if (series.isVisible()) {
            series.hide();
        } else {
            series.show();
        }
    }

    return (
        <>
            <Chart
                // palette="Material"
                id="chartContainer"
                dataSource={chartDummyStateValue}
                height="50%"
                // theme="generic.dark"
                onLegendClick={onLegendClick}
            >
                <LoadingIndicator
                    enabled={true}
                    backgroundColor="#FFFFFF"
                    show={true}
                    text="読み込み中"
                />
                <CommonSeriesSettings
                    type="spline"
                    argumentField="date"
                    // axis="price"
                    // format="yyyy年MM月dd日 HH:mm"
                    // format="¥ #,##0.##"
                    width={1}
                >
                    <Point visible={false}
                        // size={4} 
                    />
                </CommonSeriesSettings>

                <Legend
                    verticalAlignment="bottom"
                    horizontalAlignment="canter"
                    itemTextPosition="right"
                    position="outside"
                    orientation="horizontal"
                    markerSize={8}
                    columnItemSpacing={4}
                    // margin={4}
                    paddingLeftRight={0}
                    rowItemSpacing={1}
                >
                    <Font
                        size={8}
                    />
                    <Margin
                        top={16}
                        right={4}
                        bottom={4}
                        left={4}
                    />
                </Legend>
                <ValueAxis
                    // valueType="numeric"
                    // name="price"
                    // position="left"
                    // format="¥ #,##0.##"
                >
                    <Label
                        format="¥ #,##0.##"
                    ><Font size={8} /></Label>
                </ValueAxis>
                <ArgumentAxis
                    argumentType="datetime"
                    // type="discrete"
                    // format="yyyy年MM月dd日 HH:mm"
                    visualRange={visualRangeSettings}
                    // aggregationInterval={"day"}
                >
                    {/* <AggregationInterval days={7} />     */}
                    <Label
                        overlappingBehavior="stagger"
                        position="outside"
                        format="yyyy年MM月dd日 HH:mm"
                    >
                        <Font size={8} />
                    </Label>
                </ArgumentAxis>
                <ZoomAndPan
                    // valueAxis="none"
                    argumentAxis="both"//zoom before
                    // dragToZoom={false}
                    // allowMouseWheel={true}
                    
                />
                <ScrollBar
                    visible={true}
                />
                <Tooltip
                    enabled={true}
                    shared={true}
                    format="¥ #,##0.##"
                    customizeTooltip={customizeTooltip}
                />
                {/* あまり増減しないのでベタに書く */}
                <Series name="エクストレカ" valueField="ex-toreca" />
                {/* <Series name="DOPA" valueField="dopa" /> */}
                {/* <Series name="日本トレカ" valueField="japan-toreca" /> */}
                <Series name="Clove" valueField="clove" />
                <Series name="ロイヤルトレカ" valueField="royaltoreca" />
                <Series name="Spark Oripa" valueField="sparkoripa" />
                {/* <Series name="Gacha24" valueField="gacha24" />
                <Series name="Iris" valueField="iris" />
                <Series name="オリパロード" valueField="oriparoad" />
                <Series name="スニダン" valueField="snkrdunk" />
                <Series name="Cielトレカ" valueField="ciel-toreca" />
                <Series name="Arcara" valueField="arcara" />
                <Series name="ぽいマニっ" valueField="poimani" />
                <Series name="トレビル" valueField="torebuil" />
                <Series name="オントレ" valueField="on-tore" />
                <Series name="オリパブラック" valueField="oripa-black" />
                <Series name="YKオリパ" valueField="yk-oripa" /> */}
            </Chart>

        </>
    )
};
