import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SystemCodesComponent } from './system-codes/system-codes.component';
import { SystemValuesComponent } from './system-values/system-values.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'diva-shared-apps/shared.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { CheckboxModule } from 'primeng/checkbox';
import { DatalistService } from './services/datalist.service';
import { ApplicationService } from './services/application.service';
import { SystemcodelabelService } from './services/systemcodelabel.service';
import { SystemcodetypelistService } from './services/systemcodetypelist.service';
import { DepartmentsService } from './services/departments.service';
import { AddsystemcodeService } from './services/addsystemcode.service';
import { ListSystemCodesComponent } from './system-codes/list-system-codes/list-system-codes.component';
import { TableModule } from 'primeng/table';
import { ListSystemValuesComponent } from './system-values/list-system-values/list-system-values.component';
import { AddSystemCodesComponent } from './system-codes/add-system-codes/add-system-codes.component';
import { AddSystemValuesComponent } from './system-values/add-system-values/add-system-values.component';
import { SystemvaluelabelService } from './services/systemvaluelabel.service';
import { SystemvaluetypelistService } from './services/systemvaluetypelist.service';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { GrowlModule } from 'primeng/growl';
import { DeletecodeService } from './services/deletecode.service';
import {UpdatesystemcodeService} from './services/updatesystemcode.service';
import {ToolbarModule} from 'primeng/toolbar';
import {DeleteValuesService} from './services/delete-values.service';
import {AddsystemvaluesService} from './services/addsystemvalues.service';
import { DialogModule } from 'primeng/dialog';
import { NumberonlyDirective } from './interfaces/numberonly.directive';
import {UpdatesystemvalueService} from './services/updatesystemvalue.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    MessagesModule,
    MessageModule,
    AngularFontAwesomeModule,
    TableModule,
    CheckboxModule,
    ConfirmDialogModule,
    GrowlModule,
    ToolbarModule,
    DialogModule,
    ReactiveFormsModule
  ],
  declarations: [SystemCodesComponent,
    SystemValuesComponent,
    ListSystemCodesComponent,
    ListSystemValuesComponent,
    AddSystemCodesComponent,
    AddSystemValuesComponent,
    NumberonlyDirective],
  providers: [ApplicationService,
    DatalistService,
    SystemcodelabelService,
    SystemcodetypelistService,
    SystemvaluelabelService,
    SystemvaluetypelistService,
    ConfirmationService,
    DepartmentsService,
    AddsystemcodeService, DeletecodeService,
    UpdatesystemcodeService,
    DeleteValuesService, AddsystemvaluesService,
    UpdatesystemvalueService]
})
export class MaintenanceModule { }





