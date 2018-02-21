import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';

import { Page } from "../models/page";
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

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
    new Page({ collapse: true, iconName: 'trending-up', title: 'Top 100', component: 'top', subItems:[
      new Page({ collapse: true, iconName: 'musical-notes', title: 'Top 100 Audios', parent: 'top', component: 'audio', subItems:[
        new Page({collapse: true, iconName: 'top', title: 'Top 100 Music', parent: 'audio', component: 'music'}),
        new Page({collapse: true, iconName: 'top', title: 'Top 100 Audio Books', parent: 'audio', component: 'audioBooks'}),
        new Page({collapse: true, iconName: 'top', title: 'Top 100 Sound Clips', parent: 'audio', component: 'soundClips'}),
        new Page({collapse: true, iconName: 'top', title: 'Top 100 FLAC', parent: 'audio', component: 'FLAC'}),
        new Page({collapse: true, iconName: 'top', title: 'Top 100 Others', parent: 'audio', component: 'other'}),
      ]
      }),
      new Page({ collapse: true, iconName: 'videocam', title: 'Top 100 Videos', parent: 'top', component: 'video', subItems:[
        new Page({ collapse: true, iconName: 'top', title: 'Top 100 Movies', parent: 'video', component: 'movies' }),
        new Page({ collapse: true, iconName: 'top', title: 'Top 100 Movies DVDR', parent: 'video', component: 'moviesDVDR' }),
        new Page({ collapse: true, iconName: 'top', title: 'Top 100 Music Videos', parent: 'video', component: 'musicVideos' }),
        new Page({ collapse: true, iconName: 'top', title: 'Top 100 Movie Clips', parent: 'video', component: 'movieClips' }),
        new Page({ collapse: true, iconName: 'top', title: 'Top 100 TV Shows', parent: 'video', component: 'tvShows' }),
        new Page({ collapse: true, iconName: 'top', title: 'Top 100 Handheld', parent: 'video', component: 'handHeld' }),
        new Page({ collapse: true, iconName: 'top', title: 'Top 100 HD Movies', parent: 'video', component: 'hdMovies' }),
        new Page({ collapse: true, iconName: 'top', title: 'Top 100 HD TV Shows', parent: 'video', component: 'hdTvShows' }),
        new Page({ collapse: true, iconName: 'top', title: 'Top 100 3D', parent: 'video', component: '3D' }),
        new Page({ collapse: true, iconName: 'top', title: 'Top 100 Others', parent: 'video', component: 'other' })
      ]
      }),
      new Page({ collapse: true, iconName: 'apps', title: 'Top 100 Applications', parent: 'top', component: 'applications', subItems:[
        new Page({ collapse: true, iconName: 'top', title: 'Top 100 Windows', parent: 'applications', component: 'windows' }),
        new Page({ collapse: true, iconName: 'top', title: 'Top 100 Mac', parent: 'applications', component: 'mac' }),
        new Page({ collapse: true, iconName: 'top', title: 'Top 100 UNIX', parent: 'applications', component: 'unix' }),
        new Page({ collapse: true, iconName: 'top', title: 'Top 100 Handheld', parent: 'applications', component: 'handHeld' }),
        new Page({ collapse: true, iconName: 'top', title: 'Top 100 IOS', parent: 'applications', component: 'ios' }),
        new Page({ collapse: true, iconName: 'top', title: 'Top 100 Android', parent: 'applications', component: 'android' }),
        new Page({ collapse: true, iconName: 'top', title: 'Top 100 Other OS', parent: 'applications', component: 'otherOS' })
      ]
      }),
      new Page({ collapse: true, iconName: 'game-controller-b', title: 'Top 100 Games', parent: 'top', component: 'games', subItems:[
        new Page({ collapse: true, iconName: 'top', title: 'Top 100 PC', parent: 'games', component: 'pc' }),
        new Page({ collapse: true, iconName: 'top', title: 'Top 100 PSx', parent: 'games', component: 'mac' }),
        new Page({ collapse: true, iconName: 'top', title: 'Top 100 Mac', parent: 'games', component: 'psx' }),
        new Page({ collapse: true, iconName: 'top', title: 'Top 100 XBOX360', parent: 'games', component: 'xbox360' }),
        new Page({ collapse: true, iconName: 'top', title: 'Top 100 Wii', parent: 'games', component: 'wii' }),
        new Page({ collapse: true, iconName: 'top', title: 'Top 100 Handheld', parent: 'games', component: 'handHeld' }),
        new Page({ collapse: true, iconName: 'top', title: 'Top 100 IOS', parent: 'games', component: 'ios' }),
        new Page({ collapse: true, iconName: 'top', title: 'Top 100 Android', parent: 'games', component: 'android' }),
        new Page({ collapse: true, iconName: 'top', title: 'Top 100 Others', parent: 'games', component: 'other' })
      ]
      }),
      new Page({ collapse: true, iconName: 'nuclear', title: 'Top 100 Porns', parent: 'top', component: 'porn', subItems:[
        new Page({ collapse: true, iconName: 'top', title: 'Top 100 Movies', parent: 'porn', component: 'movies' }),
        new Page({ collapse: true, iconName: 'top', title: 'Top 100 Movies DVDR', parent: 'porn', component: 'moviesDVDR' }),
        new Page({ collapse: true, iconName: 'top', title: 'Top 100 Pictures', parent: 'porn', component: 'pictures' }),
        new Page({ collapse: true, iconName: 'top', title: 'Top 100 Games', parent: 'porn', component: 'movieClips' }),
        new Page({ collapse: true, iconName: 'top', title: 'Top 100 HD Movies', parent: 'porn', component: 'games' }),
        new Page({ collapse: true, iconName: 'top', title: 'Top 100 Movie Clips', parent: 'porn', component: 'hdMovies' }),
        new Page({ collapse: true, iconName: 'top', title: 'Top 100 Others', parent: 'porn', component: 'other' })
      ]
      }),
      new Page({ collapse: true, iconName: 'cog', title: 'Top 100 Others', parent: 'top', component: 'other', subItems:[
        new Page({ collapse: true, iconName: 'top', title: 'Top 100 E Books', parent: 'other', component: 'ebooks' }),
        new Page({ collapse: true, iconName: 'top', title: 'Top 100 Comics', parent: 'other', component: 'comics' }),
        new Page({ collapse: true, iconName: 'top', title: 'Top 100 Pictures', parent: 'other', component: 'pictures' }),
        new Page({ collapse: true, iconName: 'top', title: 'Top 100 Covers', parent: 'other', component: 'covers' }),
        new Page({ collapse: true, iconName: 'top', title: 'Top 100 Physibles', parent: 'other', component: 'physibles' }),
        new Page({ collapse: true, iconName: 'top', title: 'Top 100 Others', parent: 'other', component: 'other' }),
      ]
      })
    ]
    }),
    new Page({ collapse: true, iconName: 'time', title: 'Recents', component: 'recentPage'})
  ]

  /**
   * Creates an instance of MyApp.
   * @param {Platform} platform
   * @param {StatusBar} statusBar
   * @param {SplashScreen} splashScreen
   * @memberof MyApp
   */
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
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
}
