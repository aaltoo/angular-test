import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { darkModeSelector } from 'src/app/reducers/dark-mode';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  darkMode$ = this.store.select(darkModeSelector);

  constructor(private store: Store) {}

  ngOnInit(): void {}
}
