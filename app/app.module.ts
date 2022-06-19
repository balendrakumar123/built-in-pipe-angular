import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { OddPipe } from './odd.pipe';
import { ExamplePipe } from './example.pipe';
import { AddPipe } from './add.pipe';
import { MyDirective } from './my.directive';
import { MycurrencyPipe } from './mycurrency.pipe';
import { SubtractPipe } from './subtract.pipe';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, OddPipe, ExamplePipe, AddPipe, MyDirective, MycurrencyPipe, SubtractPipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
