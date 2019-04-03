import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { KegListComponent } from './keg-list/keg-list.component';
import { NewKegFormComponent } from './new-keg-form/new-keg-form.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    KegListComponent,
    NewKegFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
