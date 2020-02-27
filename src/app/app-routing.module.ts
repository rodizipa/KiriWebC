import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ChildListComponent} from './child/list/child.list.component';
import {ChildDetailComponent} from './child/detail/child.detail.component';


const routes: Routes = [
  {path: 'child', component: ChildListComponent},
  {path: 'child/:id', component: ChildDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
