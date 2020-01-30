import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { MaterialModule } from './material.module'

import { AppComponent } from './app.component';
import { QuickSortComponent } from './quick-sort/quick-sort.component';
import { MergeSortComponent } from './merge-sort/merge-sort.component';
import { BoubleSortComponent } from './bouble-sort/bouble-sort.component';
import { AppRoutingModule } from './app-routing.module';
import { MenuFabComponent } from './menu-fab/menu-fab.component';

@NgModule({
  declarations: [
    AppComponent,
    QuickSortComponent,
    MergeSortComponent,
    BoubleSortComponent,
    MenuFabComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
