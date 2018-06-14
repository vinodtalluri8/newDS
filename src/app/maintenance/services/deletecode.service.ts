import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { appConstants } from '../../core/constants/appConstants';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { SelectItem } from 'primeng/api';
import { Observable } from 'rxjs/Observable';
import {BaseServiceService} from './base-service.service';

@Injectable()
export class DeletecodeService extends BaseServiceService {

  private serverURL = environment.serverUrl + '/divasystemmaintenanceservice/deleteSystemCode/';

  constructor(private httpClient: HttpClient) {
    super();
   }

    /* This method will get the data of department dropdown based on the group selected by passing the
    application name and the system code as input parameters*/
    deleteCode(value) {
      console.log(value);
    return this.httpClient.delete(this.serverURL + value, appConstants.deleteHeaderOptions).catch(this.handleError);
  }
}
