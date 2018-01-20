import { Component, OnInit } from "@angular/core";
import { ApiService } from "./../shared/services/api.service";
import * as uuid from "uuid/v4";

@Component({
  selector: "app-qrcode",
  templateUrl: "./qrcode.component.html",
  styleUrls: ["./qrcode.component.css"]
})
export class QrcodeComponent implements OnInit {
  private qrcode: any;

  constructor(private api: ApiService) {}

  getQrcode(): void {
    this.api.post("/", { payload: uuid() }).subscribe(dataUrl => {
      this.qrcode = dataUrl;
    });
  }

  ngOnInit() {
    this.getQrcode();
  }
}
