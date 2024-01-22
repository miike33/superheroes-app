import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { HeroesListLiterals } from '../../constants/constants';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [],
})
export class ListComponent implements OnInit {
  public literals = HeroesListLiterals;
  public filterSearch: string = '';

  constructor(public heroesService: HeroesService) {}

  ngOnInit(): void {
    this.heroesService.getHeroesAndSetState();
  }
}
