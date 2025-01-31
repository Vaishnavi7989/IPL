import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AuthRoutingModule } from "./auth-routing.module";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
<<<<<<< HEAD
import { RegistrationComponent } from "./components/registration/registration.component";
import { LoginComponent } from "./components/login/login.component";

@NgModule({
  declarations: [
    RegistrationComponent,
    LoginComponent

  ],
=======

@NgModule({
  declarations: [],
>>>>>>> 6c06a7618829a555b9f48700ca0d1f617c0ae0e9
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [
    
  ]
})
export class AuthModule {}
