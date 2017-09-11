import { Component, OnInit } from '@angular/core';
import { Chats, Messages } from 'api/collections';
import { Chat } from 'api/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  chats = "Cannot reach Meteor backend";

  constructor() {}

  ngOnInit() {
    Chats.find({}).subscribe((chats) => {
      console.log(chats);
      this.chats = chats;
    });
  }
}
