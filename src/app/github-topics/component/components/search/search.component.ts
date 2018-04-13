import { Component, OnInit } from '@angular/core';
import { ServiceService } from "../../../service/topics.service";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit {
  topics: Array<any> = [];
  constructor(private service: ServiceService) {}

  ngOnInit() {}

  setTopics() {
    this.topics = this.service.getTopics();
  }
}
