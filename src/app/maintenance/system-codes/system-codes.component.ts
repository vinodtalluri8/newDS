import { Component, OnInit } from '@angular/core';
import { SelectItem, Message } from 'primeng/api';
import { Router, ActivatedRoute, RouterLink, UrlSegment } from '@angular/router';
import { ApplicationService } from '../services/application.service';
import { DatalistService } from '../services/datalist.service';
import { Application } from '../interfaces/application';



@Component({
  selector: 'app-system-codes',
  templateUrl: './system-codes.component.html',
  styleUrls: ['./system-codes.component.css']
})
export class SystemCodesComponent implements OnInit {
  applications: SelectItem[];
  selectedApplication: string;
  dataList: SelectItem[];
  selectedData: string;
  systemCodeDateList: any[];
  colHeaders: any[];
  filterable: boolean;
  code: string;
  isPaginator: boolean;
  selectedRows: number;
  exportFileName: string;
  displayRows: SelectItem[];



  constructor(private router: Router, private applicationService: ApplicationService, private datalistService: DatalistService) {
    this.selectedRows = 15;
    this.exportFileName = 'SystemCodes';
  }

  ngOnInit() {
    this.getDropdownValues();
    this.colHeaders = [
      { field: 'code', header: 'System Code' },
      { field: 'description', header: 'Description' },
      { field: 'action', header: 'Action' }
    ];
    this.displayRows = [{ label: '15', value: 15 },
    { label: '20', value: 20 }, { label: '30', value: 30 },
    { label: '50', value: 50 }, { label: '100', value: 100 }];
    this.code = 'SYSTEM_CODE';
    this.isPaginator = true;
    this.filterable = true;
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
    this.datalistService.getdataList(this.selectedApplication, this.code).subscribe(data => {
      this.systemCodeDateList = data;
    });
  }
  /* This method will assign the changed Application value and populate the data list based on application selected*/
  onChangeApplication(event) {
    this.selectedApplication = event;
    this.datalistService.getdataList(event, this.code).subscribe(data => {
      this.systemCodeDateList = data;
    });
  }
  /*navigation to the data list page based on the hyperlink*/
  navigateListSystem(code: string) {
    this.router.navigate(['systemcodes/listsystemcodes', code]);
  }

  checkAndEnablePage(value: number) {
    if (this.systemCodeDateList.length > value) {
      this.isPaginator = true;
    } else {
      this.isPaginator = false;
    }
    this.selectedRows = value;
  }
  pagination(isPaginator: boolean) {
    this.isPaginator = isPaginator;
  }

  exportName() {
    return this.exportFileName = this.exportFileName + '-' + this.selectedApplication;
  }
}
