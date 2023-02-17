import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { AgGridModule } from 'ag-grid-angular';

import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgGridBasicComponent } from './ag-grid-basic/ag-grid-basic.component';
import { AgStatusBarComponent } from './ag-status-bar/ag-status-bar.component';
import { AgSideBarComponent } from './ag-side-bar/ag-side-bar.component';
import { AgContextMenuComponent } from './ag-context-menu/ag-context-menu.component';
import { AgColumnMenuComponent } from './ag-column-menu/ag-column-menu.component';
import { AgExcelExportComponent } from './ag-excel-export/ag-excel-export.component';




@NgModule({
  declarations: [
    AppComponent,
    AgGridBasicComponent,
    AgStatusBarComponent,
    AgSideBarComponent,
    AgContextMenuComponent,
    AgColumnMenuComponent,
    AgExcelExportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgGridModule,
    NgbModule,
    
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
