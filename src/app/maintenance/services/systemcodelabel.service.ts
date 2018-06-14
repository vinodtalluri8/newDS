import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { appConstants } from '../../core/constants/appConstants';
import { SelectItem } from 'primeng/api';
import { Observable } from 'rxjs/Observable';
import {BaseServiceService} from './base-service.service';

@Injectable()
export class SystemcodelabelService extends BaseServiceService {

  private serverURL = environment.serverUrl + '/divasystemmaintenanceservice/systemCodeLabel';

  constructor(private httpClient: HttpClient) {
    super();
   }

  /* This method will be used to get label name which is dynamic*/

  getSystemCodeLabel(subType) {
    appConstants.getHeaderOptions.params = new HttpParams().set('systemCodeType', subType);
    return this.httpClient
      .get(this.serverURL, appConstants.getHeaderOptions).map((labelList: SelectItem[]) => {
        const sytemcodelabellist = [{ field: 'value', header: 'Value' },
        { field: 'guiLabel', header: 'GUI Label' }];
        for (const label of labelList) {
          if (label['id'] === 'USER_DEPARTMENT') {
            sytemcodelabellist.push({ 'field': 'userDepartment', 'header': label['value'] });
          }
        }
        sytemcodelabellist.push({ field: 'action', header: 'Action(s)' });
        console.log('mine' + sytemcodelabellist);
        return sytemcodelabellist;
      }).catch(this.handleError);
    }
  }
