import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { appConstants } from '../../core/constants/appConstants';
import { SelectItem } from 'primeng/api';
import { Observable } from 'rxjs/Observable';
import {BaseServiceService} from './base-service.service';

@Injectable()
export class SystemcodetypelistService extends BaseServiceService {

  private serverURL = environment.serverUrl + '/divasystemmaintenanceservice/systemCodeTypeList';

  constructor(private httpClient: HttpClient) {
    super();
   }

  /* This method will be used to get data list based on system code type selected*/

  getSystemCodeData(subType) {
    appConstants.getHeaderOptions.params = new HttpParams().set('systemCodeType', subType);

    return this.httpClient
      .get(this.serverURL, appConstants.getHeaderOptions).map((dataList) => {
        console.log(dataList, 'dataList system code');
        return dataList;
      }).catch(this.handleError);
    }
}
