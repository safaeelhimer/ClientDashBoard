import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Client} from '../client';

import { ActivatedRoute, Router } from '@angular/router';

import { CompteService } from "../compte.service";





@Component({
  selector: 'app-parametre',
  templateUrl: './parametre.component.html',
  styleUrls: ['./parametre.component.css']
})
export class ParametreComponent implements OnInit {

  public client!: Client
  public id = ""

  constructor(private route: ActivatedRoute,private router: Router, private compteService: CompteService) { }

  ngOnInit(): void{
   // this.client = new Client();\
   let currentClient = localStorage.getItem('currentClient');
   let id = 'gg';

    //this.id = this.route.snapshot.params['id'];
    
    this.compteService.getClient(id)
      .subscribe(data => {
        console.log(data)
        this.client = data;
      }, error => console.log(error));
  }

  
    
  updateEmployee() {
    this.compteService.updateEmployee(this.id, this.client)
      .subscribe(data => {
        console.log(data);
        this.client = data as Client;
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateEmployee();    
  }
  logout(){
    localStorage.removeItem("currentClient");
    this.router.navigate(['/login']);
  }
  gotoList() {
    this.router.navigate(['/clients']);
  }

}
