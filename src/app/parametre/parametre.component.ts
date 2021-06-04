import { Component, OnInit } from '@angular/core';
import {User} from '../user';

@Component({
  selector: 'app-parametre',
  templateUrl: './parametre.component.html',
  styleUrls: ['./parametre.component.css']
})
export class ParametreComponent implements OnInit {

  user: User=new User("","","",0,"");

  constructor() { }

  ngOnInit(): void {
  }

}
