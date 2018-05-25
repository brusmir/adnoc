import { NgModule } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  declarations: [
    SidebarComponent,
    NavbarComponent
  ],
  imports: [        
    RouterModule
  ], 
  exports: [
    SidebarComponent,
    NavbarComponent
  ],
  providers: [],
})
export class CoreModule { }