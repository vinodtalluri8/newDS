import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { environment } from '../../../environments/environment';
import { appConstants } from '../../core/constants/appConstants';
import { SelectItem } from 'primeng/api';
import { Observable } from 'rxjs/Observable';
import {BaseServiceService} from './base-service.service';

@Injectable()
export class ApplicationService extends BaseServiceService {
  private serverURL = environment.serverUrl + '/divasystemmaintenanceservice/applicationList';

  constructor(private httpClient: HttpClient) {
    super();
   }
  getApplication() {
    return this.httpClient
      .get(this.serverURL, appConstants.getHeaderOptions).map((applications: SelectItem[]) => {
        const applicationList = [];
        for (const application of applications) {
          applicationList.push({ 'label': application['value'], 'value': application['id'] });
        }
        return applicationList;
      }).catch(this.handleError);
  }

}
