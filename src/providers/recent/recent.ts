import { Injectable } from '@angular/core';
import 'rxjs/add/operator/catch';

import { ApiProvider } from '../api/api';

/*
*  Generated class for the SearchProvider provider.
*/
@Injectable()
export class RecentProvider {

  constructor(public apiProvider: ApiProvider) {
    console.log('Hello RecentProvider.');
  }

  getTorrents(){
      let response =  this.apiProvider.get('recent');

      response.subscribe(data=>{
        console.log(data);
      },err=>{
        //console.log(err);
      });
      return response;
  }
}
