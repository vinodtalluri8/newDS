import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, JsonpClientBackend } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { environment } from '../../../environments/environment';
import { appConstants } from '../../core/constants/appConstants';
import { SelectItem } from 'primeng/api';
import { Observable } from 'rxjs/Observable';
import {BaseServiceService} from './base-service.service';

@Injectable()
export class UpdatesystemcodeService extends BaseServiceService {
  private serverURL = environment.serverUrl + '/divasystemmaintenanceservice/getSystemCode';
  private serverUrlUpdate = environment.serverUrl + '/divasystemmaintenanceservice/updateSystemCode';

  constructor(private httpClient: HttpClient) {
    super();
  }

  /* This method will be used to get data for the update screen
  * based on system code type selected*/

  getUpdateSystemCodeData(value) {
    return this.httpClient
      .get(this.serverURL + '/' + value, appConstants.getHeaderOptions).map((dataList: JSON[]) => {
        return dataList;
      }).catch(this.handleError);
  }
  updateSystemValueData(data: JSON, value) {
    return this.httpClient.put(this.serverUrlUpdate + '/' + value, data, appConstants.putHeaderOptions).catch(this.handleError);
  }

}
