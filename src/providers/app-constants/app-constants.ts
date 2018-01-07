import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class AppConstantsProvider {

  public static API_ENDPOINT ='http://smartfarm.iotplatform.vn:9119/VGarden/api/app';

  public static API_TOKEN_KEY = 'vgraden-token';
  
  constructor(public http: Http) {
    
  }

}
