import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { Clipboard } from '@ionic-native/clipboard';
import { Network } from '@ionic-native/network';

import { TopProvider } from '../../providers/providers';
import { Torrent } from '../../models/torrent';
import { Page } from '../../models/page';
/**
 * Generated class for the TopPage page.
 */

@IonicPage()
@Component({
  selector: 'page-top',
  templateUrl: 'top.html',
})
export class TopPage {

  torrents: Torrent[];
  loader:any;
  page: Page;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public toastCtrl: ToastController, public clipboard: Clipboard, private network: Network, public topProvider: TopProvider) {
    this.page = navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TopPage');
    this.presentLoading();
    this.topProvider.getTorrents(this.page).subscribe(data => {
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
      this.topProvider.getTorrents(this.page).subscribe(data => {
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
    ref.complete();
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
