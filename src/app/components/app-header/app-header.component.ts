import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.less']
})
export class AppHeaderComponent implements OnInit {

  appName: string = 'TODOs';
  appVersion: string = '1.0.0';

  constructor() { }

  ngOnInit(): void {
  }

}
