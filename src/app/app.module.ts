import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { AgGridModule } from 'ag-grid-angular';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgGridBasicComponent } from './ag-grid-basic/ag-grid-basic.component';
import { AgStatusBarComponent } from './ag-status-bar/ag-status-bar.component';
import { AgSideBarComponent } from './ag-side-bar/ag-side-bar.component';
import { AgContextMenuComponent } from './ag-context-menu/ag-context-menu.component';
import { AgColumnMenuComponent } from './ag-column-menu/ag-column-menu.component';
import { AgExcelExportComponent } from './ag-excel-export/ag-excel-export.component';
import { AgInfiniteScrollingComponent } from './ag-infinite-scrolling/ag-infinite-scrolling.component';
import { AgTreeListComponent } from './ag-tree-list/ag-tree-list.component';
import { AgTreeList1Component } from './ag-tree-list1/ag-tree-list1.component';




@NgModule({
  declarations: [
    AppComponent,
    AgGridBasicComponent,
    AgStatusBarComponent,
    AgSideBarComponent,
    AgContextMenuComponent,
    AgColumnMenuComponent,
    AgExcelExportComponent,
    AgInfiniteScrollingComponent,
    AgTreeListComponent,
    AgTreeList1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgGridModule,
    NgbModule,
    FormsModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
