import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";

import { Injectable } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { Http, Response, Headers } from "@angular/http";


@Injectable()
export class ServiceService {
  requestUrl: string =  " https://api.github.com/search/topics?q=ruby";

  constructor(private _http: Http) {
	  this.getTopics();
  }

  getTopics(){
	const r = this._http
    .get(this.requestUrl, {
      headers: new Headers({
        Accept: "application/vnd.github.mercy-preview"
      })
    })
    .map((res: Response) => res.json())
	.subscribe(data => data);



  }
}
