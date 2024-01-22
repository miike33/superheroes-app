import { LayoutLiterals, URL } from '../../constants/constants';
import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styles: [],
})
export class LayoutComponent {
  public literals = LayoutLiterals;
  public addHeroUrl: string = URL.addHeroUrl;
  public heroesListUrl: string = URL.heroesListUrl;
}
