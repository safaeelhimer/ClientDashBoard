import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageComponent } from './page/page.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { Page1Component } from './page1/page1.component';
import { VirementComponent } from './virement/virement.component';
import { ParametreComponent } from './parametre/parametre.component';
//import { CompteService } from './parametre.component';


@NgModule({
  declarations: [
    AppComponent,


  
    PageComponent,
         HomeComponent,
         ContactComponent,
         Page1Component,
         VirementComponent,
         ParametreComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
