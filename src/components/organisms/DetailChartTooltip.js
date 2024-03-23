import React, { useRef, useState, useEffect } from 'react';
import { formatDate, parseDate } from "devextreme/localization";
    

export default function DetailChartTooltip(pointInfo,hoverProduct={}) {
    // const [height, setHeight] = useState(0);
    // const detailtooltipHeight = useRef(null);
    // useEffect(()=>{
    //     setHeight(detailtooltipHeight.current.offsetHeight)
    // },[]);
    // console.log("height div height",height);
  return (
    <div class="w-64 min-h-screen">
            <div class=" min-h-screen">
                <img class="w-full" src={hoverProduct?.topImage} />
            </div>
            <div class="flex flex-col min-h-screen">
                <span class="font-bold caption">${pointInfo.seriesName}</span>
                <span class="caption">{hoverProduct?.description}</span>
            </div>
            <div class="flex flex-row  min-h-screen">
                <span class="caption">{new Intl.NumberFormat('ja-JP').format(hoverProduct?.salesPoints)}pt</span>
                <span class="caption">×</span>
                <span class="caption">{new Intl.NumberFormat('ja-JP').format(hoverProduct?.totalNumberOfItems)}回</span>
                <span class="caption">=</span>
                <span class="caption">{new Intl.NumberFormat('ja-JP').format(hoverProduct?.totalPoints)}pt</span>
            </div>
            <div class="text-sky-400 mt-2">${formatDate(pointInfo.argument, "yyyy年MM月dd日 HH:MM")}：${pointInfo.valueText}</div>
        </div>
  );
}
