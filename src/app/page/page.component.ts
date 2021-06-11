import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Router } from '@angular/router';

import { CompteService } from "../compte.service";
import { Compte } from "../compte";
import { core } from '@angular/compiler';
import { HttpErrorResponse } from '@angular/common/http';
import { Client } from '../client';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  comptes : Compte[] = []
  client!:Client;

  constructor(private compteService : CompteService, private router : Router) { }

  ngOnInit(): void {

    this.reloadData();
  }
  reloadData() {
    let id = localStorage.getItem('currentClient')!
    let client = this.compteService.getClient(id).subscribe((response:any) =>  {
      this.client = response},(err :HttpErrorResponse)=> {console.log(err)}  
    );
    let comptes= this.compteService.getClientComptes(this.client).subscribe((response:any) =>  {
      this.comptes = response},(err :HttpErrorResponse)=> {console.log(err)}  
  );
    
  }

 // employeeDetails(id: number){
    //this.router.navigate(['details', id]);
  //}

}
