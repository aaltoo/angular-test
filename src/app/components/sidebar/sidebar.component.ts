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
  navLinks = [
    {
      name: 'Моя страница',
      path: 'profile',
    },
    {
      name: 'Мои друзья',
      path: 'friends',
    },
    {
      name: 'Новости',
      path: 'feed',
    },
    {
      name: 'Сообщения',
      path: 'messages',
    },
  ];
  constructor(private store: Store) {}

  ngOnInit(): void {}
}
