import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ColDef, GridApi, GridReadyEvent, SideBarDef } from 'ag-grid-community';
// import 'ag-grid-community/styles/ag-grid.css';
// import 'ag-grid-community/styles/ag-theme-alpine.css';
import 'ag-grid-enterprise';
//import 'src/styles.css';
import { IOlympicData } from '../models/olympicdata';


@Component({
  selector: 'app-ag-side-bar',
  templateUrl: './ag-side-bar.component.html',
  styleUrls: ['./ag-side-bar.component.scss']
})
export class AgSideBarComponent {
  private gridApi!: GridApi<IOlympicData>;

  public columnDefs: ColDef[] = [
    { field: 'athlete', filter: 'agTextColumnFilter', minWidth: 200 },
    { field: 'age' },
    { field: 'country', minWidth: 200 },
    { field: 'year' },
    { field: 'date', minWidth: 160 },
    { field: 'gold' },
    { field: 'silver' },
    { field: 'bronze' },
    { field: 'total' },
  ];
  public defaultColDef: ColDef = {
    flex: 1,
    minWidth: 100,
    // allow every column to be aggregated
    enableValue: true,
    // allow every column to be grouped
    enableRowGroup: true,
    // allow every column to be pivoted
    enablePivot: true,
    sortable: true,
    filter: true,
  };
  public autoGroupColumnDef: ColDef = {
    minWidth: 200,
  };
  public sideBar: SideBarDef | string | string[] | boolean | null = {
    toolPanels: [
      {
        id: 'columns',
        labelDefault: 'Columns',
        labelKey: 'columns',
        iconKey: 'columns',
        toolPanel: 'agColumnsToolPanel',
      },
      {
        id: 'filters',
        labelDefault: 'Filters',
        labelKey: 'filters',
        iconKey: 'filter',
        toolPanel: 'agFiltersToolPanel',
      },
    ],
    defaultToolPanel: 'filters',
    hiddenByDefault: true,
  };
  public rowData!: IOlympicData[];

  constructor(private http: HttpClient) {}

  setSideBarVisible(value: boolean) {
    this.gridApi.setSideBarVisible(value);
  }

  isSideBarVisible() {
    alert(this.gridApi.isSideBarVisible());
  }

  openToolPanel(key: string) {
    this.gridApi.openToolPanel(key);
  }

  closeToolPanel() {
    this.gridApi.closeToolPanel();
  }

  getOpenedToolPanel() {
    alert(this.gridApi.getOpenedToolPanel());
  }

  setSideBar(def: SideBarDef | string | string[] | boolean) {
    this.gridApi.setSideBar(def);
  }

  getSideBar() {
    var sideBar = this.gridApi.getSideBar();
    alert(JSON.stringify(sideBar));
    console.log(sideBar);
  }

  setSideBarPosition(position: 'left' | 'right') {
    this.gridApi.setSideBarPosition(position);
  }

  onGridReady(params: GridReadyEvent<IOlympicData>) {
    this.gridApi = params.api;

    this.http
      .get<IOlympicData[]>(
        'https://www.ag-grid.com/example-assets/olympic-winners.json'
      )
      .subscribe((data) => (this.rowData = data));
  }
}