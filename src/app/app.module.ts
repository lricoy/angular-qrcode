import { HttpModule } from "@angular/http";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";

import { QrcodeComponent } from "./qrcode/qrcode.component";
import { ApiService } from "./shared/services/api.service";

@NgModule({
  declarations: [AppComponent, QrcodeComponent],
  imports: [BrowserModule, HttpModule],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
