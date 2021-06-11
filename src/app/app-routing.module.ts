import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageComponent} from './page/page.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { Page1Component } from './page1/page1.component';
import { VirementComponent } from './virement/virement.component';
import { ParametreComponent } from './parametre/parametre.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path: "page" , component : PageComponent},
  {path: "home" , component : HomeComponent},
  {path: "contact" , component : ContactComponent},
  {path: "" , redirectTo: "login" , pathMatch: "full"},
  {path: "page1" , component : Page1Component},
  {path: "parametre" , component : ParametreComponent},
  {path: "virement" , component : VirementComponent},
  {path: "login" , component : LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
