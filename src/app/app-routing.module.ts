import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router'; // Routes 只做类型使用class
// import { CommonModule } from '@angular/common';
import {HerosComponent} from './heros/heros.component'
import {DashboardComponent} from './dashboard/dashboard.component'
import {HeroDetailComponent} from './hero-detail/hero-detail.component';

const routes : Routes = [
  {
    path: 'heroes',
    component: HerosComponent // 把一个声明做为值使用
  }, {
    path: 'dashboard',
    component: DashboardComponent
  }, {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }, {
    path: 'detail/:id',
    component: HeroDetailComponent
  }
]

@NgModule({
  // declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
