import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './views/layout/layout.component';
import { AddHeroComponent } from './views/add-hero/add-hero.component';
import { HeroComponent } from './views/hero/hero.component';
import { ListComponent } from './views/list/list.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'add-hero', component: AddHeroComponent },
      { path: 'edit/:id', component: AddHeroComponent },
      { path: 'list', component: ListComponent },
      { path: 'id/:id', component: HeroComponent },
      { path: '**', redirectTo: 'list' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeroesRoutingModule {}
