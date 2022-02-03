import { darkModeSelector } from './../../reducers/dark-mode';
import { Component, OnInit } from '@angular/core';
import { Observable, take } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { toggle } from 'src/app/state/actions/dark-mode.actions';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  authorized = true;
  darkMode$ = this.store.select(darkModeSelector);

  constructor(private store: Store) {}

  toggleDarkMode() {
    this.store.dispatch(toggle());
    console.log(this.darkMode$);
  }

  ngOnInit(): void {}
}
