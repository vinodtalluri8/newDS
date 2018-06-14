import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute, RouterLink, UrlSegment } from '@angular/router';
import { MenuItem, SelectItem } from 'primeng/api';
import { SystemcodelabelService } from '../../services/systemcodelabel.service';
import { SystemcodetypelistService } from '../../services/systemcodetypelist.service';
import { ConfirmationService } from 'primeng/api';
import { Message } from 'primeng/components/common/api';
import { DeletecodeService } from '../../services/deletecode.service';
import { UpdatesystemcodeService } from '../../services/updatesystemcode.service';

@Component({
  selector: 'app-list-system-codes',
  templateUrl: './list-system-codes.component.html',
  styleUrls: ['./list-system-codes.component.css']
})
export class ListSystemCodesComponent implements OnInit {
  itemsPath: MenuItem[];
  labelList: SelectItem[];
  displayRows: SelectItem[];
  systemCodelabelList: any[];
  sytemcodedatalist: any[];
  code: string;
  filterable: boolean;
  isPaginator: boolean;
  showdepartment: boolean;
  departmentCheck: string;
  selectedRows: number;
  msgs: Message[] = [];

  updaterecorddatalist: any;
  exportFileName: string;
  displayDialog: boolean;
  isUpdate: boolean;
  dialogHeader: string;
  updateRecord: any;

  // tslint:disable-next-line:max-line-length
  constructor(private route: ActivatedRoute, private router: Router, private systemcodelabelservice: SystemcodelabelService,
    private systemcodetypelistservice: SystemcodetypelistService, private location: Location,
    private confirmationService: ConfirmationService, private deletecodeService: DeletecodeService,
    private updatesystemcodeService: UpdatesystemcodeService) {    /** Initilase the breadcrumbs navigation data **/
    this.displayRows = [{ label: '15', value: 15 },
    { label: '20', value: 20 }, { label: '30', value: 30 },
    { label: '50', value: 50 }, { label: '100', value: 100 }];
    this.selectedRows = 15;
    this.exportFileName = 'SystemCodeList';
    this.dialogHeader = 'Add New System Code';
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.code = params['code'];
    });
    this.getDropDownValues();
    this.dataValues();
    this.filterable = true;
    this.isPaginator = true;
    this.itemsPath = [{ label: 'System Codes', routerLink: ['/systemcodes'] },
    { label: 'Codes' }];
  }
  getDropDownValues() {
    this.systemcodelabelservice.getSystemCodeLabel(this.code).subscribe(data => {
      this.systemCodelabelList = data;

      for (const label of this.systemCodelabelList) {
        console.log(this.systemCodelabelList, 'systemCodelabelList');
        if (label['field'] === 'userDepartment') {
          this.departmentCheck = (label['field']);
        }

      }
      if (this.departmentCheck === 'userDepartment') {
        this.showdepartment = true;
      } else {
        this.showdepartment = false;

      }
    });
  }
  dataValues() {
    this.systemcodetypelistservice.getSystemCodeData(this.code).subscribe(data => {
      this.sytemcodedatalist = data;
    });
  }

  /** to navigate to the add new value screen */
  navigateAddNewValue() {
    this.displayDialog = true;
    this.isUpdate = false;
    this.dialogHeader = 'Add New System Code';
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
  back() {
    this.location.back();
  }

  checkAndEnablePage(value: number) {
    if (this.sytemcodedatalist.length > value) {
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
    this.dialogHeader = 'Update System Code';
    this.displayDialog = true;
    console.log('inside Update System Code', record);
    this.updateRecord = record;
  }
  delete(record) {
    console.log('record', record);
    this.msgs = [];
    this.confirmationService.confirm({
      message: 'Are your sure you want to delete the record?',
      header: 'Delete Confirmation',
      icon: 'fa fa-trash',
      accept: () => {
        this.deletecodeService.deleteCode(record).subscribe(data => {
          this.msgs = [{ severity: 'success', detail: 'Record Deleted Successfully' }];
          this.dataValues();
          console.log('', this.sytemcodedatalist);
        });
      },
      reject: () => {
        this.msgs = [{ severity: 'info', summary: 'Rejected', detail: 'You have rejected' }];
      }
    });
  }

}
