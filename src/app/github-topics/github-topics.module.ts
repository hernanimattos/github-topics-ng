import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchComponent } from "./component/components/search/search.component";
import { ListComponent } from './component/components/list/list.component';
import { GithubTopicsComponent } from "./component/github-topics.component";
import { ServiceService } from './service/service.service';

@NgModule({
  imports: [CommonModule],
  declarations: [GithubTopicsComponent, ListComponent, SearchComponent],
  exports: [GithubTopicsComponent],
  providers: [ServiceService]
})
export class GithubTopicsModule {}
