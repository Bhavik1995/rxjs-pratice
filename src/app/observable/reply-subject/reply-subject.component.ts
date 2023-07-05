import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reply-subject',
  templateUrl: './reply-subject.component.html',
  styleUrls: ['./reply-subject.component.scss']
})
export class ReplySubjectComponent implements OnInit {

  // List Data
  user1List = [
    'Angular 1',
    'Angular 2',
  ];
  user2List = [];
  user3List = [];

  constructor() { }

  ngOnInit(): void {
  }

}
