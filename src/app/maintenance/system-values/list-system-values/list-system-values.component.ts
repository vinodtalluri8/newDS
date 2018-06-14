import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, RouterLink, UrlSegment } from '@angular/router';
import { MenuItem, SelectItem } from 'primeng/api';
import { SystemvaluelabelService } from '../../services/systemvaluelabel.service';
import { SystemvaluetypelistService } from '../../services/systemvaluetypelist.service';
import { Location } from '@angular/common';
import { ConfirmationService } from 'primeng/api';
import { Message } from 'primeng/components/common/api';
import { DeleteValuesService } from '../../services/delete-values.service';
import { AddsystemvaluesService } from '../../services/addsystemvalues.service';
import { AddSystemValuesComponent } from '../add-system-values/add-system-values.component';

@Component({
  selector: 'app-list-system-values',
  templateUrl: './list-system-values.component.html',
  styleUrls: ['./list-system-values.component.css']
})
export class ListSystemValuesComponent implements OnInit {
  itemsPath: MenuItem[];
  code: string;
  displayRows: SelectItem[];
  systemvaluelabelList: any[];
  sytemvaluedatalist: any[];
  filterable: boolean;
  isPaginator: boolean;
  selectedRows: number;
  msgs: Message[] = [];
  exportFileName: string;
  displayDialog: boolean;
  labelList: any[];
  isUpdate: boolean;
  dialogHeader: string;
  updateRecord: any;
  @ViewChild('lsv') grid: any;

  constructor(private router: Router, private route: ActivatedRoute, private systemvaluelabelservice: SystemvaluelabelService,
    private systemvaluetypelistservice: SystemvaluetypelistService, private location: Location,
    private confirmationService: ConfirmationService, private deleteValuesService: DeleteValuesService,
    private addsystemvaluesService: AddsystemvaluesService) {
    /** Initilase the breadcrumbs navigation data **/
    this.itemsPath = [{ label: 'System Values', routerLink: ['/systemvalues'] },
    { label: 'Values' }];

    this.displayRows = [{ label: '15', value: 15 },
    { label: '20', value: 20 }, { label: '30', value: 30 },
    { label: '50', value: 50 }, { label: '100', value: 100 }];
    this.selectedRows = 15;
    this.exportFileName = 'SystemValuesList';
    this.dialogHeader = 'Add New System Value';
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.code = params['code'];
    });
    this.getDropDownValues();
    this.dataValues();
    this.filterable = true;
    this.isPaginator = true;
  }

  getDropDownValues() {
    this.systemvaluelabelservice.getSystemValueLabel(this.code).subscribe(data => {
      this.systemvaluelabelList = data;
      console.log('label', this.systemvaluelabelList);
    });
  }
  dataValues() {
    this.systemvaluetypelistservice.getSystemValueData(this.code).subscribe(data => {
      this.sytemvaluedatalist = data;
      console.log('Value', this.sytemvaluedatalist);
    });
  }

  /** to navigate to the add new value screen */
  navigateAddNewValue() {
    this.addsystemvaluesService.addSystemValueLabel(this.systemvaluelabelList);
    this.displayDialog = true;
    this.isUpdate = false;
    this.dialogHeader = 'Add New System Value';
    console.log('inside add new value');
    this.labelList = this.systemvaluelabelList.filter(
      (label) => {
        return label.field !== 'action';
      }
    );
  }

  /** to navigate back to system values screen */
  back() {
    this.location.back();
  }

  refresh(event) {
    console.log('refresh');
    this.dataValues();
    this.displayDialog = event;
  }

  messageStatus(event) {
    if (event === 'Added') {
      this.msgs = [{ severity: 'success', detail: 'Record Added Successfully' }];
    }
    if (event === 'Updated') {
      this.msgs = [{ severity: 'success', detail: 'Record Updated Successfully' }];
    }
  }
  checkAndEnablePage(value: number) {
    if (this.sytemvaluedatalist.length > value) {
      this.isPaginator = true;
    } else {
      this.isPaginator = false;
    }
    this.selectedRows = value;
  }
  pagination(isPaginator: boolean) {
    this.isPaginator = isPaginator;
  }

  update(record) {
    this.isUpdate = true;
    this.dialogHeader = 'Update System Value';
    this.displayDialog = true;
    console.log('inside update new value', record);
    this.labelList = this.systemvaluelabelList.filter(
      (label) => {
        return label.field !== 'action';
      }
    );
    this.updateRecord = record;
  }
  delete(record) {
    console.log('record', record);
    console.log('grid', this.grid);
    this.msgs = [];
    this.confirmationService.confirm({
      message: 'Are your sure you want to delete the record?',
      header: 'Delete Confirmation',
      icon: 'fa fa-trash',
      accept: () => {

        this.deleteValuesService.deleteValue(record).subscribe(data => {
          this.msgs = [{ severity: 'success', detail: 'Record Deleted Successfully' }];
          this.dataValues();
          this.grid.filteredValue = this.grid.filteredValue.filter((item) => {
            return item.valueId !== record;
          });
          console.log('', this.sytemvaluedatalist);
        });

      },
      reject: () => {
        this.msgs = [{ severity: 'info', summary: 'Rejected', detail: 'You have rejected' }];
      }
    });
  }
}
