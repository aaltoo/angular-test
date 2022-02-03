import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { darkModeSelector } from 'src/app/reducers/dark-mode';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  darkMode$ = this.store.select(darkModeSelector);

  constructor(private store: Store) {}

  ngOnInit(): void {}
}
