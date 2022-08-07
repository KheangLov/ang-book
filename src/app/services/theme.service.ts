import { Injectable, RendererFactory2 } from '@angular/core';

import { ThemeType } from '../types/core';

@Injectable()
export class ThemeService {
  private _currentTheme = ThemeType.dark;
  private _renderer: any;
  private _colorTheme: any;

  constructor(private readonly _rendererFactory: RendererFactory2) {}

  initTheme() {
    this._colorTheme = this._getColorTheme();

    this._renderer.addClass(document.body, this._colorTheme);
  }

  update(theme: 'dark-mode' | 'light-mode') {
    const _previousColorTheme =
      theme === 'dark-mode' ? 'light-mode' : 'dark-mode';

    this._setColorTheme(theme);

    this._renderer.removeClass(document.body, _previousColorTheme);
    this._renderer.addClass(document.body, theme);
  }

  isDarkMode() {
    return this._colorTheme === 'dark-mode';
  }

  loadRenderer() {
    this._renderer = this._rendererFactory.createRenderer(null, null);
  }

  loadTheme(firstLoad = true): Promise<ThemeType> {
    const _theme = this._currentTheme;

    if (firstLoad) {
      document.documentElement.classList.add(_theme);
    }

    return new Promise<ThemeType>((resolve, reject) => {
      this._loadCss(`${_theme}.css`, _theme).then(
        e => {
          if (!firstLoad) {
            document.documentElement.classList.add(_theme);
          }
          this._removeUnusedTheme(this._reverseTheme(_theme));
          resolve(this._currentTheme);
        },
        e => reject(e)
      );
    });
  }

  toggleTheme(): Promise<ThemeType> {
    this._currentTheme = this._reverseTheme(this._currentTheme);
    return this.loadTheme(false);
  }

  private _setColorTheme(theme: any) {
    this._colorTheme = theme;

    localStorage.setItem('user-theme', theme);
  }

  private _getColorTheme(): string {
    let theme = localStorage.getItem('user-theme');

    if (!theme) {
      theme = 'light-mode';
    }

    return theme;
  }

  private _reverseTheme(theme: string): ThemeType {
    return theme === ThemeType.dark ? ThemeType.default : ThemeType.dark;
  }

  private _removeUnusedTheme(theme: ThemeType): void {
    document.documentElement.classList.remove(theme);
    const _removedThemeStyle = document.getElementById(theme);
    if (_removedThemeStyle) {
      document.head.removeChild(_removedThemeStyle);
    }
  }

  private _loadCss(href: string, id: string): Promise<Event> {
    return new Promise((resolve, reject) => {
      const _style = document.createElement('link');
      _style.rel = 'stylesheet';
      _style.href = href;
      _style.id = id;
      _style.onload = resolve;
      _style.onerror = reject;
      document.head.append(_style);
    });
  }
}
