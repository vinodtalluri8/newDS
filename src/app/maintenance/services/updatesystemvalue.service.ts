import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { environment } from '../../../environments/environment';
import { appConstants } from '../../core/constants/appConstants';
import { Observable } from 'rxjs/Observable';
import {BaseServiceService} from './base-service.service';

@Injectable()
export class UpdatesystemvalueService extends BaseServiceService {
  private serverURL;

  constructor(private httpClient: HttpClient) {
    super();
  }

  updateSystemValue(data: JSON, value) {
    this.serverURL = environment.serverUrl + '/divasystemmaintenanceservice/updateDivaSystemValueDetails';
    return this.httpClient.put(this.serverURL + '/' + value, data, appConstants.putHeaderOptions).catch(this.handleError);
  }

  /* This method will be used to get label name which is dynamic*/

  getSystemValueRecord(valueId, subType) {
    this.serverURL = environment.serverUrl + '/divasystemmaintenanceservice/displayDivaSystemValueDetails';
    appConstants.getHeaderOptions.params = new HttpParams().set('valueId', valueId).set('systemValueType', subType);
    return this.httpClient
      .get(this.serverURL, appConstants.getHeaderOptions).map((data) => {
        return data;
      }).catch(this.handleError);
  }

}
