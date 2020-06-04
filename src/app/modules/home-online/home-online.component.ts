import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home-online',
  templateUrl: './home-online.component.html',
  styleUrls: ['./home-online.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeOnlineComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  disconnect() {
    localStorage.removeItem('userToken');
  }

}


