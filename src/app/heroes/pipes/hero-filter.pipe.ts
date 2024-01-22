import { Pipe, type PipeTransform } from '@angular/core';
import { Hero } from '../models/heroes.model';

@Pipe({
  name: 'heroFilter',
})
export class HeroFilterPipe implements PipeTransform {
  transform(heroes: Hero[] | undefined, filterBy: string): Hero[] | undefined {
    const filter = filterBy ? filterBy.toLowerCase() : null;
    return filter && heroes
      ? heroes.filter((hero: Hero) => hero.name.toLowerCase().includes(filter))
      : heroes;
  }
}
