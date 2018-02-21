import { Network } from '@ionic-native/network';
import { Clipboard } from '@ionic-native/clipboard';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';

import { RecentProvider } from '../../providers/providers';

import { Torrent } from './../../models/torrent';
/**
 * Generated class for the RecentPage page.
 */

@IonicPage()
@Component({
  selector: 'page-recent',
  templateUrl: 'recent.html',
})
export class RecentPage {

  torrents: Torrent[];
  loader:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public toastCtrl: ToastController, public clipboard: Clipboard, private network: Network, public recentProvider: RecentProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecentPage');
    this.presentLoading();
    this.recentProvider.getTorrents().subscribe(data => {
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
      this.recentProvider.getTorrents().subscribe(data => {
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
