import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, RouterLink, UrlSegment } from '@angular/router';
import { Location } from '@angular/common';
import { MenuItem, SelectItem, Message } from 'primeng/api';
import { DepartmentsService } from '../../services/departments.service';
import { AddsystemcodeService } from '../../services/addsystemcode.service';
import { UpdatesystemcodeService } from '../../services/updatesystemcode.service';
import { empty } from 'rxjs/Observer';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-add-system-codes',
  templateUrl: './add-system-codes.component.html',
  styleUrls: ['./add-system-codes.component.css']
})
export class AddSystemCodesComponent implements OnInit {
  itemsPath: MenuItem[];
  @Input() code: string;
  valueinput: string;
  departments: SelectItem[];
  selectedDepartments: string;
  guilabel: string;
  description: string;
  selectedValues: string[] = [];
  value: boolean;
  dataJson: any;
  saved: boolean;
  select: boolean;
  savedRecord;
  msg: Message[] = [];
  @Input() showdepartment: boolean;
  checkboxVal: string;
  record: number;
  updaterecorddatalist: any[] = [];
  displayName: string;
  auditId: number;
  departMessage;
  departmentExists: boolean;
  addSystemCodeForm: FormGroup;
  @Input() isUpdate: boolean;
  updateRecordDate: any;
  @Output() closeSystemCode = new EventEmitter();
  @Output() systemCodeEvent = new EventEmitter();
  msgs: Message[] = [];
  buttonDisabled: boolean;

  constructor(private router: Router, private route: ActivatedRoute, private departmentService: DepartmentsService,
    private addsystemcodeService: AddsystemcodeService, private location: Location,
    private updatesystemcodeService: UpdatesystemcodeService) {
    this.addSystemCodeForm = new FormGroup({
      valueinput: new FormControl('', Validators.required),
      guilabel: new FormControl(''),
      checkbox: new FormControl(''),
      description: new FormControl('')
    });
    this.checkboxVal = '';
    this.value = false;
    this.guilabel = '';
  }
  onChangeChecked(event) {
    console.log('Onchange');
    this.populateCheckValue();
  }
  populateCheckValue() {
    console.log('populateCheckValue', this.value);
    if (this.value) {
      this.guilabel = this.valueinput;
      this.checkboxVal = 'on';
    } else {
      this.guilabel = '';
      this.checkboxVal = '';
    }
  }

  populateValues() {
    console.log('Populate Values', this.updateRecordDate);
    this.valueinput = this.updateRecordDate['value'] ? this.updateRecordDate['value'] : '';
    this.guilabel = this.updateRecordDate['guiLabel'] ? this.updateRecordDate['guiLabel'] : '';
    this.selectedDepartments = this.updateRecordDate['userDepartment'] ? this.updateRecordDate['userDepartment'] : '';
    this.description = this.updateRecordDate['description'] ? this.updateRecordDate['description'] : '';

    if (this.showdepartment) {
      this.departments.forEach((value) => {
        if (value['value'] === this.updateRecordDate['userDepartment']) {
          this.departmentExists = true;
          this.selectedDepartments = this.updateRecordDate['userDepartment'] ? this.updateRecordDate['userDepartment'] : '';
        }
      });
      if (!this.departmentExists) {
        this.departMessage = 'Please Select User Department';
        this.msgs = [{ severity: 'error', detail: this.departMessage }];

      }
    }
  }

  @Input()
  set update(record: any) {
    console.log('clicked add', record);
    if (record) {
      console.log('update Record', record);
      this.updateRecordDate = record;
      this.addSystemCodeForm.reset();
      this.populateValues();
    }
  }

  get update(): any {
    return this.isUpdate;
  }

  ngOnInit() {
    /**to get the list of drop down values on page load */

    this.getDropdownValues();
    this.selectedDepartments = null;
    if (this.isUpdate) {
      this.updatesystemcodeService.getUpdateSystemCodeData(this.record).subscribe(dataList => {
        this.updaterecorddatalist = dataList;
        this.populateDataForUpdate(dataList);
      });
    }
  }

