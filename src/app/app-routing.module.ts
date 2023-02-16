import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { AgGridBasicComponent } from './ag-grid-basic/ag-grid-basic.component';
import { AgStatusBarComponent } from './ag-status-bar/ag-status-bar.component';


const routes: Routes = [
   {path:"",component:AgGridBasicComponent},
   {path:"aggridbasic",component:AgGridBasicComponent},
   {path:"agstatusbar",component:AgStatusBarComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
