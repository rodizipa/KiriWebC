import {NgModule} from '@angular/core';
import {ChildListComponent} from './list/child.list.component';
import {CommonModule} from '@angular/common';
import {AppRoutingModule} from '../app-routing.module';
import {ChildDetailComponent} from './detail/child.detail.component';


@NgModule({
  declarations: [
    ChildListComponent,
    ChildDetailComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class ChildModule {}
