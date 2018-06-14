import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { appConstants } from '../../core/constants/appConstants';
import { SelectItem } from 'primeng/api';
import { Observable } from 'rxjs/Observable';
import {BaseServiceService} from './base-service.service';

@Injectable()
export class SystemvaluetypelistService extends BaseServiceService {
  private serverURL: string;

  constructor(private httpClient: HttpClient) {
    super();
   }

  /* This method will be used to get data list based on system value type selected*/

  getSystemValueData(subType) {
    this.serverURL  = environment.serverUrl + '/divasystemmaintenanceservice/labelValueList';
    appConstants.getHeaderOptions.params = new HttpParams().set('systemValueType', subType);

    return this.httpClient
      .get(this.serverURL, appConstants.getHeaderOptions).map((dataList: JSON[]) => {
        return dataList;
      }).catch(this.handleError);
    }
}
