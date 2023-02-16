import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { AgGridModule } from 'ag-grid-angular';

import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgGridBasicComponent } from './ag-grid-basic/ag-grid-basic.component';
import { AgStatusBarComponent } from './ag-status-bar/ag-status-bar.component';




@NgModule({
  declarations: [
    AppComponent,
    AgGridBasicComponent,
    AgStatusBarComponent
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
