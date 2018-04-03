import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";

import { Injectable } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import {  HttpHeaders } from '@angular/common/http';
import { Http, Response } from "@angular/http";


@Injectable()
export class ServiceService {
  requestUrl: string =  " https://api.github.com/search/topics?q=ruby",
	requetHeader: any = new HttpHeaders({'Accept': 'application/vnd.github.mercy-preview+json'})


  constructor(private _http: Http) {
	  this.getTopics();
  }

  getTopics(){

	// console.log(this._http.get(this.requestUrl, this.requetHeader ));
	const r = this._http.get(this.requestUrl, this.requetHeader ).map((res: Response)=> res.json()).subscribe(data=>
	console.log(data))
	console.log(r, 'dd')



  }
}
