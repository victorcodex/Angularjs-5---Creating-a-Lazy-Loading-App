import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyloadingComponent } from './lazyloading.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', component: LazyloadingComponent }
]


@NgModule({
  imports: [
    CommonModule,
      RouterModule.forChild(routes)
  ],
  declarations: [LazyloadingComponent]
})
export class LazyloadingModule { }
