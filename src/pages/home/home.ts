import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { Clipboard } from '@ionic-native/clipboard';

import { SearchProvider } from '../../providers/search/search';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  searchQuery: string = '';
  //items: any;
  loader:any;
  items = [
    {
        "index": 0,
        "category": {
            "main": "Video",
            "sub": "Music videos"
        },
        "title": "ABC Kids TV Wheels on the Bus + More Nursery Rhymes 1hr XVID",
        "magnet": "magnet:?xt=urn:btih:b30788974be208e939b5fcbbeac00b1267fd4ed3&dn=ABC+Kids+TV+Wheels+on+the+Bus+%2B+More+Nursery+Rhymes+1hr+XVID&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Fzer0day.ch%3A1337&tr=udp%3A%2F%2Fopen.demonii.com%3A1337&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Fexodus.desync.com%3A6969",
        "desc": {
            "upload_date": "12-02 2016",
            "size": "1.19 GiB",
            "uploaded_by": "darry71"
        },
        "seed": "37",
        "leech": "2"
    }
];

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, public toastCtrl: ToastController, public clipboard: Clipboard, public searchProvider: SearchProvider) {

  }

  presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Please wait...",
    });
    this.loader.present();
  }

  getItems(event: any) {

    // set val to the value of the searchbar
    this.searchQuery = event.target.value;

    // if the value is an empty string don't filter the items
    if (this.searchQuery && this.searchQuery.trim() != '') {

      this.presentLoading();

      //this.items = this.searchProvider.getItems(this.searchQuery);

      console.log(this.items);

      this.loader.dismiss();
    }
  }

  copyLink(magnet: string){
    console.log(magnet);
    let toast = this.toastCtrl.create({
      message: 'Magnet link copied successfuly',
      duration: 3000
    });
    this.clipboard.copy(magnet);
    toast.present();
  }
}
