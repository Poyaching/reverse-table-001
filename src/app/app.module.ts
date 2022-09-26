import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReverseTableComponent } from './components/reverse-table/reverse-table.component';
import { ReverseTableTemplateDirective } from './directives/reverse-table-template.directive';

@NgModule({
  declarations: [
    AppComponent,
    ReverseTableComponent,
    ReverseTableTemplateDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
