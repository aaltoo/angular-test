import { darkModeSelector } from './../../reducers/dark-mode';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { toggle } from 'src/app/state/actions/dark-mode.actions';
import { async } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  authorized = true;
  darkMode$ = this.store.select(darkModeSelector);
  dropDownActive = false;
  darkModeFromLocalStorage: string | null = null;

  constructor(private store: Store) {}

  setDropDown() {
    this.dropDownActive = !this.dropDownActive;
  }

  ngOnInit(): void {
    this.darkModeFromLocalStorage = localStorage.getItem('darkMode');
    if (this.darkModeFromLocalStorage === 'true') {
      this.store.dispatch(toggle());
    }
  }

  ngOnDestroy(): void {}
}
