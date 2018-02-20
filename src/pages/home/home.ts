import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { Clipboard } from '@ionic-native/clipboard';
import { Network } from '@ionic-native/network';

import { SearchProvider } from '../../providers/search/search';

import { Torrent } from './../../models/torrent';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  searchQuery: string = '';
  searchString: string = '';
  torrents: Torrent[];
  loader:any;

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, public toastCtrl: ToastController, public clipboard: Clipboard, private network: Network, public searchProvider: SearchProvider) {

  }

  onConnectSubscription = this.network.onConnect().subscribe(()=>{
    console.log("onConnect");
    let toast = this.toastCtrl.create({
      message: 'Connection available',
      duration: 1000
    });
    toast.present();
  });

  onDisconnectSubscription = this.network.onDisconnect().subscribe(()=>{
    console.log("onDisconnect");
    let toast = this.toastCtrl.create({
      message: 'Connection lost...',
      duration: 1000
    });
    toast.present();
  });

  presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Please wait...",
    });
    this.loader.present();
  }

  doRefresh(ref: any){
    console.log("doRefresh");
    if (this.searchQuery && this.searchQuery.trim() != '') {
      this.searchProvider.getTorrents(this.searchQuery).subscribe(data => {
        this.torrents = data["list"];
        console.log(this.torrents);
      }, err => {
        console.log(err);
        let toast = this.toastCtrl.create({
          message: 'Error occured while fetching...',
          duration: 2000
        });
        toast.present();
      });
    }
    ref.complete();
  }

  getItems(event: any) {

    this.searchQuery = this.searchString;
    // if the value is an empty string don't filter the items
    if (this.searchQuery && this.searchQuery.trim() != '') {

      this.presentLoading();

      this.searchProvider.getTorrents(this.searchQuery).subscribe(data => {
        this.torrents = data["list"];
        console.log(this.torrents);
      }, err => {
        console.log(err);
        let toast = this.toastCtrl.create({
          message: 'Error occured while fetching...',
          duration: 2000
        });
        toast.present();
      });

      this.loader.dismiss();
    }
  }

  copyLink(magnet: string){
    //console.log(magnet);
    let toast = this.toastCtrl.create({
      message: 'Magnet link copied successfuly',
      duration: 1000
    });
    this.clipboard.copy(magnet);
    toast.present();
  }

  swipeCard(index: string){
    //console.log("card swiped "+index);
    this.torrents.forEach((element,i) => {
      if(element.index == parseInt(index)){
        this.torrents.splice(i,1);
      }
    });
  }

}
