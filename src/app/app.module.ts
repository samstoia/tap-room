import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { KegListComponent } from './keg-list/keg-list.component';
import { NewKegFormComponent } from './new-keg-form/new-keg-form.component';
import { EditKegComponent } from './edit-keg/edit-keg.component';
import { FormsModule } from '@angular/forms';
import { LowKegComponent } from './low-keg/low-keg.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    KegListComponent,
    NewKegFormComponent,
    EditKegComponent,
    LowKegComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
