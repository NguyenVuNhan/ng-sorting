import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoubleSortComponent } from './bouble-sort/bouble-sort.component';

import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: 'bouble-sort', component: BoubleSortComponent}
]

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
