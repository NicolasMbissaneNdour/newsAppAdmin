import { CategoryComponent } from './views/category/category.component';
import { ALaUneComponent } from './views/a-la-une/a-la-une.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path:'',component:ALaUneComponent},
  { path:'category',component:CategoryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
