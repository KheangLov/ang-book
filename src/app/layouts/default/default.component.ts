import { Component } from '@angular/core';

import { ThemeService } from 'src/app/services/theme.service';
import { ThemeType, THEME_LIST } from 'src/app/types/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss'],
})
export class DefaultComponent {
  theme: ThemeType = ThemeType.dark;
  themeOptions = THEME_LIST;

  constructor(private _themeService: ThemeService) {}

  toggleTheme(): void {
    this._themeService.toggleTheme().then(theme => (this.theme = theme));
  }
}
