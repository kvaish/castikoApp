import { Component, OnInit } from '@angular/core';
import {MdSidenavModule} from '@angular/material';
import {MdIconModule} from '@angular/material';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  //fullImagePath : String;
  constructor() {
    //this.fullImagePath = '../../assets/logo.png';
  }
  ngOnInit() {
  }

}
