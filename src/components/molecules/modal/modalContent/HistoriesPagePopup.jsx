import React, { useRef, useState, useEffect, Suspense } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

import {useIntl,FormattedDate} from 'react-intl'
import { testUserData } from "../../../../store/testUserData";
import { modalState } from "../../../../store/modalState";


import { locale,formatDate, parseDate } from "devextreme/localization";
import _ from "lodash";


export const HistoriesPagePopup = () => {
    const intl = useIntl()
    const [testUserList, setTestUser] = useState([]);
    const [modalStateValue, setModalState] = useRecoilState(modalState);
    
    return (
        <div className="w-full">
            <div className=""><img src={modalStateValue.data?.topImage} className="w-full"/></div>
            <div className="text-sky-400 text-base font-bold mt-4"><p>{modalStateValue.data.description} </p></div>
            <div className="text-gray-400 text-base flex flex-row mt-4">
                {modalStateValue.data?.startDateTime && <p>{formatDate(new Date(modalStateValue.data?.startDateTime), "yyyy年MM月dd日 HH:mm")} </p>}
                {modalStateValue.data?.endDateTime && (<>
                <p>&nbsp;〜&nbsp;</p>
                <p>{formatDate(new Date(modalStateValue.data?.endDateTime), "yyyy年MM月dd日 HH:mm")} </p>
                </>)}
                
            </div> 
            <div className="text-gray-400 text-base flex flex-row">
                <p>{new Intl.NumberFormat('ja-JP').format(modalStateValue.data?.salesPoints)} pt</p>
                <p>&nbsp;×&nbsp;</p>
                <p>{new Intl.NumberFormat('ja-JP').format(modalStateValue.data?.totalNumberOfItems)} 回</p>
                <p>&nbsp;=&nbsp;</p>
                <p>{new Intl.NumberFormat('ja-JP').format(modalStateValue.data?.totalPoints)} pt</p>
            </div>
            <div className="mt-4"><img src={modalStateValue.data?.contentImage} className="w-full"/></div>


        </div>
    )

}