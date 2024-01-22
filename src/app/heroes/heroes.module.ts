import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HeroesRoutingModule } from './heroes-routing.module';
import { MaterialModule } from '../material/material.module';

import { HeroComponent } from './views/hero/hero.component';
import { LayoutComponent } from './views/layout/layout.component';
import { ListComponent } from './views/list/list.component';
import { AddHeroComponent } from './views/add-hero/add-hero.component';
import { HeroCardComponent } from './components/hero-card/hero-card.component';
import { HeroFilterPipe } from './pipes/hero-filter.pipe';
import { ConfirmDialogComponent } from './components/confirmDialog/confirmDialog.component';
import { ToUpperCaseDirective } from './directives/toUpperCase.directive';

@NgModule({
  declarations: [
    HeroComponent,
    LayoutComponent,
    ListComponent,
    AddHeroComponent,
    HeroCardComponent,
    HeroFilterPipe,
    ConfirmDialogComponent,
    ToUpperCaseDirective,
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class HeroesModule {}
