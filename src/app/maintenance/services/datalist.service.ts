import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { appConstants } from '../../core/constants/appConstants';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import { SelectItem } from 'primeng/api';
import {BaseServiceService} from './base-service.service';

@Injectable()
export class DatalistService extends BaseServiceService {

  private serverURL = environment.serverUrl + '/divasystemmaintenanceservice/dataListOnApplication';

  constructor(private httpClient: HttpClient) {
    super();
   }

  /* This method will get the data of department dropdown based on the group selected by passing the
  application name and the system code as input parameters*/
  getdataList(subType, value) {
    console.log(value);
    appConstants.getHeaderOptions.params = new HttpParams().set('applicationName', subType).set('code', value);
    return this.httpClient
      .get(this.serverURL, appConstants.getHeaderOptions).map((dataList: JSON[]) => {
        for (const data of dataList) {
          data['action'] = 'List';
        }
        console.log(dataList);
        return dataList;
      }).catch(this.handleError);
  }
}


