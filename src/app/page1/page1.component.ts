import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { CompteService } from "../compte.service";
import { core } from '@angular/compiler';
import { HttpErrorResponse } from '@angular/common/http';
import { Compte } from "../compte";

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
  public compte! : Compte

  constructor(private compteService: CompteService, private router: Router) { }

  ngOnInit(): void {
    let currentClient = localStorage.getItem('currentClient')
  }

  onSubmit(form: NgForm) {
    console.log(form.value);

  }




  clicSurBouton(){
    this.compteService.VerserSoldeClient(this.compte).subscribe(
      (response : any) => {
        this.compte = response},(err :HttpErrorResponse)=> {console.log(err)}  
    );

    alert("BOnjour vous venez de charger le numero de telephone, pour envoyer un recu dans votre boite mail confirme");
  }


}
