import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { darkModeSelector } from './reducers/dark-mode';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title: string = 'angular-test';
  darkMode$ = this.store.select(darkModeSelector);

  constructor(private store: Store) {}
}
