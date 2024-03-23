//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//  2023-04-24
//  このコンポーネントでテーブルが呼ばれるたびにAPIから最新のテーブル情報を取得する
//  取得した情報はrecoilに保存してから使用する
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

import React, { useRef, useState, useEffect, Suspense } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { displayState } from "../../store/displayState";
import { tableStructure } from "../../store/tableStructure";
import { TableBody } from "../atoms/TableRow/TableBody";

export const Table = ({ customWrapClass, customImgClass }) => {
    const [displayStateValue, setDisplayState] = useRecoilState(displayState);
    const [tableStructureObject, setTableStructure] = useRecoilState(tableStructure);

    return (
        <>
            <TableBody />
        </>
    )
};
