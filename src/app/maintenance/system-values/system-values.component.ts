import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { SelectItem, Message } from 'primeng/api';
import { Router, ActivatedRoute, RouterLink, UrlSegment } from '@angular/router';
import { ApplicationService } from '../services/application.service';
import { DatalistService } from '../services/datalist.service';

@Component({
  selector: 'app-system-values',
  templateUrl: './system-values.component.html',
  styleUrls: ['./system-values.component.css']
})
export class SystemValuesComponent implements OnInit {
  applications: SelectItem[];
  selectedApplication: string;
  systemvalueDataList: any[];
  value: string;
  colHeaders: any[];
  isPaginator: boolean;
  selectedRows: number;
  filterable: boolean;
  exportFileName: string;
  displayRows: SelectItem[];


  constructor(private route: ActivatedRoute, private router: Router,
    private datalistService: DatalistService, private applicationService: ApplicationService) {
    this.selectedRows = 15;
    this.displayRows = [{ label: '15', value: 15 },
    { label: '20', value: 20 }, { label: '30', value: 30 },
    { label: '50', value: 50 }, { label: '100', value: 100 }];
  }

  ngOnInit() {
    this.getDropdownValues();
    this.colHeaders = [
      { field: 'code', header: 'System Value' },
      { field: 'description', header: 'Description' },
      { field: 'action', header: 'Action' }
    ];
    this.value = 'SYSTEM_VALUE';
    this.isPaginator = true;
    this.filterable = true;
    this.exportFileName = 'SystemValues';
  }
  /** to navigate to the list system values screen */
  navigateListSystemValues(code: string) {
    this.router.navigate(['systemvalues/listsystemvalues', code]);
  }

  /* Populate all the required dropdown values during the screen load */
  getDropdownValues() {
    this.applicationService.getApplication().subscribe(data => {
      this.applications = data;
      if (this.applications.length > 0) {
        this.selectedApplication = this.applications[0].value;
        this.getDataList();
      }
    });
    this.getDataList();
  }

  getDataList() {
    this.datalistService.getdataList(this.selectedApplication, this.value).subscribe(data => {
      this.systemvalueDataList = data;
    });
  }

  /* This method will assign the changed Application value and populate the data list based on application selected*/
  onChangeApplication(event) {
    this.selectedApplication = event;
    this.datalistService.getdataList(event, this.value).subscribe(data => {
      this.systemvalueDataList = data;
    });
  }

  checkAndEnablePage(value: number) {
    if (this.systemvalueDataList.length > value) {
      this.isPaginator = true;
    } else {
      this.isPaginator = false;
    }
    this.selectedRows = value;
  }
  pagination(isPaginator: boolean) {
    this.isPaginator = isPaginator;
  }
}
