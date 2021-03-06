import { Injectable } from "@angular/core";
import { Http, Response, URLSearchParams,Headers } from "@angular/http";

import { environment } from "../../../environments/environment";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";


@Injectable()
export class ApiService {
  constructor(private http: Http) {}

  private setHeaders(): Headers {
    let  h = new Headers();
    h.append("Access-Control-Allow-Origin",'*');
    h.append("Content-Type","application/json");
    h.append("Accept", "application/json");
    return h;

  }

  private formatErrors(error: any) {
    return Observable.throw(error.json());
  }

  get(
    path: string,
    params: URLSearchParams = new URLSearchParams()
  ): Observable<any> {
    return this.http
      .get(`${environment.urlApi}${path}`, {
        headers: this.setHeaders(),
        search: params
      })
      .catch(this.formatErrors)
      .map((res: Response) => res.json());
  }

  put(path: string, body: Object = {}): Observable<any> {
    return this.http
      .put(`${environment.urlApi}${path}`, JSON.stringify(body), {
        headers: this.setHeaders()
      })
      .catch(this.formatErrors)
      .map((res: Response) => res.json());
  }

  post(path: string, body: Object = {}): Observable<any> {
    return this.http
      .post(`${environment.urlApi}${path}`, JSON.stringify(body), {
        headers: this.setHeaders()
      })
      .catch(this.formatErrors)
      .map((res: Response) => res.json());
  }

  delete(path): Observable<any> {
    return this.http
      .delete(`${environment.urlApi}${path}`, { headers: this.setHeaders() })
      .catch(this.formatErrors)
      .map((res: Response) => res.json());
  }
}
