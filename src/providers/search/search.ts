import { Injectable } from '@angular/core';
import 'rxjs/add/operator/catch';

import { ApiProvider } from '../api/api';

/*
*  Generated class for the SearchProvider provider.
*/
@Injectable()
export class SearchProvider {

  constructor(public apiProvider: ApiProvider) {
    console.log('Hello SearchProvider.');
  }

  getTorrents(queryString: string){
      let response =  this.apiProvider.get('search/'+ queryString);

      response.subscribe(data=>{
        //console.log(data);
      },err=>{
        //console.log(err);
      });
      return response;
  }
}
