import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  title = 'Sidenav';
  sections: any[] = [
    { title: 'Login' },
    { title: 'News' },
    { title: 'Archive' },
    { title: 'Relevant' },
    { title: 'Subscribe' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
