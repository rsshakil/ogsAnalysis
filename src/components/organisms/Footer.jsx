import React, { useRef, useState, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { UseWindowDimensions } from "../../functions/UseWindowDimensions";
import { accessState } from "../../store/accessState";
import { elmState } from "../../store/elmState";
import { settingsState } from "../../store/settingsState";


export const Footer = () => {
    //設定の読み取り
    const settingsstate = useRecoilValue(settingsState);
    //必要な部分だけ切り取る
    const footerSettings = settingsstate.appSettingQuery.footerSettings;
    //　エレメント状態の読み込み
    const [elmStateValue, setElmState] = useRecoilState(elmState);
    // 画面の幅　最新情報取得
    const { width, height } = UseWindowDimensions();
    //Footerの高さを取得する
    const elm = useRef(null);
    console.log("[Footer]elm=>",elm);
    //Footerの高さを保存する
    useEffect(() => {
        setElmState((prevState) => ({
            ...prevState,
            footerHeight: elm.current.offsetHeight,
            // vh: height,
            // vw: width
        }))
    }, [width,height]);

    // footerClassを並列化
    const footerClasses = [
        // footerSettings.classes.height,
        footerSettings.classes.textColor,
        footerSettings.classes.backgroundColor,
        footerSettings.classes.customClass,
    ].join(' ');
    console.log("[Footer]footerSettings.info",footerSettings.info);


    //corporation name custom class data
    let corporationWrapCustomClass = footerSettings.classes.corporationWrapCustomClass;
    //dynamic stored data fetch for tel & time
    let telTimeWrapCustomClass = footerSettings.classes.telTimeWrapCustomClass;
    //dynamic stored data fetch for copyWrite
    let copyrightWrapCustomClass = footerSettings.classes.copyrightWrapCustomClass;

    return (
        <>
            <footer
                ref={elm}
                className={`flex h-20 flex-row grow-0 z-10 mx-4 items-center overflow-auto`}
            >
                <div className="text-center text-base font-bold text-white">
                    <p>データ件数:987654321件</p>
                </div>
                <div className="grow text-center text-base font-bold text-white">
                    <p>《〈 12345...245 〉》</p>
                </div>
                <div className="text-base font-bold text-white">
                    <p className="text-right">◯◯◯◯管理</p>
                    <p className="text-right">◯管理</p>
                    <p className="text-right">◯◯◯◯◯◯◯◯◯管理</p>
                </div>
            </footer>
        </>
    );
};
