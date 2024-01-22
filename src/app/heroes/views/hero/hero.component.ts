import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Hero } from '../../models/heroes.model';
import { ActivatedRoute, Router } from '@angular/router';
import { delay } from 'rxjs';
import { HeroInfoLiterals, URL } from '../../constants/constants';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styles: [],
})
export class HeroComponent implements OnInit {
  public hero!: Hero;
  public heroesListUrl: string = URL.heroesListUrl;
  public literals = HeroInfoLiterals;

  constructor(
    private heroesService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.pipe().subscribe((params) => {
      this.heroesService
        .getHeroById(params['id'])
        .pipe(delay(2000))
        .subscribe((hero: Hero) => (this.hero = hero));
    });
  }

  goBack(): void {
    this.router.navigateByUrl(this.heroesListUrl);
  }
}
