import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Friend } from 'src/app/models/friend-model';
import { darkModeSelector } from 'src/app/reducers/dark-mode';
import { getHeadOfArray } from 'src/helpers/getHeadOfArray';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  friends = [
    {
      name: 'Test',
      id: '2',
    },
    {
      name: 'Test 2',
      id: '3',
    },
    {
      name: 'Test 3',
      id: '4',
    },
    {
      name: 'Test 4',
      id: '5',
    },
    {
      name: 'Test 5',
      id: '6',
    },
    {
      name: 'Test 6',
      id: '7',
    },
    {
      name: 'Test 7',
      id: '8',
    },
    {
      name: 'Test 8',
      id: '9',
    },
    {
      name: 'Test 9',
      id: '10',
    },
  ];
  friendsHead: Friend[] = getHeadOfArray(this.friends, 6);
  input = '';
  posts: string[] = [];
  constructor() {}
  ngOnInit(): void {}

  onPost() {
    this.posts.push(this.input);
    this.input = '';
  }
}
