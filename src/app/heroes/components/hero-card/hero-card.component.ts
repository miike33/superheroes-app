import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../../models/heroes.model';
import { URL } from '../../constants/constants';
import { HeroesService } from '../../services/heroes.service';
import { DeleteHeroDialogService } from '../../services/delete-hero-dialog.service';

@Component({
  selector: 'hero-card',
  templateUrl: './hero-card.component.html',
})
export class HeroCardComponent implements OnInit {
  public editHeroUrl: string = URL.editHeroUrl;
  public showHeroUrl: string = URL.showHeroUrl;
  public assetsUrl: string = URL.assetsUrl;

  @Input()
  public hero!: Hero;

  constructor(
    private heroService: HeroesService,
    private showDialogAndDeleteService: DeleteHeroDialogService
  ) {}

  ngOnInit(): void {
    if (!this.hero) throw Error('Es necesario un heroe');
  }

  onDeleteHero(hero: Hero): void {
    this.showDialogAndDeleteService.showDialogAndDeleteHero(this.hero);
  }
}
