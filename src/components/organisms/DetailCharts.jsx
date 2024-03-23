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


export const DetailCharts = ({ chartData, tableData, customWrapClass, customImgClass }) => {
    const [detailChartDummyStateValue, setDetailChartDummyState] = useRecoilState(summaryChartDummyState);
    const [productListDummyStateValue, setProductListDummyState] = useRecoilState(productListDummyState);
    const [iniDateRangeDateBoxValue, setIniDateRangeDateBox] = useRecoilState(iniDateRangeDateBox);

    useEffect(() => {
        console.log("chartData", chartData);
        setDetailChartDummyState(chartData);
    }, [chartData])


    useEffect(() => {
        console.log("tableData", tableData);
        setProductListDummyState(tableData);
    }, [tableData])

    const visualRangeSettings = {
        startValue: new Date(iniDateRangeDateBoxValue[0]).setHours(0, 0, 0, 0),
        endValue: new Date(iniDateRangeDateBoxValue[1]).setHours(23, 59, 59, 999)
    }

    const getMeta = async (url) =>{
        const img = new Image();
        img.src = url;
        await img.decode();  
        return img
    }

    function customizeTooltip(pointInfo,hoverProduct) {
        console.log('pointInfo', pointInfo);
        // const img = await getMeta(hoverProduct?.topImage);
        // console.log("imgsssss>>>>",img.naturalHeight);
        // ホバーしたproductの検索
        // const hoverProduct = productListDummyStateValue && productListDummyStateValue.length > 0 && productListDummyStateValue.find((product) => product.id === pointInfo.point.series.tag)
        console.log('hoverProduct', hoverProduct)
        return {
            html:
                `<div class="w-96 flex flex-col">
                    <div class="" style="
                    background-image: url(${hoverProduct?.topImage});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  height:400px;
  position: relative;
                    ">
                    </div>
                    <div class="">
                        <div class="font-bold caption">${pointInfo.seriesName}</div>
                        ${hoverProduct?.description ? `<span class="caption">${hoverProduct?.description}</span>` : ""}
                    </div>
                    <div className="text-gray-400 text-base flex flex-row mt-4">
                        ${hoverProduct?.startDateTime?`<p>${formatDate(new Date(hoverProduct?.startDateTime), "yyyy年MM月dd日 HH:mm")}${hoverProduct?.endDateTime?`&nbsp;〜&nbsp;`+formatDate(new Date(hoverProduct?.endDateTime), "yyyy年MM月dd日 HH:mm"):``} </p>`:``}
                    </div>
                    <br />
                    <div class="flex flex-row">
                        <span class="caption">${new Intl.NumberFormat('ja-JP').format(hoverProduct?.gachaSinglePoint)}pt</span>
                        <span class="caption">×</span>
                        <span class="caption">${new Intl.NumberFormat('ja-JP').format(hoverProduct?.gachaTotalCount)}回</span>
                        <span class="caption">=</span>
                        <span class="caption">${new Intl.NumberFormat('ja-JP').format(hoverProduct?.totalPoints)}pt</span>
                    </div>
                    <div class="text-sky-400  mt-2">${formatDate(pointInfo?.argument, "yyyy年MM月dd日 HH:mm")}：${pointInfo?.valueText}</div>
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
                dataSource={detailChartDummyStateValue}
                height="48%"
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
                    // format="yyyy年MM月dd日"
                    // format="¥ #,##0.##"
                    width={1}
                    selectionMode="allArgumentPoints"
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
                    // format="yyyy年MM月dd日"
                    // defaultVisualRange={`{startValue: new Date('2023/10/28 0:00'), endValue: new Date('2023/10/30 0:00')}`}
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
                    customizeTooltip={(pointInfo)=>customizeTooltip(pointInfo, productListDummyStateValue && productListDummyStateValue.length>0 && productListDummyStateValue.find((product) => product.id === pointInfo.point.series.tag))}
                    // contentRender={(pointInfo)=>DetailChartTooltip(pointInfo, productListDummyStateValue && productListDummyStateValue.length>0 && productListDummyStateValue.find((product) => product.id === pointInfo.point.series.tag))}
                />
                {/* {productListDummyStateValue && productListDummyStateValue.length > 0 && productListDummyStateValue.map((series, i) => (
                    <Series
                        key={series.id + `${i}`}
                        name={series.name ? series.name : `オリパ ${i + 1}`}
                        // name={`oripa ${i+1}`} 
                        valueField={series.id}
                        // series.idをツールチップに渡すためにidを使う
                        tag={series.id}
                    >
                    </Series>
                ))} */}

                {/* あまり増減しないのでベタに書く */}
                {/* <Series name="エクストレカ" valueField="626" />
                <Series name="DOPA" valueField="630" />
                <Series name="日本トレカ" valueField="japan-toreca" />
                <Series name="Clove" valueField="clove" /> */}

                {productListDummyStateValue && productListDummyStateValue.length > 0 && productListDummyStateValue.map((series, i) => (
                    <Series
                        key={series.id + `${i}`}
                        name={series.name ? series.name : `オリパ ${i + 1}`}
                        // name={`oripa ${i+1}`} 
                        valueField={series.id}
                        // series.idをツールチップに渡すためにidを使う
                        tag={series.id}
                    >
                    </Series>
                ))}
            </Chart>
        </>
    )
};
