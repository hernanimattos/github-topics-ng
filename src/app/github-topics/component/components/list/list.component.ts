import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../../service/topics.service';

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"],
  providers: [ServiceService]
})
export class ListComponent implements OnInit {
		cursos;

  constructor(private service: ServiceService) {
		this.cursos = this.service.listName;
  }

  ngOnInit() {}

}
