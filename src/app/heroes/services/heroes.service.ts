import { environments } from './../../../environments/environments';
import { Injectable, computed, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, filter, map, of, switchMap } from 'rxjs';
import { Hero } from '../models/heroes.model';

@Injectable({ providedIn: 'root' })
export class HeroesService {
  private baseUrl: string = environments.baseUrl;
  private superHeroesLiteral: string = 'superheroes';

  private heroesState = signal<Hero[] | undefined>([]);
  public heroesList = computed(() => this.heroesState());

  constructor(private http: HttpClient) {}

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${this.baseUrl}/${this.superHeroesLiteral}`);
  }

  getHeroesAndSetState(): void {
    this.getHeroes().subscribe((resp) => {
      this.heroesState.set(resp);
    });
  }

  getHeroById(id: string): Observable<Hero> {
    return this.http.get<Hero>(
      `${this.baseUrl}/${this.superHeroesLiteral}/${id}`
    );
  }

  addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(
      `${this.baseUrl}/${this.superHeroesLiteral}`,
      hero
    );
  }

  deleteHeroById(heroId: string): Observable<boolean> {
    return this.http
      .delete<Hero>(`${this.baseUrl}/${this.superHeroesLiteral}/${heroId}`)
      .pipe(
        map(Boolean),
        catchError((err) => of(false))
      );
  }

  updateHero(hero: Hero): Observable<Hero> {
    return this.http.patch<Hero>(
      `${this.baseUrl}/superheroes/${hero.id}`,
      hero
    );
  }

  getHeroByName(param: string): Observable<Hero[]> {
    return this.http
      .get<Hero[]>(`${this.baseUrl}/${this.superHeroesLiteral}`)
      .pipe(
        map((resp) => resp),
        filter((hero: any) => hero.name.includes(param))
      );
  }
}
