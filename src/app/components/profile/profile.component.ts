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
  input = '';
  posts: string[] = [];
  constructor(private store: Store) {}
  ngOnInit(): void {}

  onPost() {
    this.posts.push(this.input);
    this.input = '';
  }
}
