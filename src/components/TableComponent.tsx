import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import './TableComponent.css';


interface IProps {
    rows: []
    columns: []
}
const TableComponent: React.FC<IProps> = ({rows, columns}): any => {

      return (
        <div className='tablecomponent'>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
          />
        </div>
      );
    
}

export default TableComponent;