import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { GithubTopicsModule } from './github-topics/github-topics.module';




@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, GithubTopicsModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
