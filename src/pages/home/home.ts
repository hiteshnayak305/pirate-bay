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
  items: any;
  li:any[];
  loader:any;

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

      this.searchProvider.getItems(this.searchQuery).then(data =>{
        this.items = data["list"];
      });

      console.log(this.items);

      this.loader.dismiss();
    }
  }

  copyLink(magnet: string){
    //console.log(magnet);
    let toast = this.toastCtrl.create({
      message: 'Magnet link copied successfuly',
      duration: 3000
    });
    this.clipboard.copy(magnet);
    toast.present();
  }

  swipeCard(index: string){
    //console.log("card swiped "+index);
    this.items.forEach((element,i) => {
      if(element.index == index){
        this.items.splice(i,1);
      }
    });
  }
}
