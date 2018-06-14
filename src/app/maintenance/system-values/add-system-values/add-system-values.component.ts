import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router, ActivatedRoute, RouterLink, UrlSegment } from '@angular/router';
import { Location } from '@angular/common';
import { AddsystemvaluesService } from '../../services/addsystemvalues.service';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { UpdatesystemvalueService } from '../../services/updatesystemvalue.service';
import { Message } from 'primeng/components/common/api';

@Component({
  selector: 'app-add-system-values',
  templateUrl: './add-system-values.component.html',
  styleUrls: ['./add-system-values.component.css']
})
export class AddSystemValuesComponent implements OnInit {

  itemsPath: MenuItem[];
  @Input() code: string;
  applicationName: string;
  documentName: string;
  description: string;
  documentType: string;
  // @Input() labelList: any[];
  headerLabelList: any[];
  listJson: any[] = [];
  // labelValues: string[];
  column1: string;
  column2: string;
  column3: string;
  column4: string;
  column5: string;
  column6: string;
  isColumn1Visible: boolean;
  isColumn2Visible: boolean;
  isColumn3Visible: boolean;
  isColumn4Visible: boolean;
  isColumn5Visible: boolean;
  isColumn6Visible: boolean;
  dataJson: any;
  addSystemValueForm: FormGroup;
  group: any = {};
  @Input() isUpdate: boolean;
  updateRecordDate: any;
  @Output() closeSystemValue = new EventEmitter();
  @Output() systemValueEvent = new EventEmitter();
  msgs: Message[] = [];
  buttonDisabled: boolean;
  constructor(private router: Router, private route: ActivatedRoute, private location: Location,
    private addsystemvaluesService: AddsystemvaluesService, private fb: FormBuilder,
    private updatesystemvalueService: UpdatesystemvalueService) {
    this.initialiseDefaultvalue();
    this.addSystemValueForm = new FormGroup({
      column1: new FormControl('', Validators.required),
      column2: new FormControl('', Validators.required),
      column3: new FormControl('', Validators.required),
      column4: new FormControl('', Validators.required),
      column5: new FormControl('', Validators.required)
    });
  }

  /** to navigate back to the list system values screen **/
  back() {
    this.initialiseDefaultvalue();
    this.closeSystemValue.emit(false);
    this.addSystemValueForm.reset();
    this.msgs = [];
    this.updateRecordDate = null;
  }

  initialiseDefaultvalue() {
    this.column1 = '';
    this.column2 = '';
    this.column3 = '';
    this.column4 = '0.0000';
    this.column5 = '0.0000';
    this.column6 = '0.0000';
    this.description = '';
    this.isColumn1Visible = false;
    this.isColumn2Visible = false;
    this.isColumn3Visible = false;
    this.isColumn4Visible = false;
    this.isColumn5Visible = false;
    this.isColumn6Visible = false;
    this.buttonDisabled = true;
  }

  populateValues() {
    console.log('Populate Values', this.updateRecordDate);
    this.column1 = this.updateRecordDate['column1value'] ? this.updateRecordDate['column1value'] : '';
    this.column2 = this.updateRecordDate['column2value'] ? this.updateRecordDate['column2value'] : '';
    this.column3 = this.updateRecordDate['column3value'] ? this.updateRecordDate['column3value'] : '';
    this.column4 = this.updateRecordDate['column4value'];
    this.column5 = this.updateRecordDate['column5value'];
    this.column6 = this.updateRecordDate['column6value'];
    this.description = this.updateRecordDate['description'] ? this.updateRecordDate['description'] : '';

  }
  ngOnInit() {
    console.log('labelList', this.labelList);
    /** Initilase the breadcrumbs navigation data **/
    this.itemsPath = [
      { label: 'System Values', routerLink: ['/systemvalues'] },
      { label: 'Values', routerLink: ['/systemvalues/listsystemvalues', this.code] }, // check a value
      { label: 'Add New Value' }
    ];
  }

