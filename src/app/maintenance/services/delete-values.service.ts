import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { appConstants } from '../../core/constants/appConstants';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {BaseServiceService} from './base-service.service';

@Injectable()
export class DeleteValuesService extends BaseServiceService {

  private serverURL = environment.serverUrl + '/divasystemmaintenanceservice/deleteDivaSystemValueDetails';

  constructor(private httpClient: HttpClient) {
    super();
   }

    /* This method will get the data of department dropdown based on the group selected by passing the
    application name and the system code as input parameters*/
    deleteValue(value) {
      console.log(value);
      appConstants.deleteHeaderOptions.params = new HttpParams().set('valueId', value);
    return this.httpClient.delete(this.serverURL, appConstants.deleteHeaderOptions).catch(this.handleError);
  }
}

