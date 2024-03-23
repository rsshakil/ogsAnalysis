import React, { useRef, useState, useEffect, Suspense } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

import {useIntl,FormattedDate} from 'react-intl'
import { testUserData } from "../../../../store/testUserData";
   


export const TestUserContent = () => {
    const intl = useIntl()
    const [testUserList, setTestUser] = useState([]);
    useEffect(()=>{
        setTestUser(JSON.parse(localStorage.getItem("testUserDataList")));
        console.log("testUserList",testUserList);
    },[])
    console.log("testUserList",typeof testUserList)
    return (
        <div className="w-full">
            <div className="text-gray-400 text-base flex flex-row">
                <ul class="list-disc">
                    {testUserList && testUserList.length>0 && testUserList.map(row=><li>{row}</li>)}
               </ul>
            </div>
        </div>
    )

}