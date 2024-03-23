//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//  残作業
//  チャートのズームが重い
//  
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

import React, { useRef, useState, useEffect, Suspense } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
// import { displayState } from "../../store/displayState";
// import { summaryChartDummyState } from "../../store/summaryChartDummyState";
import { formatDate, parseDate } from "devextreme/localization";
import { detailChartDummyState } from "../../store/detailChartDummyState";
import { summaryChartDummyState } from "../../store/summaryChartDummyState";
import { productListDummyState } from "../../store/productListDummyState";
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
import { iniDateRangeDateBox } from "../../store/iniDateRangeDateBox";
import DetailChartTooltip from "./DetailChartTooltip.js";


export const UsersChartsDetails = ({ chartData, chartStructure, customWrapClass, customImgClass }) => {

//TODO
    // const [detailChartDummyStateValue, setDetailChartDummyState] = useRecoilState(detailChartDummyState);
    // const [detailChartDummyStateValue, setDetailChartDummyState] = useRecoilState(summaryChartDummyState);
    const [productListDummyStateValue, setProductListDummyState] = useRecoilState(productListDummyState);
    const [iniDateRangeDateBoxValue, setIniDateRangeDateBox] = useRecoilState(iniDateRangeDateBox);

    useEffect(() => {
        // setDetailChartDummyState(chartData);
    }, [chartData])

    const getMeta = async (url) =>{
        const img = new Image();
        img.src = url;
        await img.decode();  
        return img
    }

    function customizeTooltip(pointInfo) {
        console.log('pointInfo', pointInfo);
        // const img = await getMeta(hoverProduct?.topImage);
        // console.log("imgsssss>>>>",img.naturalHeight);
        // ホバーしたproductの検索
        // const hoverProduct = productListDummyStateValue && productListDummyStateValue.length > 0 && productListDummyStateValue.find((product) => product.id === pointInfo.point.series.tag)
        return {
            html:
                `<div class="w-32 flex flex-col">
                    <div class="">
                        <span class="text-sm">ユーザーID: ${pointInfo.seriesName}</span>
                    </div>
                    <div class="flex flex-row">
                        <span class="text-sm">事後ポイント: ${new Intl.NumberFormat('ja-JP').format(pointInfo?.value)}</span>
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
                // palette="Violet"
                id="chartContainer"
                dataSource={chartData}
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
                    argumentField="orderNo"
                    // axis="price"
                    // format="yyyy年MM月dd日"
                    // format="¥ #,##0.##"
                    width={1}
                    // selectionMode="allArgumentPoints"
                >
                    <Point visible={false}
                        // size={4} 
                    />
                </CommonSeriesSettings>
                {/* <Margin bottom={200} /> */}
                <Legend
                    verticalAlignment="bottom"
                    horizontalAlignment="center"
                    itemTextPosition="right"
                    position="outside"
                    orientation="horizontal"
                    markerSize={8}
                    columnItemSpacing={4}
                    // margin={4}
                    paddingLeftRight={0}
                    rowItemSpacing={1}
                    visible={false}
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
                
                <ZoomAndPan
                    // valueAxis="none"
                    argumentAxis="both"
                    // dragToZoom={false}
                    // allowMouseWheel={true}
                />
                <ScrollBar
                    visible={true}
                />
                <Tooltip
                    enabled={true}
                    shared={false}
                    format="¥ #,##0.##"
                    customizeTooltip={(pointInfo)=>customizeTooltip(pointInfo)}
                />
                
                {chartStructure.map((item) => (
          <Series
            key={item.value}
            valueField={item.value}
            name={item.name}
          />
        ))}
            </Chart>
        </>
    )
};
