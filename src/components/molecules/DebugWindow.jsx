import React, { useRef, useState, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { debugState } from "../../../src/store/debugState";
import { displayState } from "../../store/displayState";
import { elmState } from "../../store/elmState";
import { accessState } from "../../store/accessState";
import { modalState } from "../../store/modalState";
import { pageLoadiongState } from "../../store/pageLoadiongState";
import { tableStructure } from "../../store/tableStructure";
import { tableBodyData } from "../../store/tableBodyData";



export const DebugWindow = (props) => {
    const [tableStructureValue, setTableStructur] = useRecoilState(tableStructure);
    const [tableBodyDataValue, setTableBodyData] = useRecoilState(tableBodyData);
    const accessstate = useRecoilValue(accessState);
    const displaystate = useRecoilValue(displayState);
    const debugstate = useRecoilValue(debugState);
    const elmstate = useRecoilValue(elmState);
    const modalstate = useRecoilValue(modalState);
    const pageLoadiongstate = useRecoilValue(pageLoadiongState);

    ////////////////////////////////
    const modalStates = JSON.stringify(modalstate,null, '\t');

    const access = JSON.stringify(accessstate,null, '\t');
    const display = JSON.stringify(displaystate,null, '\t');
    const debugStates = JSON.stringify(debugstate,null, '\t');
    const elmstates = JSON.stringify(elmstate,null, '\t');
    const pageLoadiongstates = JSON.stringify(pageLoadiongstate,null, '\t');


    const [clicked, setClicked] = useState(100);
    const menus = [
        { title: "access", content: access },
        { title: "display", content: display },
        { title: "modal", content: modalStates },
        { title: "pageLoadiongstates", content: pageLoadiongstates },
        { title: "elmstates", content: elmstates },
        { title: "debugStates", content: debugStates },
    ];
    const handleClick = (index) => {
        if (clicked === index) {
            return setClicked(100);
        }
        setClicked(index);
    };
    const contentEl = useRef();

    // console.log(login);
    return (
        
    <div className="overflow-visible break-all">
        <h3 ><span>-RecoilStoreWindow-</span></h3>
        <ul className="space-y-2">
            {menus.map((menu, index) => (
                <li key={index} >
                    <button
                        className="sticky top-0 bg-white text-black border border-slate-600 hover:bg-slate-200"
                        type="button"
                        onClick={() => handleClick(index)}
                        style={
                            clicked === index
                            ? {
                                width: "100%",
                                textAlign: "left",
                                padding: "0.5rem",
                                position: "sticky",
                                // top: elmStateValue.headerHeight + "px",
                                top: 0
                            }
                            : {
                                width: "100%",
                                textAlign: "left",
                                padding: "0.5rem",
                            }
                        }
                    >
                        {"Recoil->["+menu.title+"]"}
                    </button>
                    <div
                        className="h-max overflow-visible break-all"
                        ref={contentEl}
                        style={
                            clicked === index
                            ? {
                                // height: contentEl.current.scrollHeight,
                                backgroundColor: "#e7d0a9",
                            }
                            : { height: "0px", overflow: "hidden" }
                        }
                    >
                        <p className="whitespace-pre-wrap bg-black text-emerald-300 border-gray-300  block  mt-2 px-3 py-1.5 text-base font-normal bg-clip-padding border border-solid rounded" >
                        {menu.content}
                        </p>
                    </div>
                </li>
            ))}
        </ul>
    </div>
    );
};