  populateDataForUpdate(dataList) {
    this.guilabel = dataList['guiLabel'];
    this.valueinput = dataList['value'];
    this.description = dataList['description'];
    this.auditId = dataList['auditId'];

    /** checking whether the user department value is there not
     * if there then only display user department
      */

    if (this.showdepartment) {
      this.departments.forEach((value) => {
        if (value['value'] === dataList['userDepartment']) {
          this.departmentExists = true;
          this.selectedDepartments = dataList['userDepartment'] ? dataList['userDepartment'] : ' ';
        }
      });
      if (!this.departmentExists) {
        this.departMessage = 'Please Select User Department';
        this.selectedDepartments = null;
        this.msgs = [{ severity: 'error', detail: this.departMessage }];

      }
    }

  }
  /** This method is used to get the dropdown values for the add system codes screen **/
  getDropdownValues() {
    this.departmentService.getDepartments().subscribe(data => {
      this.departments = data;
    });

  }
  initialiseDefaultvalue() {
    this.valueinput = '';
    this.selectedDepartments = '';
    this.guilabel = '';
    this.value = false;
    this.checkboxVal = '';
    this.description = '';
  }

  /** This method is used to navigate back to the list system codes screen **/
  back() {
    this.initialiseDefaultvalue();
    this.closeSystemCode.emit(false);
    this.saved = false;
    this.msgs = [];
    this.addSystemCodeForm.reset();
  }

  validate() {
    if (this.guilabel.trim().length === 0
      || this.valueinput.trim().length === 0) {
      return false;

    } else if (this.showdepartment && (!this.selectedDepartments || this.selectedDepartments.trim().length === 0)) {
      return false;
    } else {
      return true;
    }
  }
  /* This method will enable or disable the Save button based on the mandatory fields selected */
  disable(operation) {
    console.log('operation', operation);
    if (operation === 'add') {
      if (this.value) {
        this.populateCheckValue();
      }
      this.buttonDisabled = !this.addSystemCodeForm.valid || !this.validate();
    } else if (operation === 'update') {
      this.buttonDisabled = !((this.addSystemCodeForm.dirty || this.selectedDepartments !== this.updateRecordDate['userDepartment']
    || (this.description && this.description !== this.updateRecordDate['description'])) && this.validate());
    }
    return this.buttonDisabled;
  }
  /** This method will pass the updated data of system code and saves data to backend **/
  updatesystemcodeval() {
    if (!this.buttonDisabled) {
      this.dataJson = {
        'value': this.valueinput,
        'guiLabel': this.guilabel,
        'subType': this.showdepartment ? this.selectedDepartments : this.code,
        'description': this.description,
      };
      this.updatesystemcodeService.updateSystemValueData(this.dataJson, this.updateRecordDate['auditId'])
        .subscribe(data => {
          this.savedRecord = data;
          this.saved = true;
          this.systemCodeEvent.emit('Updated');
          this.back();
          this.initialiseDefaultvalue();
        },
          error => {
            this.msgs = [{ severity: 'error', detail: error }];
          });

    }
  }


  /** This method will pass the data of add system code service to save data to backend **/
  addSystemCode() {
    if (!this.buttonDisabled) {
      this.dataJson = {
        'value': this.valueinput,
        'guiLabel': this.guilabel,
        'subType': this.showdepartment ? this.selectedDepartments : this.code,
        'description': this.description,
        'flagGuiSameAsValue': this.checkboxVal
      };
      console.log('addSystemCode', this.dataJson);
      this.addsystemcodeService.addSystemCodeVal(this.dataJson, this.code)
        .subscribe(data => {
          this.savedRecord = data;
          this.saved = true;
          this.systemCodeEvent.emit('Added');
          this.back();
          this.initialiseDefaultvalue();

        },
          error => {
            this.msgs = [{ severity: 'error', summary: 'Error Message', detail: error }];
          });

    }

  }
}
