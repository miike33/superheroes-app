import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Hero } from '../models/heroes.model';
import { ConfirmDialogComponent } from '../components/confirmDialog/confirmDialog.component';
import { filter, switchMap } from 'rxjs';
import { Router } from '@angular/router';
import { HeroesService } from './heroes.service';
import { URL } from '../../heroes/constants/constants';

@Injectable({
  providedIn: 'root',
})
export class DeleteHeroDialogService {
  public heroesListUrl: string = URL.heroesListUrl;

  constructor(
    private dialog: MatDialog,
    private router: Router,
    private heroService: HeroesService
  ) {}

  showDialogAndDeleteHero(heroData: Hero): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: heroData,
    });

    dialogRef
      .afterClosed()
      .pipe(
        filter(Boolean),
        switchMap(() => this.heroService.deleteHeroById(heroData.id)),
        filter(Boolean)
      )
      .subscribe(() => {
        this.heroService.getHeroesAndSetState();
        this.router.navigateByUrl(this.heroesListUrl);
      });
  }
}
