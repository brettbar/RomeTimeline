import { Component, OnInit } from '@angular/core';
import { AppRoutingModule } from 'src/app/app-routing.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  links = ['overview', 'eras', 'key-people'];
  activeLink = this.links[0];

  constructor() { }

  ngOnInit() {
  }

}