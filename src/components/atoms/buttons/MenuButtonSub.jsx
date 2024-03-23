/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useState, useEffect, Suspense } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import CircleOff from "../../atoms/img/CircleOff.svg";
import CircleOn from "../../atoms/img/CircleOn.svg";
import { useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { displayState } from "../../../store/displayState";
import { modalState } from "../../../store/modalState";

export const MenuButtonSub = (props) => {
    const { onClick, children, pathname, icon, type,isDisabled=false } = props;
    const [displayStateValue, setDisplayState] = useRecoilState(displayState);

    ///////////////間宮(仮)/////////////////////
    const [modalStateValue, modalStateState] = useRecoilState(modalState);
    const location = useLocation();
    const navigate = useNavigate();
    //現在のパスの取得
    let currentPathname = displayStateValue.pagePath;
    console.log("currentPathname", currentPathname);
    console.log("pathname", pathname);
    //選択中のアイコンをCircleOnにする
    //*や/の場合一致しないがpaymentRequestをCircleOnにする処理が未実装
    let CircleIcon = CircleOn;
    if (currentPathname === pathname) {
        CircleIcon = CircleOn;
    } else {
        CircleIcon = CircleOff;
    }

    return (
        <button onClick={onClick} disabled={isDisabled} className={`
            font-bold
            relative
            rounded-xl
            w-36
            sm:w-36
            md:w-36
            border-0
            flex
            items-center
            justify-center
            text-base
            text-gray-400
            py-2
            bg-[#333333]
            hover:bg-[#464646]
            focus:bg-[#464646]
            active:bg-[#464646]

            focus:outline-none
            active:outline-none
            active:shadow-inner
            disabled:text-blue-300
            disabled:shadow-inner
            `}>
            {icon &&
                <img className="
                    left-4
                    h-4
                    w-4
                    absolute
                    " src={`${[icon]}`} />
            }
            {children}
        </button>
    );
};
