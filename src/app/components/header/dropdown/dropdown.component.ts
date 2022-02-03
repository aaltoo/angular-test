import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { darkModeSelector } from 'src/app/reducers/dark-mode';
import { toggle } from 'src/app/state/actions/dark-mode.actions';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent implements OnInit {
  darkMode$ = this.store.select(darkModeSelector);
  darkModeAsync: boolean | undefined;
  toggleDarkMode() {
    this.store.dispatch(toggle());
    this.darkMode$.subscribe(
      (data: boolean | undefined) => (this.darkModeAsync = data)
    );
    localStorage.setItem('darkMode', String(this.darkModeAsync));
  }

  constructor(private store: Store) {}

  ngOnInit(): void {}
}
