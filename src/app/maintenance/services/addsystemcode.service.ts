/* This service is used to save the data for add system code */

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { environment } from '../../../environments/environment';
import { appConstants } from '../../core/constants/appConstants';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import {BaseServiceService} from './base-service.service';


@Injectable()
export class AddsystemcodeService  extends BaseServiceService {

  private serverURL = environment.serverUrl + '/divasystemmaintenanceservice/saveSystemCode';
  constructor(private httpClient: HttpClient) {
    super();
   }

  /** This method will POST the data of add system code screen to backend **/
  addSystemCodeVal(data: JSON, subType) {
    appConstants.postHeaderOptions.params = new HttpParams().set('systemCodeType', subType);
    return this.httpClient.post(this.serverURL,
      data, { ...appConstants.postHeaderOptions, responseType: 'text' }).map((systemcode: string) => systemcode).catch(this.handleError);
  }
}
