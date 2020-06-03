import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-online',
  templateUrl: './home-online.component.html',
  styleUrls: ['./home-online.component.css']
})
export class HomeOnlineComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  disconnect() {
    localStorage.removeItem('userToken');
    document.location.href = 'http://localhost:4200/';
  }

}
