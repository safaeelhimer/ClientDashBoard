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
    if(!localStorage.getItem('nomClient')){
      this.router.navigate(['/login'])
        }


    this.getComptes()
    console.log("this "  ,this.client)
  }
  reloadData() {
    let id = localStorage.getItem('currentClient')!
    let client = this.compteService.getClient(id).subscribe((response:any) =>  {
      this.client = response; console.log(response)},(err :HttpErrorResponse)=> {console.log(err)}  
    );
    console.log("client : ",this.client)
    let comptes= this.compteService.getClientComptes(id).subscribe((response:any) =>  {
      this.comptes = response},(err :HttpErrorResponse)=> {console.log(err)}  
  );
    
  }

 // employeeDetails(id: number){
    //this.router.navigate(['details', id]);
  //}
 

  public getComptes(){
    
    let id = localStorage.getItem('currentClient')!
    this.compteService.getClientComptes(id).subscribe((response:any) =>  {
      this.comptes = response},(err :HttpErrorResponse)=> {console.log(err)})

  }

 // employeeDetails(id: number){
    //this.router.navigate(['details', id]);
  //}
  logout(){
    localStorage.removeItem("currentClient");
    this.router.navigate(['/login']);
  }

}
