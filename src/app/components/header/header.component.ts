import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { toggleDarkMode } from 'src/app/state/actions/dark-mode.actions';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  authorized = true;
  darkMode$: Observable<boolean>;
  constructor(private store: Store<{ darkMode: boolean }>) {
    this.darkMode$ = this.store.select('darkMode');
    console.log(this.darkMode$);
  }

  toggleDarkMode() {
    this.store.dispatch(toggleDarkMode());
  }

  ngOnInit(): void {}
}
