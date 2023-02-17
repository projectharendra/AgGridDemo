import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  ColDef,GetDataPath,GetRowIdFunc,GetRowIdParams,GridReadyEvent,ISetFilterParams,
  KeyCreatorParams,ValueFormatterParams,} from 'ag-grid-community';
import 'ag-grid-enterprise';

@Component({
  selector: 'app-ag-tree-list',
  templateUrl: './ag-tree-list.component.html',
  styleUrls: ['./ag-tree-list.component.scss']
})
export class AgTreeListComponent {
  public columnDefs: ColDef[] = [
    { field: 'employmentType' },
    {
      field: 'startDate',
      valueFormatter: (params: ValueFormatterParams) =>
        params.value ? params.value.toLocaleDateString() : params.value,
      filterParams: {
        treeList: true,
        valueFormatter: (params: ValueFormatterParams) =>
          params.value ? params.value.toLocaleDateString() : '(Blanks)',
      } as ISetFilterParams<any, Date>,
    },
  ];
  public defaultColDef: ColDef = {
    flex: 1,
    minWidth: 200,
    resizable: true,
    filter: true,
    floatingFilter: true,
  };
  public autoGroupColumnDef: ColDef = {
    headerName: 'Employee',
    field: 'employeeName',
    cellRendererParams: {
      suppressCount: true,
    },
    filter: 'agSetColumnFilter',
    filterParams: {
      treeList: true,
      keyCreator: (params: KeyCreatorParams) =>
        params.value ? params.value.join('#') : null,
    } as ISetFilterParams<any, string[]>,
    minWidth: 280,
  };
  public groupDefaultExpanded = -1;
  public getDataPath: GetDataPath = (data: any) => data.dataPath;
  public getRowId: GetRowIdFunc = (params: GetRowIdParams<any>) =>
    params.data.employeeId;
  public rowData!: any[];

  constructor(private http: HttpClient) {}

  onGridReady(params: GridReadyEvent) {
    this.http
      .get<any[]>('https://www.ag-grid.com/example-assets/tree-data.json')
      .subscribe((data) => params.api!.setRowData(processData(data)));
  }
}

function processData(data: any[]) {
  const flattenedData: any[] = [];
  const flattenRowRecursive = (row: any, parentPath: string[]) => {
    const dateParts = row.startDate.split('/');
    const startDate = new Date(
      parseInt(dateParts[2]),
      dateParts[1] - 1,
      dateParts[0]
    );
    const dataPath = [...parentPath, row.employeeName];
    flattenedData.push({ ...row, dataPath, startDate });
    if (row.underlings) {
      row.underlings.forEach((underling: any) =>
        flattenRowRecursive(underling, dataPath)
      );
    }
  };
  data.forEach((row) => flattenRowRecursive(row, []));
  return flattenedData;
}