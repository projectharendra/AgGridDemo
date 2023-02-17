import { Component, HostListener, Input, ViewChild } from '@angular/core';
import { IGetRowsParams } from 'ag-grid-community';
import { of } from 'rxjs';

@Component({
  selector: 'app-ag-infinite-scrolling',
  templateUrl: './ag-infinite-scrolling.component.html',
  styleUrls: ['./ag-infinite-scrolling.component.scss']
})
export class AgInfiniteScrollingComponent {
  public columnDefs: any[];
  public rowData: any[];
  public gridOptions: any;
  public info: string;
  private totalRows = 700;
  private dataLatencyInMilliSeconds = 500;
  public rowHeight = 30;

  constructor() {
    const checkBoxColumDefn = {
      headerName: 'Select',
      field: '',
      flex: 0.1,
      filter: false,
      checkboxSelection: true,
      suppressSizeToFit: false,
      cellStyle: (params:any) => {
        if (params.data?.qtyAlloc > 0) {
          params.node.selected = true;
          params.node.selectable = false;
          return { 'pointer-events': 'none', opacity: '0.7', padding: '' };
        } else {
          params.node.selectable = true;
          return { padding: '' };
        }
      },
    };

    const col1 = { headerName: 'One', field: 'one' };
    const col2 = { headerName: 'Two', field: 'two' };
    const col3 = { headerName: 'Three', field: 'three' };

    this.columnDefs = [checkBoxColumDefn, col1, col2, col3];

    this.gridOptions = {
      enableCellTextSelection: true,
      suppressMovableColumns: true,
      suppressLoadingOverlay: true,
      stopEditingWhenCellsLoseFocus: true, //this seems to be deprecated in 25.3.0 ? https://github.com/ag-grid/ag-grid/issues/4525
      suppressDragLeaveHidesColumns: true,
      suppressHorizontalScroll: true,
      singleClickEdit: true,
      suppressRowClickSelection: true,
      rowSelection: 'single',
      cacheBlockSize: 35,
      maxBlocksInCache: 3,
      rowModelType: 'infinite',
      pagination: false,
      paginationAutoPageSize: false,
    };
  }

  private getRowData(startRow: number, endRow: number) {
    // This is acting as a service call that will return just the
    // data range that you're asking for.
    var rowdata = [];
    for (var i = startRow; i <= endRow; i++) {
      rowdata.push({
        one: 'hello',
        two: 'world',
        three: 'Item ' + i,
        qtyAlloc: i % 2,
      });
    }
    return of(rowdata);
  }

  onGridReady(params: any) {
    console.log('onGridReady');
    params.api.setDomLayout('normal');
    params.api.setDatasource(this.getDataSource());
  }

  private getDataSource() {
    const dataSource = {
      getRows: (params: IGetRowsParams) => {
        this.info =
          'Getting datasource rows, start: ' +
          params.startRow +
          ', end: ' +
          params.endRow;
        if (this.totalRows >= params.endRow) {
          setTimeout(() => {
            console.log('setting timeout');
            this.getRowData(params.startRow, params.endRow).subscribe(
              (data) => {
                console.log(
                  'this.getRowData(); startRow: ' +
                    params.startRow +
                    '; endRow: ' +
                    params.endRow +
                    '; '
                );
                params.successCallback(data, this.totalRows);
              }
            );
          }, this.dataLatencyInMilliSeconds);
        }
      },
    };
    return { ...dataSource };
  }
}
