import React from 'react';
import { AgGridReact } from 'ag-grid-react'; // the AG Grid React Component
import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS
import 'ag-grid-community/styles/ag-theme-alpine.css';
import RemoveButtonRenderer from './RemoveButtonRenderer';

export function UsersList({ usersData, deleteUser }) {

    const columns = [{headerName: '#', width: '50px', valueGetter: "node.rowIndex + 1"},
    { field: 'branchId', headerName: 'Branch ID', },
    { field: 'userName', headerName: 'Username', },
    { field: 'name', headerName: 'Name', },
    { field: 'position', headerName: 'Position', },
    {
        field: 'action', headerName: 'Action', 
        cellRenderer: RemoveButtonRenderer, 
        cellRendererParams: {
            removeUser: (p)=> deleteUser(p)
        }
    }];

    return (
        <>
            <div className="ag-theme-alpine" style={{ width: '100%', height: 500 }}>
                <AgGridReact
                    rowData={usersData} // Row Data for Rows
                    columnDefs={columns} // Column Defs for Columns
                />
            </div>
        </>
    )
};