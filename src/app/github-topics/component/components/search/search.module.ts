import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { ServiceService } from '../../../service/topics.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers:[ServiceService],
  declarations: [SearchComponent],
})
export class SearchModule { }
