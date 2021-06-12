import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //nom!:string;
  nom:string  = " "

  constructor(private router : Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('nomClient')){
    let nomClient = localStorage.getItem('nomClient')!
    this.nom = nomClient;}
    else{
      this.router.navigate(['login'])
    }
  }
  logout(){
    localStorage.clear();
    this.router.navigate(['login']);
  }

}
