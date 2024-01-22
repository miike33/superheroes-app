import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Hero, Team } from '../../models/heroes.model';
import { AddHeroLiterals, URL } from '../../constants/constants';
import { DeleteHeroDialogService } from '../../services/delete-hero-dialog.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-hero',
  templateUrl: './add-hero.component.html',
  styles: [],
})
export class AddHeroComponent implements OnInit {
  public literals = AddHeroLiterals;
  public teamTypes: Team[] = Object.values(Team);
  public heroesListUrl: string = URL.heroesListUrl;

  public heroForm = new FormGroup({
    id: new FormControl<string>(''),
    name: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    aliases: new FormControl<string>('', [Validators.required]),
    team: new FormControl<Team>(Team.noTeam, [Validators.required]),
    city: new FormControl<string>('', [Validators.required]),
    image: new FormControl<string>('', [Validators.required]),
  });

  constructor(
    private heroService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private showDialogAndDeleteService: DeleteHeroDialogService,
    private router: Router,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit(): void {
    if (!this.router.url.includes('edit')) return;

    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.heroService.getHeroById(id)))
      .subscribe((hero) => {
        if (!hero) return this.redirectToHeroesList;
        this.heroForm.reset(hero);
        return;
      });
  }

  get heroValues(): Hero {
    const dataHero: Hero = this.heroForm.value as Hero;
    return dataHero;
  }

  onSubmit(): void {
    if (this.heroForm.invalid) return;

    if (this.heroValues.id) {
      this.heroService.updateHero(this.heroValues).subscribe((hero) => {
        this.showSnackbar(hero.name + ' actualizado');
        this.redirectToHeroesList();
      });
    } else {
      this.heroForm.controls['id'].setValue(this.randomId);
      this.heroService.addHero(this.heroValues).subscribe((hero) => {
        this.showSnackbar(hero.name + ' creado');
        this.redirectToHeroesList();
      });
    }
  }

  showSnackbar(message: string): void {
    this.snackbar.open(message, 'Aceptar');
  }

  onDeleteHero(): void {
    if (!this.heroValues.id) throw Error('El heroe no existe');
    this.showDialogAndDeleteService.showDialogAndDeleteHero(this.heroValues);
  }

  redirectToHeroesList(): void {
    this.router.navigateByUrl(this.heroesListUrl);
  }

  get randomId(): string {
    return Math.random()
      .toString(36)
      .replace(/[^a-z]+/g, '');
  }
}
