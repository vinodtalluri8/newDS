import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { appConstants } from '../../core/constants/appConstants';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import { HttpClient, HttpHeaders, HttpParams, } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {BaseServiceService} from './base-service.service';

@Injectable()
export class AddsystemvaluesService extends BaseServiceService {
  private systemValueList;
  private serverURL = environment.serverUrl + 'divasystemmaintenanceservice/addDivaSystemValueDetails';
  constructor(private httpClient: HttpClient) {
    super();
   }

  addSystemValueLabel(systemValue) {
    this.systemValueList = systemValue;
  }
  getSystemValueLabel() {
    return this.systemValueList;
  }
  /** This method will POST the data of add system code screen to backend **/
  addSystemVal(data, subType) {
    console.log('Service system value', data);
    appConstants.postHeaderOptions.params = new HttpParams().set('systemValueType', subType);
    return this.httpClient.post(this.serverURL,
      data, { ...appConstants.postHeaderOptions, responseType: 'text' }).map((systemcode: string) => systemcode).catch(this.handleError);
  }

}
