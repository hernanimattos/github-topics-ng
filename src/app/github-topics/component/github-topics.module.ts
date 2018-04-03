import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchComponent } from "./components/search/search.component";
import { ListComponent } from './components/list/list.component';
import { GithubTopicsComponent } from "./github-topics.component";
import { ServiceService } from '../service/topics.service';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [CommonModule, HttpModule],
  declarations: [GithubTopicsComponent, ListComponent, SearchComponent],
  exports: [GithubTopicsComponent],
  providers: [ServiceService]
})
export class GithubTopicsModule {}
