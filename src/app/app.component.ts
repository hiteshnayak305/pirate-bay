import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';

import { Page } from "../models/page";
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  @ViewChild(Nav) nav: Nav;
  /**
   * store all menu items
   *
   * component == component for home page
   * component == api resource url
   * @type {Page[]}
   * @memberof MyApp
   */
  pages: Page[] = [
    new Page({ collapse: true, iconName: 'search', title: 'Search', component: 'HomePage' }),
    new Page({ collapse: true, iconName: 'trending-up', title: 'Top 100', component: 'TopPage', uri: 'top', subItems:[
      new Page({ collapse: true, iconName: 'musical-notes', title: 'Top 100 Audios', parent: 'top', component: 'TopPage', uri: 'audio', subItems:[
        new Page({collapse: true, iconName: 'top', title: 'Top 100 Music', parent: 'audio', component: 'TopPage', uri: 'music'}),
        new Page({collapse: true, iconName: 'top', title: 'Top 100 Audio Books', parent: 'audio', component: 'TopPage', uri: 'audioBooks'}),
        new Page({collapse: true, iconName: 'top', title: 'Top 100 Sound Clips', parent: 'audio', component: 'TopPage', uri: 'soundClips'}),
        new Page({collapse: true, iconName: 'top', title: 'Top 100 FLAC', parent: 'audio', component: 'TopPage', uri: 'FLAC'}),
        new Page({collapse: true, iconName: 'top', title: 'Top 100 Others', parent: 'audio', component: 'TopPage', uri: 'other'}),
      ]
      }),
      new Page({ collapse: true, iconName: 'videocam', title: 'Top 100 Videos', parent: 'top', component: 'TopPage', uri: 'video', subItems:[
        new Page({ collapse: true, iconName: 'top', title: 'Top 100 Movies', parent: 'video', component: 'TopPage', uri: 'movies' }),
        new Page({ collapse: true, iconName: 'top', title: 'Top 100 Movies DVDR', parent: 'video', component: 'TopPage', uri: 'moviesDVDR' }),
        new Page({ collapse: true, iconName: 'top', title: 'Top 100 Music Videos', parent: 'video', component: 'TopPage', uri: 'musicVideos' }),
        new Page({ collapse: true, iconName: 'top', title: 'Top 100 Movie Clips', parent: 'video', component: 'TopPage', uri: 'movieClips' }),
        new Page({ collapse: true, iconName: 'top', title: 'Top 100 TV Shows', parent: 'video', component: 'TopPage', uri: 'tvShows' }),
        new Page({ collapse: true, iconName: 'top', title: 'Top 100 Handheld', parent: 'video', component: 'TopPage', uri: 'handHeld' }),
        new Page({ collapse: true, iconName: 'top', title: 'Top 100 HD Movies', parent: 'video', component: 'TopPage', uri: 'hdMovies' }),
        new Page({ collapse: true, iconName: 'top', title: 'Top 100 HD TV Shows', parent: 'video', component: 'TopPage', uri: 'hdTvShows' }),
        new Page({ collapse: true, iconName: 'top', title: 'Top 100 3D', parent: 'video', component: 'TopPage', uri: '3D' }),
        new Page({ collapse: true, iconName: 'top', title: 'Top 100 Others', parent: 'video', component: 'TopPage', uri: 'other' })
      ]
      }),
      new Page({ collapse: true, iconName: 'apps', title: 'Top 100 Applications', parent: 'top', component: 'TopPage', uri: 'applications', subItems:[
        new Page({ collapse: true, iconName: 'top', title: 'Top 100 Windows', parent: 'applications', component: 'TopPage', uri: 'windows' }),
        new Page({ collapse: true, iconName: 'top', title: 'Top 100 Mac', parent: 'applications', component: 'TopPage', uri: 'mac' }),
        new Page({ collapse: true, iconName: 'top', title: 'Top 100 UNIX', parent: 'applications', component: 'TopPage', uri: 'unix' }),
        new Page({ collapse: true, iconName: 'top', title: 'Top 100 Handheld', parent: 'applications', component: 'TopPage', uri: 'handHeld' }),
        new Page({ collapse: true, iconName: 'top', title: 'Top 100 IOS', parent: 'applications', component: 'TopPage', uri: 'ios' }),
        new Page({ collapse: true, iconName: 'top', title: 'Top 100 Android', parent: 'applications', component: 'TopPage', uri: 'android' }),
        new Page({ collapse: true, iconName: 'top', title: 'Top 100 Other OS', parent: 'applications', component: 'TopPage', uri: 'otherOS' })
      ]
      }),
      new Page({ collapse: true, iconName: 'game-controller-b', title: 'Top 100 Games', parent: 'top', component: 'TopPage', uri: 'games', subItems:[
        new Page({ collapse: true, iconName: 'top', title: 'Top 100 PC', parent: 'games', component: 'TopPage', uri: 'pc' }),
        new Page({ collapse: true, iconName: 'top', title: 'Top 100 PSx', parent: 'games', component: 'TopPage', uri: 'mac' }),
        new Page({ collapse: true, iconName: 'top', title: 'Top 100 Mac', parent: 'games', component: 'TopPage', uri: 'psx' }),
        new Page({ collapse: true, iconName: 'top', title: 'Top 100 XBOX360', parent: 'games', component: 'TopPage', uri: 'xbox360' }),
        new Page({ collapse: true, iconName: 'top', title: 'Top 100 Wii', parent: 'games', component: 'TopPage', uri: 'wii' }),
        new Page({ collapse: true, iconName: 'top', title: 'Top 100 Handheld', parent: 'games', component: 'TopPage', uri: 'handHeld' }),
        new Page({ collapse: true, iconName: 'top', title: 'Top 100 IOS', parent: 'games', component: 'TopPage', uri: 'ios' }),
        new Page({ collapse: true, iconName: 'top', title: 'Top 100 Android', parent: 'games', component: 'TopPage', uri: 'android' }),
        new Page({ collapse: true, iconName: 'top', title: 'Top 100 Others', parent: 'games', component: 'TopPage', uri: 'other' })
      ]
      }),
      new Page({ collapse: true, iconName: 'nuclear', title: 'Top 100 Porns', parent: 'top', component: 'TopPage', uri: 'porn', subItems:[
        new Page({ collapse: true, iconName: 'top', title: 'Top 100 Movies', parent: 'porn', component: 'TopPage', uri: 'movies' }),
        new Page({ collapse: true, iconName: 'top', title: 'Top 100 Movies DVDR', parent: 'porn', component: 'TopPage', uri: 'moviesDVDR' }),
        new Page({ collapse: true, iconName: 'top', title: 'Top 100 Pictures', parent: 'porn', component: 'TopPage', uri: 'pictures' }),
        new Page({ collapse: true, iconName: 'top', title: 'Top 100 Games', parent: 'porn', component: 'TopPage', uri: 'movieClips' }),
        new Page({ collapse: true, iconName: 'top', title: 'Top 100 HD Movies', parent: 'porn', component: 'TopPage', uri: 'games' }),
        new Page({ collapse: true, iconName: 'top', title: 'Top 100 Movie Clips', parent: 'porn', component: 'TopPage', uri: 'hdMovies' }),
        new Page({ collapse: true, iconName: 'top', title: 'Top 100 Others', parent: 'porn', component: 'TopPage', uri: 'other' })
      ]
      }),
      new Page({ collapse: true, iconName: 'cog', title: 'Top 100 Others', parent: 'top', component: 'TopPage', uri: 'other', subItems:[
        new Page({ collapse: true, iconName: 'top', title: 'Top 100 E Books', parent: 'other', component: 'TopPage', uri: 'ebooks' }),
        new Page({ collapse: true, iconName: 'top', title: 'Top 100 Comics', parent: 'other', component: 'TopPage', uri: 'comics' }),
        new Page({ collapse: true, iconName: 'top', title: 'Top 100 Pictures', parent: 'other', component: 'TopPage', uri: 'pictures' }),
        new Page({ collapse: true, iconName: 'top', title: 'Top 100 Covers', parent: 'other', component: 'TopPage', uri: 'covers' }),
        new Page({ collapse: true, iconName: 'top', title: 'Top 100 Physibles', parent: 'other', component: 'TopPage', uri: 'physibles' }),
        new Page({ collapse: true, iconName: 'top', title: 'Top 100 Others', parent: 'other', component: 'TopPage', uri: 'other' }),
      ]
      })
    ]
    }),
    new Page({ collapse: true, iconName: 'time', title: 'Recents', component: 'RecentPage'})
  ]

  /**
   * Creates an instance of MyApp.
   * @param {Platform} platform
   * @param {StatusBar} statusBar
   * @param {SplashScreen} splashScreen
   * @memberof MyApp
   */
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private menuCtrl: MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  /**
   * toggle menu item
   *
   * @param {Page} page
   * @memberof MyApp
   */
  toggle(page:Page){
    page.collapse = !page.collapse;
  }

  loadPage(page: Page){
    console.log(page.title);
    if(page.component == 'HomePage'){
      this.nav.popToRoot();
    } else {
      this.nav.push(page.component,page);
    }
    this.menuCtrl.close();
  }
}
