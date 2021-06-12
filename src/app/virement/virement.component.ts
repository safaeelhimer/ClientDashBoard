import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { CompteService } from "../compte.service";
import { core } from '@angular/compiler';
import { HttpErrorResponse } from '@angular/common/http';
import { Compte } from "../compte";
import { Client } from '../client';
import { objectVersement } from '../objectVersement';
import { __values } from 'tslib';


@Component({
  selector: 'app-virement',
  templateUrl: './virement.component.html',
  styleUrls: ['./virement.component.css']
})

export class VirementComponent implements OnInit {
  public comptes : Compte[] = [];
  public client! : Client;
  public id!:string;


  constructor(private compteService : CompteService, private router : Router) { }

  ngOnInit(): void {
    if(!localStorage.getItem('nomClient')){
      this.router.navigate(['/login'])
        }
    this.methode();

  }

  
  public methode() {

    let currentClient = localStorage.getItem('currentClient')!
    let id = currentClient;

    let client = this.compteService.getClient(id).subscribe((response:any) =>  {
      this.client = response},(err :HttpErrorResponse)=> {console.log(err)}  
    );
    let comptes= this.compteService.getClientComptes(id).subscribe((response:any) =>  {
      this.comptes = response},(err :HttpErrorResponse)=> {console.log(err)}  
  );
    
  }

  onSubmit(versement: NgForm) {
    let object :objectVersement;
    object = versement.value;
    object.c1 = this.id
    let a = this.compteService.VerserSoldeClient(object).subscribe((response:any) =>  {
      this.comptes = response},(err :HttpErrorResponse)=> {console.log(err)}  
  );
  console.log("his",object);
  }
  logout(){
    localStorage.removeItem("currentClient");
    localStorage.clear();
    this.router.navigate(['login']);
  }
  

 



}