  validate() {
    console.log('column1', this.column1.trim().length === 0);
    console.log('column2', this.column2.trim().length === 0);
    console.log('column3', this.column3.trim().length === 0);
    if ((this.isColumn1Visible && this.column1.trim().length === 0) || (this.isColumn2Visible && this.column2.trim().length === 0)
      || (this.isColumn3Visible && this.column3.trim().length === 0)) {
      return false;

    } else {
      return true;
    }
  }
  /* This method will enable or disable the Save button based on the mandatory fields selected */
  disable(operation) {
    console.log('operation', operation);
    if (operation === 'add') {
      this.buttonDisabled = !this.addSystemValueForm.valid || !this.validate();
    } else if (operation === 'update' && this.updateRecordDate) {
      this.buttonDisabled = !(this.validate() && (this.addSystemValueForm.dirty ||
        (this.description !== '' && this.description !== this.updateRecordDate['description'])));
    }
    return this.buttonDisabled;
  }
  @Input()
  set update(record: any) {
    if (record) {
      console.log('update Record', record);
      this.updatesystemvalueService.getSystemValueRecord(record['valueId'], this.code).subscribe(data => {
        this.updateRecordDate = data;
        this.addSystemValueForm.reset();
        this.populateValues();
      });

    }
  }

  get update(): any {
    return this.isUpdate;
  }

  updateVisibleField(field) {
    switch (field) {
      case 'column1': this.isColumn1Visible = true; break;
      case 'column2': this.isColumn2Visible = true; break;
      case 'column3': this.isColumn3Visible = true; break;
      case 'column4': this.isColumn4Visible = true; break;
      case 'column5': this.isColumn5Visible = true; break;
      case 'column6': this.isColumn6Visible = true; break;
    }
  }
  @Input()
  set labelList(labelList: any[]) {
    if (!this.isUpdate) {
      this.initialiseDefaultvalue();
    }
    if (labelList) {
      this.headerLabelList = labelList;
      this.headerLabelList.forEach((value) => {
        this.group[value.field] = new FormControl('', Validators.required);
        this.updateVisibleField(value.field);
      });
      this.addSystemValueForm = new FormGroup(this.group);

    }
  }

  get labelList(): any[] {
    return this.headerLabelList;
  }

  generateListJson() {
    this.listJson = [];
    this.headerLabelList.forEach((value) => {
      this.listJson.push({
        'id': value.field,
        'value': value.header
      });
    });
  }
  addSystemValues() {
    if (!this.buttonDisabled) {
      this.generateListJson();
      this.dataJson = {
        'description': this.description,
        'list': this.listJson,
        'column1value': this.column1,
        'column2value': this.column2,
        'column3value': this.column3,
        'column4value': parseFloat(this.column4),
        'column5value': parseFloat(this.column5),
        'column6value': parseFloat(this.column6)
      };

      console.log('addSystemValues', this.dataJson);
      this.addsystemvaluesService.addSystemVal(JSON.stringify(this.dataJson), this.code).subscribe(data => {
        this.systemValueEvent.emit('Added');
        this.back();
        this.initialiseDefaultvalue();
      },
        error => {
          this.msgs = [{ severity: 'error', summary: 'Error Message', detail: error }];
        });
    }
  }

  updateSystemValues() {
    if (!this.buttonDisabled) {
      this.generateListJson();
      this.dataJson = {
        'code': this.code,
        'description': this.description,
        'list' : this.listJson,
        'column1value': this.column1,
        'column2value': this.column2,
        'column3value': this.column3,
        'column4value': parseFloat(this.column4),
        'column5value': parseFloat(this.column5),
        'column6value': parseFloat(this.column6)
      };
      console.log('updateSystemValues', this.dataJson);
      this.updatesystemvalueService.updateSystemValue(this.dataJson, this.updateRecordDate['valueId']).subscribe(
        data => {
          this.systemValueEvent.emit('Updated');
          this.back();
        },
        error => {
          this.msgs = [{ severity: 'error', summary: 'Error Message', detail: error }];
        });
    }
  }

}
