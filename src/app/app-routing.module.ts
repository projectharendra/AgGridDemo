import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { AgColumnMenuComponent } from './ag-column-menu/ag-column-menu.component';
import { AgContextMenuComponent } from './ag-context-menu/ag-context-menu.component';
import { AgExcelExportComponent } from './ag-excel-export/ag-excel-export.component';
import { AgGridBasicComponent } from './ag-grid-basic/ag-grid-basic.component';
import { AgInfiniteScrollingComponent } from './ag-infinite-scrolling/ag-infinite-scrolling.component';
import { AgSideBarComponent } from './ag-side-bar/ag-side-bar.component';
import { AgStatusBarComponent } from './ag-status-bar/ag-status-bar.component';


const routes: Routes = [
   {path:"",component:AgGridBasicComponent},
   {path:"aggridbasic",component:AgGridBasicComponent},
   {path:"agstatusbar",component:AgStatusBarComponent},
   {path:"agcontextmenu",component:AgContextMenuComponent},
   {path:"agcolumnmenu",component:AgColumnMenuComponent},
   {path:"agexcelexport",component:AgExcelExportComponent},
   {path:"aginfinitescrolling",component:AgInfiniteScrollingComponent},
   {path:"agsidebar",component:AgSideBarComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
