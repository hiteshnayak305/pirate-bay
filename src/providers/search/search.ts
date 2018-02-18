import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/retry';

/*
  Generated class for the SearchProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SearchProvider {

  url:string = 'https://crawler-express.herokuapp.com/api/search';

  constructor(public http: HttpClient) {
    console.log('Hello SearchProvider Provider url : '+this.url);
  }

  getItems(queryString: string){
    return new Promise(resolve => {
      this.http.get(this.url + '/' + queryString).retry(3).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      })
    });
  }

}
