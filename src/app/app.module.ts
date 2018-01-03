import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SharedComponent } from './shared/shared.component';
import { QrcodeComponent } from './qrcode/qrcode.component';


@NgModule({
  declarations: [
    AppComponent,
    SharedComponent,
    QrcodeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
