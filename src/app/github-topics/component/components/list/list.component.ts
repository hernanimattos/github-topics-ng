import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../../service/service.service';

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"],
  providers: [ServiceService]
})
export class ListComponent implements OnInit {
	teste: string;
  constructor(private service: ServiceService) {


  }

  ngOnInit() {}

  gg(){
	  const t = this.service.teste();
	  return t;
  }



}
