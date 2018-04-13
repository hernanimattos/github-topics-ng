import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { ListComponent } from "../list/list.component";
// import { ServiceService } from '../../../service/topics.service';

@NgModule({
  imports: [CommonModule],
  exports: [SearchComponent, ListComponent],
  providers: [],
  declarations: [SearchComponent]
})
export class SearchModule {

}
