import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IonManaLib } from 'ion-m-lib';
import { ParseDataProvider } from '../providers/parse-data';
import { DatadetailPipe } from './datadetail.pipe';
import { TrackerDetail2Pipe } from './tracker-detail2.pipe';

@NgModule({
  declarations: [AppComponent, DatadetailPipe, TrackerDetail2Pipe],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    IonManaLib,
    ParseDataProvider,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
