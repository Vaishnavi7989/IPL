import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { IplRoutingModule } from "./ipl-routing.module";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { TeamCreateComponent } from "./components/teamcreate/teamcreate.component";
import { MatchCreateComponent } from "./components/matchcreate/matchcreate.component";
import { CricketerArrayComponent } from "./components/cricketerarray/cricketerarray.component";
import { CricketerCreateComponent } from "./components/cricketercreate/cricketercreate.component";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [
    TeamCreateComponent,
    MatchCreateComponent,
    CricketerArrayComponent,
    CricketerCreateComponent
  ]
})
export class IplModule {}
