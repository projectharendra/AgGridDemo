import { Component, ViewChild } from '@angular/core';
import { ColDef, GridOptions } from 'ag-grid-community';
//import { EditorComponent } from './editor/editor.component';
@Component({
  selector: 'app-ag-tree-list1',
  templateUrl: './ag-tree-list1.component.html',
  styleUrls: ['./ag-tree-list1.component.scss']
})
export class AgTreeList1Component {
 /*  public columnDefs = [
    
    { headerName: "Group", field: 'group', cellRenderer: 'agGroupCellRenderer' },

    { headerName: "Year", field: "year" },
    { headerName: "Country", field: "country" },
    {
        headerName: "Athlete",
        field: "athlete",
        headerCheckboxSelection: true,
        headerCheckboxSelectionFilteredOnly: true,
        checkboxSelection: true
      }
  ];

  public rowData = [
    {
      group: 'Group A',
      participants: [
        { group: 'A.1', athlete: 'Michael Phelps', year: '2008', country: 'United States',
        participants: [
        { group: 'A.1', athlete: 'Michael Phelps', year: '2008', country: 'United States' },
        { group: 'A.2', athlete: 'Michael Phelps', year: '2008', country: 'United States' },
        { group: 'A.3', athlete: 'Michael Phelps', year: '2008', country: 'United States' }
      ] },
        { group: 'A.2', athlete: 'Michael Phelps', year: '2008', country: 'United States' },
        { group: 'A.3', athlete: 'Michael Phelps', year: '2008', country: 'United States' }
      ]
    },
    {
      group: 'Group B', athlete: 'Mix of Names', year: '2000..2012', country: 'Group Country',
      participants: [
        { group: 'B.1', athlete: 'Natalie Coughlin', year: '2008', country: 'United States' },
        { group: 'B.2', athlete: 'Missy Franklin ', year: '2012', country: 'United States' },
        { group: 'B.3', athlete: 'Ole Einar Qjorndalen', year: '2002', country: 'Norway' },
        { group: 'B.4', athlete: 'Marit Bjorgen', year: '2010', country: 'Norway' },
        { group: 'B.5', athlete: 'Ian Thorpe', year: '2000', country: 'Australia' }
      ]
    },
    {
      group: 'Group C',
      participants: [
        { group: 'C.1', athlete: 'Janica Kostelic', year: '2002', country: 'Crotia' },
        { group: 'C.2', athlete: 'An Hyeon-Su', year: '2006', country: 'South Korea' }
      ]
    }
  ];

  public gridOptions = {
    rowSelection: 'multiple',
    groupSelectsChildren: true,
    groupSelectsFiltered: true,
    suppressAggFuncInHeader: true,
    suppressRowClickSelection: true,
     autoGroupColumnDef: {headerName: "Athlete", field: "athlete", width: 200,
        cellRenderer:'agGroupCellRenderer',
        cellRendererParams: {
            checkbox: true
        }
    },
    getNodeChildDetails: function getNodeChildDetails(rowItem:any) {
      if (rowItem.participants) {
        return {
          group: true,
          // open C be default
          expanded: rowItem.group === 'Group C',
          // provide ag-Grid with the children of this group
          children: rowItem.participants,
          // the key is used by the default group cellRenderer
          key: rowItem.group
        };
      } else {
        return null;
      }
    },
    onGridReady: function (params:any) {
    }
  };

  constructor() {

  } */
}
