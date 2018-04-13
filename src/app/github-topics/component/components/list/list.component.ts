import { Component, OnInit } from '@angular/core';


@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"],
})
export class ListComponent {
		cursos;
		name:string;

  constructor(){
		this.name = 'hernani';
  }

}
