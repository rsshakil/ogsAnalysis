
import DataGrid, {
    FilterRow,
    Paging,
    Pager,
    Sorting,
    Scrolling,
    LoadPanel,
    Editing,
    RemoteOperations, StateStoring,
} from 'devextreme-react/data-grid';
import Loader from "../atoms/Loading/TherapistLoader";
import { useEffect, useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { ITEMS_PER_PAGE } from '../../utils/commonConst';
import {useLocation} from "react-router-dom";


export default function Table({
    className = '',
    dataGridRef,
    isLoading,
    children,
    dataSource = [],
    sort = true,
    rowFilter = true,
    paging = true,
    stateStoring = false,
    stateStoringPath = null,
    itemsPerPage = ITEMS_PER_PAGE,
    ...rest
}) {

    const location = useLocation();
    const currentPath = stateStoringPath ?? location.pathname;

    useEffect(() => {
        if (stateStoringPath) {
            const state = JSON.parse(localStorage.getItem(stateStoringPath));
            if (state) {
                state.pageSize = location.pathname === '/users' ? 1000 : location.pathname === '/histories'?500:300;
            }
            localStorage.setItem(stateStoringPath, JSON.stringify(state));
        }
        dataGridRef?.current.instance.clearFilter();
        dataGridRef?.current.instance.clearSorting();
    },[dataSource])

    // Custom function to format the pager info text
    const formatPagerInfoText = (pageIndex, pageCount, itemCount) => {
        return `データ件数 : ${itemCount >= 0 ? itemCount : 0}件`;
    };

    return (
        <>
            {isLoading && <Loader />}

            <DataGrid
                id="gridContainer"
                className={className}
                ref={dataGridRef}
                noDataText=""
                dataSource={dataSource}
                repaintChangesOnly={true}
                columnAutoWidth={true}
                height="50%"
                rowAlternationEnabled={true}
                hoverStateEnabled={true}
                showBorders={false}
                showRowLines={false}
                columnResizingMode="widget"

                {...rest}
            >
                <RemoteOperations filtering={rowFilter} paging={paging} sorting={sort} />

                {/* Diable default devextreme loader */}
                <LoadPanel enabled={false} />
                <Scrolling columnRenderingMode={'standard'} />
                {/* Conditional features */}
                <Sorting mode="multiple" />
                <FilterRow visible={rowFilter} applyFilter={rowFilter} />
                <Paging enabled={paging} defaultPageSize={itemsPerPage} />
                <Pager
                    visible={paging}
                    allowedPageSizes={[]}
                    displayMode={'full'}
                    showPageSizeSelector={false}
                    showInfo={true}
                    infoText={formatPagerInfoText}
                    showNavigationButtons={true}
                />
                <StateStoring enabled={stateStoring} type="localStorage" storageKey={currentPath} />
                {children}
            </DataGrid>
        </>
    )
}