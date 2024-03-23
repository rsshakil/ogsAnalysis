
import DataGrid, {
    FilterRow,
    Paging,
    Pager,
    Sorting,
    Scrolling,
    LoadPanel,
    Editing,
    RemoteOperations,
} from 'devextreme-react/data-grid';
import Loader from "../atoms/Loading/TherapistLoader";
import { useEffect, useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { ITEMS_PER_PAGE } from '../../utils/commonConst';


export default function EditableTable({
    dataGridRef,
    isLoading,
    children,
    dataSource = [],
    sort = true,
    rowFilter = true,
    paging = true,
    allowDeleting = true,
    ...rest
}) {


    return (
        <>
            {isLoading && <Loader />}

            <DataGrid
                id="gridContainer"
                className="editable-table"
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

                {...rest}
            >
                <RemoteOperations filtering={rowFilter} paging={paging} sorting={sort} />

                <Editing
                    mode="batch"
                    allowUpdating={true}
                    allowAdding={true}
                    allowDeleting={allowDeleting}
                    useIcons={true}
                //selectTextOnEditStart={this.state.selectTextOnEditStart}
                //startEditAction={this.state.startEditAction}
                />

                {/* Diable default devextreme loader */}
                <LoadPanel enabled={false} />
                <Scrolling columnRenderingMode="virtual" />
                {/* Conditional features */}
                <Sorting mode="multiple" />
                <FilterRow visible={rowFilter} applyFilter={rowFilter} />
                <Paging enabled={paging} defaultPageSize={ITEMS_PER_PAGE} />
                <Pager
                    visible={paging}
                    allowedPageSizes={[]}
                    displayMode={'full'}
                    showPageSizeSelector={false}
                    showInfo={false}
                    showNavigationButtons={true}
                />
                {children}
            </DataGrid>
        </>
    )
}