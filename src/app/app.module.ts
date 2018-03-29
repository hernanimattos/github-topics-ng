import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ListModule  } from './list';
import { SearchModule } from "./search";
import { ModalModule } from "./modal";



@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ListModule, SearchModule, ModalModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
