import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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
    if(!localStorage.getItem('nomClient')){
      this.router.navigate(['/login'])
        }
  }
  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();

  onSubmit(recharge: NgForm) {
    
    /*  let a = this.compteService.verser(recharge.value).subscribe(
        (response:any) => {
        if(response){
          console.log(response);
          this.notifierService.showNotification("Transaction done successfully" ,"",'success');
  
        }else{
          this.notifierService.showNotification("incorrect rib number !","",'danger');
  
        }
        console.log(response)},
        (err : HttpErrorResponse) => {
          console.log (err)});*/
    }



  toggleSideBar() {
    this.toggleSideBarForMe.emit();
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }
  
  logout(){
    localStorage.removeItem("currentClient");
    this.router.navigate(['/login']);
  }





  clicSurBouton(){
    this.compteService.VerserSoldeClient(this.compte).subscribe(
      (response : any) => {
        this.compte = response},(err :HttpErrorResponse)=> {console.log(err)}  
    );

    alert("BOnjour vous venez de charger le numero de telephone, pour envoyer un recu dans votre boite mail confirme");
  }



}
