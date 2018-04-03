import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../../service/topics.service';

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"],
  providers: [ServiceService]
})
export class ListComponent {
		cursos;
		name:string;

  constructor(private service: ServiceService) {
		this.name = 'hernani';
  }




}
