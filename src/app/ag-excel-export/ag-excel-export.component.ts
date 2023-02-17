import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ColDef, GridApi, GridReadyEvent } from 'ag-grid-community';
import 'ag-grid-enterprise';
import { IOlympicData } from '../models/olympicdata';

@Component({
  selector: 'app-ag-excel-export',
  templateUrl: './ag-excel-export.component.html',
  styleUrls: ['./ag-excel-export.component.scss']
})
export class AgExcelExportComponent {

/*----------------------------------------
  npm install --save ag-grid-community
  npm install --save ag-grid-enterprise
  npm install --save ag-grid-angular
  
  --------------------------------------- */
  private gridApi!: GridApi<IOlympicData>;

  public columnDefs: ColDef[] = [
    { field: 'athlete', minWidth: 200 },
    { field: 'age' },
    { field: 'country', minWidth: 200 },
    { field: 'year' },
    { field: 'date', minWidth: 150 },
    { field: 'sport', minWidth: 150 },
    { field: 'gold' },
    { field: 'silver' },
  ];
  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
    resizable: true,
    minWidth: 100,
    flex: 1,
  };
  public rowData!: IOlympicData[];

  constructor(private http: HttpClient) {}

  onBtExport() {
    var sports: Record<string, boolean> = {};
    this.gridApi.forEachNode(function (node) {
      if (!sports[node.data!.sport]) {
        sports[node.data!.sport] = true;
      }
    });
    var spreadsheets = [];
    var sportFilterInstance = this.gridApi.getFilterInstance('sport')!;
    for (var sport in sports) {
      sportFilterInstance.setModel({ values: [sport] });
      this.gridApi.onFilterChanged();
      if (sportFilterInstance.getModel() == null) {
        throw new Error('Example error: Filter not applied');
      }
      const sheet = this.gridApi.getSheetDataForExcel({
        sheetName: sport,
      });
      if (sheet) {
        spreadsheets.push(sheet);
      }
    }
    sportFilterInstance.setModel(null);
    this.gridApi.onFilterChanged();
    this.gridApi.exportMultipleSheetsAsExcel({
      data: spreadsheets,
      fileName: 'ag-grid.xlsx',
    });
    spreadsheets = [];
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