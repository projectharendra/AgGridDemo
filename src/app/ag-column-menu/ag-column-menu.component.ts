import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ColDef, ColGroupDef, GridReadyEvent } from 'ag-grid-community';
import 'ag-grid-enterprise';
import { IOlympicData } from '../models/olympicdata';

@Component({
  selector: 'app-ag-column-menu',
  templateUrl: './ag-column-menu.component.html',
  styleUrls: ['./ag-column-menu.component.scss']
})
export class AgColumnMenuComponent {
  public columnDefs: (ColDef | ColGroupDef)[] = [
    {
      groupId: 'athleteGroupId',
      headerName: 'Athlete',
      children: [
        {
          headerName: 'Name',
          field: 'athlete',
          minWidth: 150,
          columnsMenuParams: {
            columnLayout: [
              {
                headerName: 'Group 1',
                children: [
                  // custom column order with columns "gold", "silver", "bronze" omitted
                  { field: 'sport' },
                  { field: 'athlete' },
                  { field: 'age' },
                ],
              },
            ],
          },
        },
        {
          field: 'age',
          minWidth: 120,
        },
        {
          field: 'sport',
          minWidth: 150,
          columnsMenuParams: {
            // contracts all column groups
            contractColumnSelection: true,
          },
        },
      ],
    },
    {
      groupId: 'medalsGroupId',
      headerName: 'Medals',
      children: [{ field: 'gold' }, { field: 'silver' }, { field: 'bronze' }],
    },
  ];
  public defaultColDef: ColDef = {
    flex: 1,
    resizable: true,
    menuTabs: ['columnsMenuTab'],
  };
  public rowData!: IOlympicData[];

  constructor(private http: HttpClient) {}

  onGridReady(params: GridReadyEvent<IOlympicData>) {
    this.http
      .get<IOlympicData[]>(
        'https://www.ag-grid.com/example-assets/olympic-winners.json'
      )
      .subscribe((data) => (this.rowData = data));
  }
}