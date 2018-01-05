import { Component, OnInit } from "@angular/core";

import { ApiService } from "./../shared/services/api.service";
import * as uuid from "uuid/v4";

@Component({
  selector: "app-qrcode",
  templateUrl: "./qrcode.component.html",
  styleUrls: ["./qrcode.component.css"]
})
export class QrcodeComponent implements OnInit {
  qrcode: any;
  qr(params: any) {
    this.qrcode = params;
  }



  constructor(private api: ApiService) {}

  getQrcode(): void {
    this.api.post("/", { payload: uuid() }).subscribe(s => this.qr(s));
  }

  ngOnInit() {
    this.getQrcode();
  }
}
