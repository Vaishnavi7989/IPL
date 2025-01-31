import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
<<<<<<< HEAD
 
// import { IplRoutingModule } from "./ipl-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { CricketerCreateComponent } from "./components/cricketercreate/cricketercreate.component";
import { MatchCreateComponent } from "./components/matchcreate/matchcreate.component";
import { TeamCreateComponent } from "./components/teamcreate/teamcreate.component";
import { TicketBookingComponent } from "./components/ticketbooking/ticketbooking.component";
import { VoteComponent } from "./components/vote/vote.component";
 
@NgModule({
  declarations: [
    MatchCreateComponent,
    TeamCreateComponent,
    CricketerCreateComponent,
    TicketBookingComponent,
    VoteComponent
  ],
=======

import { IplRoutingModule } from "./ipl-routing.module";
<<<<<<< HEAD
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { TicketBookingComponent } from "./components/ticketbooking/ticketbooking.component";
import { VoteComponent } from "./components/vote/vote.component";
import { CricketerArrayComponent } from "./components/cricketerarray/cricketerarray.component";
import { CricketerCreateComponent } from "./components/cricketercreate/cricketercreate.component";
import { MatchCreateComponent } from "./components/matchcreate/matchcreate.component";
import { TeamCreateComponent } from "./components/teamcreate/teamcreate.component";

@NgModule({
  declarations: [
    // TicketBookingComponent,
    // VoteComponent,
    // CricketerArrayComponent,
    // CricketerCreateComponent,
    // MatchCreateComponent
  ],
=======
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [],
>>>>>>> 962ee48949aa724f949bdd38cc910a1e04cf0304
>>>>>>> 6c06a7618829a555b9f48700ca0d1f617c0ae0e9
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
<<<<<<< HEAD
    FormsModule
  ],
  exports: [
   
  ]
})
export class IplModule {}
 
=======
<<<<<<< HEAD
    FormsModule
  ],
  exports: [
    TeamCreateComponent,
    MatchCreateComponent,
    CricketerArrayComponent,
    CricketerCreateComponent
=======
  ],
  exports: [
>>>>>>> 962ee48949aa724f949bdd38cc910a1e04cf0304
    
  ]
})
export class IplModule {}
>>>>>>> 6c06a7618829a555b9f48700ca0d1f617c0ae0e9
