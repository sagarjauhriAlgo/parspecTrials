import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.scss'],
})
export class Step2Component {
  gridApi: any;
  gridColumnApi: any;
  rowDragEntireRow = true;
  columnDefs: any;
  defaultColDef: any;
  groupDisplayType: any;
  rowData: any;
  rowSelection:any;

  constructor(private http: HttpClient) {
    this.columnDefs = [  // column specific definitions
      {
        field: 'athlete',
        checkboxSelection: true,
        headerCheckboxSelection: true,
      //  rowDrag: true,
      //  rowGroup: true,
        
      },
      { field: 'country' },
      { field: 'year' },
      { field: 'date' },
      { field: 'sport' },
      { field: 'gold' },
      { field: 'silver' },
      { field: 'bronze' },
    ];
    this.defaultColDef = {  // default column def are applied to all columns of table
      width: 170,
      sortable: true,
      filter: true,
      resizable: true,
      editable: true,
   
      //sort: 'asc',
    };
    this.rowSelection = 'multiple';
    this.rowDragEntireRow = true;
  }



  onGridReady(params: any) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    this.http
      .get('https://www.ag-grid.com/example-assets/olympic-winners.json')
      .subscribe((data) => params.api.setRowData(data));
  }
}
