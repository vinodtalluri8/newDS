import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SystemCodesComponent } from './maintenance/system-codes/system-codes.component';
import { SystemValuesComponent } from './maintenance/system-values/system-values.component';
import { MaintenanceModule } from './maintenance/maintenance.module';
import { ListSystemCodesComponent } from './maintenance/system-codes/list-system-codes/list-system-codes.component';
import { AddSystemCodesComponent } from './maintenance/system-codes/add-system-codes/add-system-codes.component';
import { ListSystemValuesComponent } from './maintenance/system-values/list-system-values/list-system-values.component';
import { AddSystemValuesComponent } from './maintenance/system-values/add-system-values/add-system-values.component';

const routes: Routes = [
  { path: '', redirectTo: '/systemcodes', pathMatch: 'full' },
  { path: 'systemcodes', component: SystemCodesComponent },
  { path: 'systemvalues', component: SystemValuesComponent },
  { path: 'systemcodes/listsystemcodes/:code', component: ListSystemCodesComponent },
  { path: 'systemcodes/listsystemcodes', component: ListSystemCodesComponent },
  { path: 'systemcodes/addsystemcodes/:passedcode/:showdepartment', component: AddSystemCodesComponent },
  { path: 'systemcodes/addsystemcodes' , component: AddSystemCodesComponent},
  { path: 'systemcodes/addsystemcodes/:record/:selectedval/:update/:showdepartment', component:  AddSystemCodesComponent },
  { path: 'systemvalues/listsystemvalues/:code', component: ListSystemValuesComponent },
  { path: 'systemvalues/addsystemvalues/:code', component: AddSystemValuesComponent }
];



@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes),
    MaintenanceModule],
  exports: [RouterModule, MaintenanceModule],
  declarations: []
})
export class AppRoutingModule { }
