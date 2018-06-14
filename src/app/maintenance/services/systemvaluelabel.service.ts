import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { appConstants } from '../../core/constants/appConstants';
import { SelectItem } from 'primeng/api';
import { Observable } from 'rxjs/Observable';
import {BaseServiceService} from './base-service.service';

@Injectable()
export class SystemvaluelabelService extends BaseServiceService {
  private serverURL = environment.serverUrl + '/divasystemmaintenanceservice/labelNameList';

  constructor(private httpClient: HttpClient) {
    super();
   }

  /* This method will be used to get label name which is dynamic*/

  getSystemValueLabel(subType) {
    appConstants.getHeaderOptions.params = new HttpParams().set('systemValueType', subType);
    return this.httpClient
      .get(this.serverURL, appConstants.getHeaderOptions).map((labelList: SelectItem[]) => {
        const sytemvaluelabellist = [];
        for (const label of labelList) {
          sytemvaluelabellist.push({ 'field': label['id'], 'header': label['value'], 'type': label['dataType']});
        }
        sytemvaluelabellist.push({ field: 'action', header: 'Action(s)' });
        return sytemvaluelabellist;
      }).catch(this.handleError);
  }

}
