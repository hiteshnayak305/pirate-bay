import { Injectable } from '@angular/core';
import  'rxjs/add/operator/catch';

import { ApiProvider } from '../api/api';

import { Page } from './../../models/page';
/*
*  Generated class for the TopProvider provider.
*/
@Injectable()
export class TopProvider {

  url: string = '';

  constructor(public apiProvider: ApiProvider) {
    console.log('Hello TopProvider.');
  }

  getTorrents(page:Page){

    if(page.uri == 'top'){
      this.url = page.uri;
    } else if(page.parent == 'top') {
      this.url = page.parent +'/' + page.uri;
    } else {
      this.url = 'top/' + page.parent + '/' + page.uri;
    }
    //console.log(this.url);

    let response =  this.apiProvider.get(this.url);
      response.subscribe(data=>{
        //console.log(data);
      },err=>{
        //console.log(err);
      });
      return response;
  }
}
