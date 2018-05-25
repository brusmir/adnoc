import { NgModule } from '@angular/core';
import { NominationsComponent } from './nominations/nominations.component';
import { InboxComponent } from './inbox/inbox.component';
import { DetailsComponent } from './details/details.component';
import { TableComponent } from './nominations/table/table.component';
import { NominationService } from './service/nomination.service';
import { CommonModule } from '@angular/common';
import { DynamicRoutingModule } from './dynamic-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NominationsComponent,
    InboxComponent,
    DetailsComponent,
    TableComponent
  ],
  imports: [        
    CommonModule,
    DynamicRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ], 
  exports: [
    NominationsComponent,
    DynamicRoutingModule,
    InboxComponent,
    DetailsComponent,
    TableComponent
  ],
  providers: [NominationService],
})
export class DynamicModule { }